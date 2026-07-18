export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-neutral-800 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-black tracking-tight">
          C'est Bon
        </a>
        <div className="flex items-center gap-6">
          <a href="https://billing.stripe.com/p/login/14keXT4Qa8wh5k4dQQ" className="text-sm hover:text-neutral-400 transition-colors">
            Login
          </a>
          <a href="#book" className="flex items-center gap-2 text-sm bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-neutral-200 transition-colors">
            📞 Book a call
          </a>
          <a href="#pricing" className="text-sm hover:text-neutral-400 transition-colors">
            See pricing
          </a>
        </div>
      </div>
    </nav>
  )
}
