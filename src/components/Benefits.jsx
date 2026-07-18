const benefits = [
  {
    title: 'Design board',
    description: 'Easily manage your design queue with a Trello board.',
    icon: '📊'
  },
  {
    title: 'Fixed monthly rate',
    description: 'No surprises here! Pay the same fixed price each month.',
    icon: '💰'
  },
  {
    title: 'Fast delivery',
    description: 'Get your design one at a time in just a couple days on average.',
    icon: '⚡'
  },
  {
    title: 'Top-notch quality',
    description: 'Senior design quality at your fingertips, whenever you need it.',
    icon: '⭐'
  },
  {
    title: 'Flexible and scalable',
    description: 'Scale up or down as needed, and pause or cancel at anytime.',
    icon: '📈'
  },
  {
    title: 'Unique and all yours',
    description: 'Every design is made especially for you and is 100% yours.',
    icon: '🎨'
  }
]

export default function Benefits() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-4 tracking-tight">
          It's "you'll never go back" better
        </h2>
        <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-16">
          C'est Bon replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast you won't want to go anywhere else.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-6 bg-neutral-950 border border-neutral-900 rounded-xl hover:border-neutral-800 transition-colors">
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-neutral-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
