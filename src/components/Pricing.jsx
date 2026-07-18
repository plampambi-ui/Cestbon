export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-4 tracking-tight">
          One subscription, endless possibilities
        </h2>
        <div className="mt-16 bg-neutral-950 border border-neutral-800 rounded-2xl p-8 md:p-12">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Monthly Club</h3>
              <p className="text-sm text-neutral-400 uppercase tracking-widest font-bold mb-4">PAUSE OR CANCEL ANYTIME</p>
              <p className="text-sm text-neutral-400 mb-6">Lifetime Discount - Limited Time</p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black">$499</span>
                <span className="text-neutral-400">/month</span>
              </div>
              <p className="text-sm line-through text-neutral-600">$599</p>
            </div>
          </div>
          <div className="space-y-4 mb-8">
            {[
              'One request at a time',
              'Avg. 5 hour delivery',
              'Unlimited brands',
              'Webflow development',
              'Unlimited stock photos',
              'Up to 2 users',
              'Pause or cancel anytime'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-neutral-200">{feature}</span>
              </div>
            ))}
          </div>
          <a href="https://buy.stripe.com/fZe28BaiLfOO99e146" className="w-full block text-center bg-white text-black py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors">
            Join today
          </a>
        </div>
      </div>
    </section>
  )
}
