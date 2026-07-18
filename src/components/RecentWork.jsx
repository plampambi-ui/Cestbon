export default function RecentWork() {
  const services = [
    'Web design',
    'Logos',
    'Slide decks',
    'Branding',
    'Social media',
    'UI/UX design',
    'Webflow development',
    'Mobile apps',
    'Print design',
    'Email',
    'Display ads',
    'Icons',
    'Brand guides',
    '+ more'
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-12 tracking-tight">
          Apps, websites, logos & more
        </h2>
        <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-12">
          All the things you need under one roof.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <div key={idx} className="p-4 bg-neutral-950 border border-neutral-900 rounded-lg text-center font-semibold hover:border-neutral-800 transition-colors">
              {service}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://www.instagram.com/cestbon.shop" className="inline-block bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors">
            See recent work
          </a>
        </div>
      </div>
    </section>
  )
}
