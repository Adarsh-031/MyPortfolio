"use client";

import { useEffect, useState } from "react";
import { Link } from "lucide-react";
/* ---------- Types ---------- */
interface LeetCodeStats {
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    acceptanceRate: number;
}

interface CodeforcesUser {
    handle: string;
    rating?: number;
    maxRating?: number;
    rank?: string;
}

/* ---------- Env ---------- */
const LEETCODE_USER = process.env.NEXT_PUBLIC_LEETCODE_USERNAME;

export default function CompetitiveProgrammingStats() {
    const [leetcode, setLeetcode] = useState<LeetCodeStats | null>(null);
    const [codeforces, setCodeforces] = useState<CodeforcesUser | null>(null);
    const [contests, setContests] = useState<number | null>(null);
    const [solvedProblems, setSolvedProblems] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const lcRes = await fetch(
                    `https://leetcode-stats-api.herokuapp.com/${LEETCODE_USER}`
                );
                if (!lcRes.ok) throw new Error();
                setLeetcode(await lcRes.json());

                const cfRes = await fetch("/api/codeforces");
                if (!cfRes.ok) throw new Error();
                const cfData = await cfRes.json();

                setCodeforces(cfData.user);
                setContests(cfData.contests);
                setSolvedProblems(cfData.solvedProblems);
            } catch {
                setError("Failed to load competitive programming stats");
            }
        };

        fetchStats();
    }, []);

    if (error) return <p className="text-red-500">{error}</p>;
    if (!leetcode || !codeforces || contests === null)
        return <p>Loading competitive programming stats...</p>;

    const total = leetcode.easySolved + leetcode.mediumSolved + leetcode.hardSolved;

    return (
        <section className="w-full rounded-2xl border bg-background p-4 md:p-6">
            <h2 className="mb-6 text-2xl md:text-3xl font-semibold">Statistics</h2>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* ---------------- LeetCode ---------------- */}
                <div className="rounded-xl border p-4 md:p-5">
                    <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-xl font-medium"><a className="flex items-center gap-2 hover:text-blue-500 transition-colors" href="https://leetcode.com/u/adarsh_063" target="_blank" rel="noopener noreferrer">LeetCode<Link className="w-4 h-4" /></a></h3>
                        <span className="text-sm md:text-md text-muted-foreground bg-muted px-2 py-0.5 rounded">
                            {leetcode.acceptanceRate}% Acceptance
                        </span>
                    </div>

                    <div className="mb-4">
                        <span className="text-3xl md:text-4xl font-bold text-amber-300">
                        {leetcode.totalSolved}
                        </span>
                        <span className="ml-2 text-lg text-muted-foreground">
                            solved
                        </span>
                    </div>

                    <div className="space-y-4 text-base md:text-lg">
                        <ProgressRow
                            label="Easy"
                            value={leetcode.easySolved}
                            total={total}
                            color="bg-green-500"
                        />
                        <ProgressRow
                            label="Medium"
                            value={leetcode.mediumSolved}
                            total={total}
                            color="bg-yellow-500"
                        />
                        <ProgressRow
                            label="Hard"
                            value={leetcode.hardSolved}
                            total={total}
                            color="bg-red-500"
                        />
                    </div>
                </div>

                {/* ---------------- Codeforces ---------------- */}
                <div className="rounded-xl border p-4 md:p-5">
                    <div className="mb-6 flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-xl font-medium"><a className="flex items-center gap-2 hover:text-blue-500 transition-colors" href="https://codeforces.com/profile/adarsh_33" target="_blank" rel="noopener noreferrer">CodeForces<Link className="w-4 h-4" /></a></h3>
                        <RatingBadge rating={codeforces.rating} />
                    </div>

                    <div className="mb-6 space-y-1">
                        <p className="text-sm text-muted-foreground">Handle</p>
                        <p className="text-lg font-semibold">{codeforces.handle}</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                        <Stat label="Solved" value={solvedProblems} />
                        <Stat label="Contests" value={contests} />
                        <Stat
                            label="Rating"
                            value={codeforces.rating ?? "Unrated"}
                        />
                        <Stat
                            label="Max"
                            value={codeforces.maxRating ?? "—"}
                        />
                        <Stat label="Rank" value={codeforces.rank ?? "—"} />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Components ---------- */

function ProgressRow({
    label,
    value,
    total,
    color,
}: {
    label: string;
    value: number;
    total: number;
    color: string;
}) {
    const percent = total ? Math.round((value / total) * 100) : 0;

    return (
        <div>
            <div className="mb-1 flex justify-between">
                <span className="text-muted-foreground">{label}</span>
                <span>{value}</span>
            </div>
            <div className="h-2 w-full rounded bg-muted">
                <div
                    className={`h-2 rounded ${color}`}
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    );
}

function RatingBadge({ rating }: { rating?: number }) {
    if (!rating) {
        return (
            <span className="rounded bg-muted px-2 py-1 text-lg">
                Unrated
            </span>
        );
    }

    const color =
        rating < 1200
            ? "bg-gray-500"
            : rating < 1400
                ? "bg-green-600"
                : rating < 1600
                    ? "bg-cyan-600"
                    : rating < 1900
                        ? "bg-blue-600"
                        : "bg-purple-600";

    return (
        <span
            className={`rounded px-2 py-1 text-lg font-medium text-white ${color}`}
        >
            {rating}
        </span>
    );
}

function Stat({
    label,
    value,
}: {
    label: string;
    value: string | number;
}) {
    return (
        <div className="text-lg">
            <p className="text-muted-foreground">{label}</p>
            <p className="font-medium">{value}</p>
        </div>
    );
}
