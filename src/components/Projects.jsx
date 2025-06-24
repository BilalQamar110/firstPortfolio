export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gray-100" id="projects">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold text-xl mb-2">Project 1</h3>
            <p className="text-gray-600">Description of project 1</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold text-xl mb-2">Project 2</h3>
            <p className="text-gray-600">Description of project 2</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold text-xl mb-2">Project 3</h3>
            <p className="text-gray-600">Description of project 3</p>
          </div>
        </div>
      </div>
    </section>
  )
}
