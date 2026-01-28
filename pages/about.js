import NavBar from "../components/NavBar";

export default function About() {
  return (
    <>
      <NavBar />

      <main className="min-h-screen bg-gray-950 text-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
          {/* Header */}
          <section className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              About CryptoGamingToken
            </h1>

            <p className="text-lg leading-relaxed text-gray-200">
              <strong>
                CryptoGamingToken explores how context can be gamified, sorted,
                and qualified through digital track records — not to optimise
                attention, but to surface meaning.
              </strong>
            </p>
          </section>

          {/* Body */}
          <section className="space-y-6 leading-relaxed text-gray-300">
            <p>
              Games have always measured players. Scores, rankings, timers,
              completion rates — all forms of context captured in motion. Yet
              most of these records disappear the moment the session ends,
              detached from any broader sense of identity, progression, or
              relevance.
            </p>

            <p>CryptoGamingToken exists to question that pattern.</p>

            <p>
              We’re interested in what happens when competitive systems are
              treated less like disposable entertainment and more like{" "}
              <em className="text-gray-100">persistent records</em> — systems
              that respect time, skill, and decision-making without collapsing
              everything into vanity metrics or engagement loops.
            </p>

            <p>
              This isn’t about turning life into a game.
              <br />
              It’s about recognising that many of the most meaningful signals
              people produce already emerge{" "}
              <em className="text-gray-100">through</em> play, challenge, and
              constraint — but are rarely preserved, compared, or understood in
              context.
            </p>
          </section>

          <hr className="border-gray-800" />

          {/* Scoring */}
          <section className="space-y-6 leading-relaxed text-gray-300">
            <h2 className="text-2xl font-semibold text-gray-100">
              A different approach to scoring
            </h2>

            <p>
              Most digital systems optimise for attention: more clicks, longer
              sessions, faster loops. Games are no exception.
            </p>

            <p>
              CryptoGamingToken approaches scoring from a different angle.
              Rather than maximising engagement, it asks:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>What does a score represent?</li>
              <li>What context surrounds it?</li>
              <li>
                How should different performances relate to one another over
                time?
              </li>
            </ul>

            <p>
              These questions sit at the core of the project, shaping how
              records are captured, sorted, and interpreted — without assuming
              that all activity is equal, or that all progress should look the
              same.
            </p>
          </section>

          <hr className="border-gray-800" />

          {/* Status */}
          <section className="space-y-6 leading-relaxed text-gray-300">
            <h2 className="text-2xl font-semibold text-gray-100">
              Current status
            </h2>

            <p>
              CryptoGamingToken is currently in an early design and validation
              phase.
            </p>

            <p>
              Public materials are intentionally high-level while foundational
              systems are being explored, tested, and refined. Some elements
              will remain abstract until they can be presented with clarity and
              integrity.
            </p>

            <p>
              This page reflects the{" "}
              <em className="text-gray-100">direction</em> of the project, not a
              finished specification.
            </p>
          </section>

          <hr className="border-gray-800" />

          {/* Looking ahead */}
          <section className="space-y-6 leading-relaxed text-gray-300">
            <h2 className="text-2xl font-semibold text-gray-100">
              Looking ahead
            </h2>

            <p>
              As the project matures, more detail will be shared around how
              these ideas are implemented and applied. Until then,
              CryptoGamingToken remains focused on first principles: context,
              qualification, and the long-term meaning of digital track records.
            </p>

            <p className="italic text-gray-400">
              Not everything here is meant to be understood at first glance.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
