export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
          Design subscriptions for everyone
        </h1>
        <p className="text-xl text-neutral-400 mb-8">
          Pause or cancel anytime.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#pricing" className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors">
            Start today
          </a>
          <a href="#pricing" className="border border-neutral-800 px-8 py-3 rounded-lg font-semibold hover:border-white transition-colors">
            See pricing
          </a>
        </div>
        <div className="w-full rounded-xl overflow-hidden border border-neutral-800">
          <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec196c_card.png" alt="C'est Bon Dashboard" className="w-full" />
        </div>
      </div>
    </section>
  )
}
