"use client";

import { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import CarAnimation from './CarAnimation';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_example';
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_example';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key_example';
      
      // For demo purposes, simulate a delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Uncomment this in production with your actual EmailJS credentials
      // await emailjs.send(serviceID, templateID, formData, publicKey);
      
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message envoyé avec succès!" }
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "Une erreur s'est produite. Veuillez réessayer." }
      });
    }
  };

  const toggleFaq = (index: number) => {
    if (selectedFaq === index) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(index);
    }
  };

  const faqs = [
    {
      question: "Comment réserver un chauffeur VTC à Rennes ?",
      answer: "Vous pouvez réserver un chauffeur VTC à Rennes via notre formulaire de réservation en ligne, par téléphone au 02 99 12 34 56, ou en nous envoyant un email à contact@vtc-rennes.fr."
    },
    {
      question: "Quels types de véhicules proposez-vous ?",
      answer: "Nous proposons une gamme de véhicules incluant des berlines de luxe, des vans pour les groupes jusqu'à 8 personnes, et des véhicules adaptés aux besoins spécifiques comme les sièges bébé."
    },
    {
      question: "Combien coûte une course en VTC à Rennes ?",
      answer: "Le tarif dépend de la distance, du type de véhicule et des options choisies. Vous pouvez obtenir une estimation instantanée en utilisant notre calculateur de tarif en ligne."
    },
    {
      question: "Puis-je réserver un VTC pour une journée entière ?",
      answer: "Oui, nous proposons des forfaits à la journée ou à la demi-journée. Contactez-nous pour obtenir un devis personnalisé selon vos besoins spécifiques."
    },
    {
      question: "Comment annuler ou modifier ma réservation ?",
      answer: "Vous pouvez annuler ou modifier votre réservation jusqu'à 2 heures avant l'heure prévue sans frais. Contactez-nous par téléphone ou par email pour toute modification."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous aider à organiser vos déplacements.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                
                {status.submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-green-800">Message envoyé avec succès!</h3>
                      <p className="text-green-700 mt-1">Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.</p>
                      <button 
                        onClick={() => setStatus({submitted: false, submitting: false, info: { error: false, msg: null }})}
                        className="mt-4 text-blue-600 font-medium hover:text-blue-800"
                      >
                        Envoyer un autre message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="reservation">Réservation</option>
                        <option value="information">Demande d'information</option>
                        <option value="devis">Demande de devis</option>
                        <option value="reclamation">Réclamation</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="relative">
                      <button
                        type="submit"
                        disabled={status.submitting}
                        className={`w-full flex items-center justify-center gap-2 text-white font-medium rounded-md px-6 py-3 ${
                          status.submitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                        } transition-colors`}
                      >
                        {status.submitting ? (
                          <>
                            <span>Envoi en cours...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Envoyer le message</span>
                          </>
                        )}
                      </button>
                      
                      {/* Car Animation */}
                      {status.submitting && (
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                          <CarAnimation />
                        </div>
                      )}
                    </div>
                    
                    {status.info.error && (
                      <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2 text-red-700">
                        <AlertCircle className="w-5 h-5" />
                        <span>{status.info.msg}</span>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Adresse</h3>
                      <p className="text-gray-600">123 Rue de Rennes, 35000 Rennes, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Téléphone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+33299123456" className="hover:text-blue-600">02 99 12 34 56</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:contact@vtc-rennes.fr" className="hover:text-blue-600">contact@vtc-rennes.fr</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Horaires</h3>
                      <div className="text-gray-600">
                        <p>Lundi - Vendredi: 8h - 20h</p>
                        <p>Samedi: 9h - 18h</p>
                        <p>Dimanche: 10h - 16h</p>
                        <p className="mt-2 text-sm italic">Service de réservation disponible 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Maps */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Notre localisation</h2>
                <div className="h-[300px] w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85058.01889280404!2d-1.7278307239550743!3d48.11700557934336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ede2fa7d69085%3A0x40ca5cd36e4ab30!2sRennes!5e0!3m2!1sfr!2sfr!4v1648222714328!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full text-left p-4 flex justify-between items-center rounded-lg ${
                    selectedFaq === index ? 'bg-blue-50' : 'bg-gray-50'
                  } hover:bg-blue-50 transition-colors`}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-xl">{selectedFaq === index ? '−' : '+'}</span>
                </button>
                
                {selectedFaq === index && (
                  <div className="p-4 bg-blue-50 rounded-b-lg mt-px">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}