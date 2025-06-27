export default function About() {
  return (
    <section className="bg-gray-900 py-20" id="about">
      {" "}
      {/* ← changed from bg-black */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left: Text content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hi, I'm <span className="text-blue-500">Bilal Qamar</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Assalam-o-Alaikum, here is a brief about me:
            <br />
            <br />I am a motivated and versatile individual, always eager to
            take on new challenges. With a passion for learning, I am dedicated
            to delivering high-quality results. My final goal is to serve
            humanity through the IT sector and start a business in this field
            soon (InShaALLAH).
          </p>
          <a
            href="https://drive.google.com/file/d/your_file_id_here/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition"
          >
            View Resume
          </a>
        </div>

        {/* Right: Photo */}
        <div className="flex-1 flex justify-center">
          <img
            src="/profilePhoto.jpeg"
            alt="Bilal Qamar"
            className="w-72 h-72 object-cover rounded-full shadow-xl border-4 border-blue-500"
          />
        </div>
      </div>
    </section>
  );
}
