function About() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <p className="text-xs tracking-[0.35em] uppercase text-neutral-500 mb-6">
          Our Story
        </p>
        <h1 className="text-5xl font-light tracking-tight text-neutral-900 mb-8">
          Crafted with intention,<br /> designed to last
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-600 leading-relaxed">
          We believe in timeless design, refined materials, and products that
          feel personal. Every detail is considered. Nothing unnecessary.
        </p>
      </section>

      {/* Image + Text */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pb-24">
        <div className="aspect-square overflow-hidden bg-white rounded-3xl shadow-sm flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-light text-neutral-900">
            A modern approach to luxury
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Founded with a commitment to quality and restraint, our brand focuses
            on essential forms and honest materials. We work closely with skilled
            artisans to create products that age beautifully over time.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Luxury, to us, is not excess — it is clarity, precision, and care.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">
              Design
            </p>
            <h3 className="text-xl font-light text-neutral-900 mb-3">
              Timeless aesthetics
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Clean lines, balanced proportions, and thoughtful details define
              everything we create.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">
              Quality
            </p>
            <h3 className="text-xl font-light text-neutral-900 mb-3">
              Exceptional materials
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              We source premium materials that feel refined and perform
              beautifully for years.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">
              Craft
            </p>
            <h3 className="text-xl font-light text-neutral-900 mb-3">
              Honest craftsmanship
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Each piece is carefully produced with respect for people,
              materials, and process.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-neutral-600 leading-relaxed mb-8">
          We design for those who appreciate subtlety, purpose, and enduring
          quality.
        </p>
        <p className="text-xs tracking-[0.35em] uppercase text-neutral-500">
          — The Brand Team
        </p>
      </section>
    </div>
  );
}

export default About;
