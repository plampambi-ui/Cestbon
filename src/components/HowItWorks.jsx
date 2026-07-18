export default function HowItWorks() {
  const steps = [
    {
      title: 'Subscribe',
      description: 'Subscribe to a plan & request as many designs as you\'d like.',
      icon: '📋'
    },
    {
      title: 'Request',
      description: 'Request whatever you\'d like, from mobile apps to logos.',
      icon: '💬'
    },
    {
      title: 'Receive',
      description: 'Receive your design within 5 hours on average.',
      icon: '✨'
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-4 tracking-tight">
          The way design should've been done in the first place
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-neutral-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
