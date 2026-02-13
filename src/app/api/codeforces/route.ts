import { NextResponse } from "next/server";

export async function GET() {
  const HANDLE = process.env.CODEFORCES_HANDLE;

  if (!HANDLE) {
    return NextResponse.json(
      { error: "CODEFORCES_HANDLE not set" },
      { status: 500 }
    );
  }

  try {
    const [infoRes, ratingRes, statusRes] = await Promise.all([
      fetch(`https://codeforces.com/api/user.info?handles=${HANDLE}`),
      fetch(`https://codeforces.com/api/user.rating?handle=${HANDLE}`),
      fetch(`https://codeforces.com/api/user.status?handle=${HANDLE}`),
    ]);

    const info = await infoRes.json();
    const rating = await ratingRes.json();
    const status = await statusRes.json();

    if (
      info.status !== "OK" ||
      rating.status !== "OK" ||
      status.status !== "OK"
    ) {
      throw new Error("Codeforces API error");
    }

    /* ---------- Compute solved problem count ---------- */
    const solved = new Set<string>();

    for (const sub of status.result) {
      if (sub.verdict === "OK") {
        const key = `${sub.problem.contestId}-${sub.problem.index}`;
        solved.add(key);
      }
    }

    return NextResponse.json({
      user: info.result[0],
      contests: rating.result.length,
      solvedProblems: solved.size,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch Codeforces data" },
      { status: 500 }
    );
  }
}
