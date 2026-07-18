import { useState } from 'react'
import { ChevronLeft, ChevronRight, Calendar, Clock, Video, User, Mail, MessageSquare, Check, Download } from 'lucide-react'

export default function BookingWidget() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [step, setStep] = useState('datetime')
  const [formData, setFormData] = useState({ name: '', email: '', inquiry: '' })

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDay = new Date(year, month, 1).getDay()
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const availableTimes = ['09:00 AM', '10:15 AM', '11:00 AM', '01:30 PM', '02:45 PM', '04:00 PM']

  const goToPrevMonth = () => {
    const prevMonth = new Date(year, month - 1, 1)
    const today = new Date()
    if (prevMonth >= today || (prevMonth.getMonth() === today.getMonth() && prevMonth.getFullYear() === today.getFullYear())) {
      setCurrentDate(prevMonth)
    }
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const selectDate = (day) => {
    const newDate = new Date(year, month, day)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (newDate >= today) {
      setSelectedDate(newDate)
      setSelectedTime(null)
    }
  }

  const selectTime = (time) => {
    setSelectedTime(time)
    setStep('form')
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && selectedDate && selectedTime) {
      setStep('success')
    }
  }

  const downloadCalendarFile = () => {
    if (!selectedDate || !selectedTime) return

    const dateStr = selectedDate.toISOString().split('T')[0]
    const dateParts = dateStr.split('-')
    const [h, m] = selectedTime.split(' ')[0].split(':').map(Number)
    const timePeriod = selectedTime.split(' ')[1]
    
    let hours = h
    if (timePeriod === 'PM' && hours < 12) hours += 12
    if (timePeriod === 'AM' && hours === 12) hours = 0

    const startTime = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]), hours, m)
    const endTime = new Date(startTime.getTime() + 15 * 60 * 1000)

    const formatTime = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'PRODID:-//C\'est Bon//Design Subscription Intro Call//EN',
      'BEGIN:VEVENT',
      `UID:${Date.now()}@cestbon.shop`,
      `DTSTAMP:${formatTime(new Date())}`,
      `DTSTART:${formatTime(startTime)}`,
      `DTEND:${formatTime(endTime)}`,
      'SUMMARY:C\'est Bon Intro Call (Design Subscription)',
      `DESCRIPTION:15-minute guided tour of C'est Bon design subscriptions.\\n\\nClient Name: ${formData.name}\\nClient Email: ${formData.email}\\nInquiry Details: ${formData.inquiry || 'None'}`,
      'LOCATION:Google Meet / Web Conference',
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n')

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'cest_bon_intro_call.ics'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="book" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="w-full bg-black border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-3 gap-0">
            <div className="bg-neutral-950 p-6 md:p-8 border-b md:border-b-0 md:border-r border-neutral-800 flex flex-col justify-between">
              <div>
                <span className="text-[10px] tracking-widest text-neutral-400 font-bold uppercase bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800 inline-block">
                  Guided Tour
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold mt-4 mb-2 tracking-tight">
                  15-Min Intro Call
                </h3>
                <div className="flex items-center gap-2 text-sm text-neutral-400 mb-4 font-medium">
                  <Clock className="w-4 h-4 text-white" />
                  <span>15 min</span>
                  <span className="text-neutral-600">•</span>
                  <Video className="w-4 h-4 text-white" />
                  <span>Google Meet Video</span>
                </div>
                <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-normal">
                  A quick, 15-minute screen share to introduce you to C'est Bon, show you how our subscription boards operate, and explore how we can elevate your projects.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
              {step === 'datetime' && (
                <div className="flex flex-col h-full justify-between">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold tracking-tight text-neutral-200">
                      {monthNames[month]} {year}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={goToPrevMonth}
                        className="p-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-900 transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
                        disabled={month === new Date().getMonth() && year === new Date().getFullYear()}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={goToNextMonth}
                        className="p-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-900 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center mb-6">
                    {dayNames.map(day => (
                      <div key={day} className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider py-1">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: firstDay }).map((_, i) => (
                      <div key={`empty-${i}`} className="text-xs text-neutral-700 py-2" />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1
                      const date = new Date(year, month, day)
                      const today = new Date()
                      today.setHours(0, 0, 0, 0)
                      const isDisabled = date < today
                      const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === month

                      return (
                        <button
                          key={day}
                          onClick={() => selectDate(day)}
                          disabled={isDisabled}
                          className={`text-xs font-semibold py-2 rounded-lg transition-all focus:outline-none flex items-center justify-center h-8 w-8 mx-auto ${
                            isSelected
                              ? 'bg-white text-black font-bold scale-110 shadow-lg'
                              : isDisabled
                              ? 'text-neutral-700 cursor-not-allowed line-through'
                              : 'text-neutral-200 hover:bg-neutral-900 hover:text-white'
                          }`}
                        >
                          {day}
                        </button>
                      )
                    })}
                  </div>

                  {selectedDate && (
                    <div className="border-t border-neutral-900 pt-6 animate-fade-in">
                      <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-white" />
                        <span>Available times on {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {availableTimes.map(time => (
                          <button
                            key={time}
                            onClick={() => selectTime(time)}
                            className="text-xs font-semibold py-2.5 px-3 rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-200 hover:border-white hover:bg-white hover:text-black transition-all focus:outline-none"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {!selectedDate && (
                    <div className="flex flex-col items-center justify-center py-6 text-neutral-500 text-xs border border-dashed border-neutral-900 rounded-lg">
                      <Calendar className="w-5 h-5 mb-1.5 text-neutral-600" />
                      <span>Please select a date on the calendar above</span>
                    </div>
                  )}
                </div>
              )}

              {step === 'form' && selectedDate && selectedTime && (
                <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full animate-fade-in">
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <button
                        type="button"
                        onClick={() => setStep('datetime')}
                        className="text-xs text-neutral-400 hover:text-white transition-colors"
                      >
                        ← Back to Calendar
                      </button>
                      <span className="text-neutral-600">/</span>
                      <span className="text-xs text-neutral-200 font-semibold bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                        {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} @ {selectedTime}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-4 tracking-tight">Enter Your Details</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                          <input
                            required
                            type="text"
                            name="name"
                            placeholder="Jane Doe"
                            value={formData.name}
                            onChange={handleFormChange}
                            className="w-full bg-neutral-950 border border-neutral-800 text-sm py-2 pl-9 pr-4 rounded-lg focus:outline-none focus:border-white text-white transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                          <input
                            required
                            type="email"
                            name="email"
                            placeholder="jane@company.com"
                            value={formData.email}
                            onChange={handleFormChange}
                            className="w-full bg-neutral-950 border border-neutral-800 text-sm py-2 pl-9 pr-4 rounded-lg focus:outline-none focus:border-white text-white transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1.5">
                          Please share anything that will help prepare for our meeting
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-neutral-500" />
                          <textarea
                            name="inquiry"
                            rows={3}
                            placeholder="Tell us about your company and your product design requirements..."
                            value={formData.inquiry}
                            onChange={handleFormChange}
                            className="w-full bg-neutral-950 border border-neutral-800 text-sm py-2 pl-9 pr-4 rounded-lg focus:outline-none focus:border-white text-white transition-colors resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full py-3 rounded-lg bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    Confirm Booking & Submit Inquiry
                  </button>
                </form>
              )}

              {step === 'success' && selectedDate && selectedTime && (
                <div className="flex flex-col items-center justify-center text-center h-full py-8 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-black mb-2 tracking-tight">Booking Confirmed!</h4>
                  <p className="text-sm text-neutral-400 max-w-sm mb-6 leading-relaxed">
                    Your guided tour of <strong className="text-white font-semibold">C'est Bon</strong> is scheduled for:<br />
                    <span className="text-white font-bold block mt-2 text-base">
                      {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {selectedTime}
                    </span>
                  </p>
                  <div className="w-full max-w-sm p-4 bg-neutral-950 border border-neutral-900 rounded-lg text-left mb-6">
                    <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold mb-1.5">
                      Inquiry Notification
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      All details have been successfully forwarded to <strong className="text-white">miriagouda@gmail.com</strong>. We will review your inquiry before our scheduled call.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
                    <button
                      onClick={downloadCalendarFile}
                      className="flex-1 py-2.5 px-4 rounded-lg border border-neutral-800 bg-neutral-950 text-xs font-semibold hover:border-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-neutral-400" />
                      <span>Add to Google Calendar (.ics)</span>
                    </button>
                    <button
                      onClick={() => {
                        setStep('datetime')
                        setSelectedDate(null)
                        setSelectedTime(null)
                        setFormData({ name: '', email: '', inquiry: '' })
                      }}
                      className="flex-1 py-2.5 px-4 rounded-lg bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center cursor-pointer"
                    >
                      Schedule Another Call
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
