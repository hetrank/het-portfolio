export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-10 text-center text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} Het Rank</p>
      <p className="mt-2">
        Built with Next.js, Tailwind and a lot of curiosity.
      </p>
    </footer>
  );
}
