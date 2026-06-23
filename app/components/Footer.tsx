export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#dedcd5]/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#8c9484]/50">
        <span>© {new Date().getFullYear()} Roy Nykänen</span>
        <span>Built with Next.js & Tailwind CSS</span>
      </div>
    </footer>
  );
}
