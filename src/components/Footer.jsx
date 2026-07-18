export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-black text-lg mb-4">C'est Bon</h4>
            <p className="text-sm text-neutral-400">Design subscriptions for everyone.</p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-widest">Services</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Web design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UI/UX design</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-widest">Connect</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="https://www.instagram.com/cestbon.shop" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="mailto:miriagouda@gmail.com" className="hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
          <p>Headquartered in Calgary, Alberta</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://brettwill1025.notion.site/Terms-Conditions-4901d894656448a69c4c4e04d40d3bbc" className="hover:text-white transition-colors">Terms of service</a>
            <a href="https://brettwill1025.notion.site/DesignJoy-Privacy-Policy-0011594d80724a68821940237f9f7b02" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
