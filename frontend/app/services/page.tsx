import type { Metadata } from 'next'
import ServicesClient from '@/components/ServicesClient'

export const metadata: Metadata = {
  title: 'Services VTC Premium à Rennes | VTC Rennes',
  description: 'Découvrez nos services de transport VTC à Rennes : transport de luxe, service aéroport, événementiel. Chauffeurs professionnels, véhicules haut de gamme, disponible 24/7.',
}

export default function Services() {
  return <ServicesClient />
}