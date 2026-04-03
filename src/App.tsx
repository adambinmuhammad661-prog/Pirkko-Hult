/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Stethoscope, 
  ShieldCheck, 
  HeartPulse,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Koti', href: '#home' },
    { name: 'Palvelut', href: '#services' },
    { name: 'Meistä', href: '#about' },
    { name: 'Yhteystiedot', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              Pirkko Hult
            </span>
            <span className={`ml-2 text-sm font-medium hidden sm:block ${scrolled ? 'text-blue-600' : 'text-blue-100'}`}>
              | Hammaslääkäri Helsinki
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:09670649"
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
              >
                Soita nyt
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:09670649"
                className="block w-full text-center bg-blue-600 text-white px-3 py-4 rounded-md text-base font-medium"
              >
                Soita: 09 670649
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070"
          alt="Moderni hammashoitola"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
            Hellää huolenpitoa <span className="text-blue-300">hymyllesi</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
            Ammattitaitoista hammashoitoa Pirkko Hultilta Lauttasaaressa, Helsingissä. 
            Kattavaa hoitoa henkilökohtaisella otteella jo yli 20 vuoden ajan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center shadow-xl"
            >
              Varaa aika <ChevronRight className="ml-2" size={20} />
            </a>
            <a
              href="tel:09670649"
              className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} /> 09 670649
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Yleishammashoito',
      description: 'Kattavat tarkastukset, puhdistukset ja ennaltaehkäisevä hoito hampaidesi terveyden ylläpitämiseksi.',
      icon: <Stethoscope className="text-blue-600" size={32} />,
    },
    {
      title: 'Korjaava hoito',
      description: 'Paikkaukset, kruunut ja sillat, jotka on suunniteltu palauttamaan toimivuus ja estetiikka.',
      icon: <ShieldCheck className="text-blue-600" size={32} />,
    },
    {
      title: 'Ienien terveys',
      description: 'Erikoistunut hoito iensairauksien hoitoon ja hampaiden pitkäaikaiseen pysyvyyteen.',
      icon: <HeartPulse className="text-blue-600" size={32} />,
    },
    {
      title: 'Päivystys ja ensiapu',
      description: 'Nopeaa ja tehokasta hoitoa hammassärkyyn, lohkeamiin ja muihin kiireellisiin vaivoihin.',
      icon: <Calendar className="text-blue-600" size={32} />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Osaamisemme</h2>
          <p className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
            Kattavat hammaslääkäripalvelut
          </p>
          <div className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Tarjoamme laajan valikoiman yksilöllisiä hoitoja mukavassa ympäristössä.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="mb-6 p-3 bg-blue-50 rounded-xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {React.cloneElement(service.icon as React.ReactElement, { className: 'group-hover:text-white' })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mb-12 lg:mb-0"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
                alt="Hammaslääkäri työssään"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden sm:block">
              <div className="text-4xl font-bold mb-1">20+</div>
              <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">Vuoden kokemus</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Tapaa hammaslääkärisi</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Pirkko Hult</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Yli kahden vuosikymmenen kokemuksella kliinisestä hammashoidosta Pirkko Hult on saavuttanut maineen erinomaisesta ja hellävaraisesta hoidosta Helsingissä. 
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Vastaanottomme keskittyy pitkäaikaisten potilassuhteiden rakentamiseen, varmistaen että jokainen käynti on mahdollisimman mukava ja stressitön. Käytämme nykyaikaisia menetelmiä ja noudatamme korkeimpia hygienia- ja potilasturvallisuusstandardeja.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Yksilölliset hoitosuunnitelmat',
                'Nykyaikainen hammashoitoteknologia',
                'Mukava ja rauhallinen ympäristö',
                'Keskeinen sijainti Lauttasaaressa'
              ].map((item) => (
                <li key={item} className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="text-green-500 mr-3" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors"
            >
              Lue lisää vastaanotostamme <ChevronRight className="ml-1" size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-300 font-semibold tracking-wide uppercase text-sm mb-2">Ota yhteyttä</h2>
          <p className="text-4xl font-bold mb-4 tracking-tight">Yhteystiedot</p>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto">
            Valmis varaamaan ajan? Ota yhteyttä puhelimitse tai vieraile klinikallamme Lauttasaaressa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-blue-500/20 rounded-xl mr-4">
                <Phone className="text-blue-300" size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold">Soita meille</h4>
                <p className="text-blue-200">Tavoitettavissa aukioloaikoina</p>
              </div>
            </div>
            <a href="tel:09670649" className="text-3xl font-bold hover:text-blue-300 transition-colors block">
              09 670649
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-blue-500/20 rounded-xl mr-4">
                <MapPin className="text-blue-300" size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold">Vieraile meillä</h4>
                <p className="text-blue-200">Lauttasaari, Helsinki</p>
              </div>
            </div>
            <p className="text-xl font-medium leading-relaxed">
              Lauttasaarentie 11<br />
              00200 Helsinki
            </p>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Lauttasaarentie+11,+00200+Helsinki" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-blue-300 hover:underline"
            >
              Katso reittiohjeet <ChevronRight size={16} />
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-blue-500/20 rounded-xl mr-4">
                <Clock className="text-blue-300" size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold">Aukioloajat</h4>
                <p className="text-blue-200">Ma - Pe</p>
              </div>
            </div>
            <div className="space-y-2 text-lg">
              <div className="flex justify-between">
                <span>Ma - To</span>
                <span className="font-bold">08:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Perjantai</span>
                <span className="font-bold">08:00 - 14:00</span>
              </div>
              <div className="flex justify-between text-blue-400">
                <span>La - Su</span>
                <span className="font-bold italic">Suljettu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center text-white mb-4">
              <span className="text-2xl font-bold tracking-tight">Pirkko Hult</span>
              <span className="ml-2 text-sm font-medium text-blue-400">| Hammaslääkäri Helsinki</span>
            </div>
            <p className="max-w-xs">
              Laadukasta hammashoitoa Lauttasaaren sydämessä. Hymysi on prioriteettimme.
            </p>
          </div>
          
          <div className="flex space-x-6 mb-8 md:mb-0">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
          </div>

          <div className="text-sm">
            &copy; {new Date().getFullYear()} Pirkko Hult. Kaikki oikeudet pidätetään.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
