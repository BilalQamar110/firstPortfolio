export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gray-900" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-3">Let’s Connect</h2>
        <p className="text-gray-400 mb-8">
          I'm always open to discuss projects or collaboration. Drop a message!
        </p>

        <form
          action="https://formsubmit.co/usecommen7@gmail.com"
          method="POST"
          className="space-y-6 text-left bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700"
        >
          {/* Hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              rows="4"
              required
              className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full shadow-md transition duration-300"
            >
              📩 Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
