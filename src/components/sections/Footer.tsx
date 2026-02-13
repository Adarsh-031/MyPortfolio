export function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-zinc-500 text-sm">
      <p>© {new Date().getFullYear()} Adarsha.E. All rights reserved.</p>
      <p className="mt-2">Built with Next.js, Tailwind CSS & Lucide Icons</p>
    </footer>
  );
}
