function App() {
  return (
    <>
      <header className="mx-auto px-6 pt-16 max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Nicole Angela P. Galan</h1>
        <p className="text-lg text-gray-600">
          Third year BSIT student at Cebu Institute of Technology – University.
        </p>
        <hr className="mt-8 border-gray-200" />
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <p className="leading-relaxed text-gray-700">
            I was born and raised in Cebu and I, unfortunately, still live in the same city. 
            I picked IT because a close cousin of mine have been in the field for a decade
            and I wanted the same free lifestyle. I'm realizing now that "free" is a bit of a lie, 
            but I'm starting to find things I like in the field. So far, what I particularly find fun 
            are web development and ui/ux designing. 
            In courses I took, I found Object-Oriented Programming to be the most interesting.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Details</h2>
          <p className="leading-relaxed text-gray-700">
            Course: BS Information Technology
            <br />
            Year level: Third year
            <br />
            Hometown: Cebu City, Cebu
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Things I like</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Going to the gym 2-3x a week (trying to, God have mercy)</li>
            <li>Sarcasm</li>
            <li>Reading</li>
            <li>MATCHA</li>
            <li>Wintermelon air</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Reach me</h2>
          <p className="leading-relaxed text-gray-700">
            juan.delacruz@cit.edu
            <br />
            @juandelacruz on most things
          </p>
        </section>
      </main>

      <section className="max-w-2xl mx-auto px-6 pb-16">
        <hr className="mb-6 border-gray-200" />
        <p className="text-sm text-gray-500">Made for CSIT340.</p>
      </section>
    </>
  )
}

export default App