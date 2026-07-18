import { useState } from 'react'

const faqs = [
  {
    question: 'How fast will I receive my designs?',
    answer: 'On average, most requests are completed in just 5 hours or less. However, more complex requests can take longer.'
  },
  {
    question: 'How does onboarding work?',
    answer: 'Subscribe to a plan and we\'ll quickly add you to your very own Trello board. This process usually takes about an hour to complete from the time you subscribe. Once you accept the invite to Trello, you\'re ready to rock.'
  },
  {
    question: 'Who are the designers?',
    answer: 'C\'est Bon is a one-man agency, ran by Brett, the founder. C\'est Bon does not employ other designers, or outsource work to any other entity. You\'ll work directly with me through the entirety of your experience.'
  },
  {
    question: 'Is there a limit to how many requests I can make?',
    answer: 'Once subscribed, you\'re able to add as many design requests to your queue as you\'d like, and they will be delivered one by one.'
  },
  {
    question: 'How does the pause feature work?',
    answer: 'We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That\'s where pausing your subscription comes in handy.'
  },
  {
    question: 'Can I use C\'est Bon for just a month?',
    answer: 'For sure. Whether you need C\'est Bon for a month or a year, the choice is yours. Just feel free to come back when you have additional design needs.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-12 tracking-tight">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-neutral-800 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between hover:bg-neutral-950 transition-colors text-left"
              >
                <span className="font-semibold">{faq.question}</span>
                <span className={`transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 pt-0 text-neutral-400 border-t border-neutral-800">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
