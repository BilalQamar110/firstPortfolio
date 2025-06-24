export default function Contact() {
  return (
    <section className="py-20 px-6 bg-white" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-6">Feel free to reach out through the form below:</p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded" />
          <textarea placeholder="Your Message" rows="4" className="w-full p-3 border border-gray-300 rounded"></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>
  )
}
