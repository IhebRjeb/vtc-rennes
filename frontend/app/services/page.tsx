import Head from 'next/head'
import ServicesClient from '../../components/ServicesClient'

export default function Services() {
  return (
    <>
      <Head>
        <title>Nos Services VTC à Rennes</title>
        <meta name="description" content="Découvrez nos services de VTC à Rennes : transport de luxe, transport de groupe, service à la demande. Calculez votre tarif en ligne." />
      </Head>
      <ServicesClient />
    </>
  )
}