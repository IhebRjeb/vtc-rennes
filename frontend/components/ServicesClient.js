"use client";

import FareCalculator from './FareCalculator'

export default function ServicesClient() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Nos Services VTC</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Transport de luxe</h2>
        {/* Add luxury transport details */}
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Transport de groupe</h2>
        {/* Add group transport details */}
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Service à la demande</h2>
        {/* Add on-demand service details */}
      </section>
      <FareCalculator />
    </>
  )
}