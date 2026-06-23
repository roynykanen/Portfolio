export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <span>© {new Date().getFullYear()} Roy Nykänen</span>
        <span>Built with Next.js & Tailwind CSS</span>
      </div>
    </footer>
  );
}
