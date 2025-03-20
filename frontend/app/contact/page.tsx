import type { Metadata } from 'next'
import ContactClient from '@/components/ContactClient'

export const metadata: Metadata = {
  title: 'Contactez VTC Rennes | Service client disponible 24/7',
  description: 'Contactez notre service VTC à Rennes. Formulaire de contact, numéro de téléphone, adresse et horaires d\'ouverture pour toutes vos questions.',
}

export default function Contact() {
  return <ContactClient />
}