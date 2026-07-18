export default function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="border border-neutral-800 p-8 rounded-xl">
            <p className="text-lg mb-4 leading-relaxed">
              "C'est Bon shows that they know the art of subtlety."
            </p>
            <img src="https://cdn.prod.website-files.com/678005a5d025f688a34957f1/678199f71b779683c0d14a8f_65dd4dae1c85fee7c339650a_Webflow_logo_2023%20(1)%201.svg" alt="Webflow" className="h-6" />
          </div>
          <div className="border border-neutral-800 p-8 rounded-xl">
            <p className="text-lg mb-4 leading-relaxed">
              "Design is everything, and these guys have nailed it."
            </p>
            <p className="font-semibold mb-2">Arthur Vance</p>
            <p className="text-neutral-400">Calgary Tech Group</p>
          </div>
        </div>
      </div>
    </section>
  )
}
