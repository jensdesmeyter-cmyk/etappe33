import Image from 'next/image';
import photo from './assets/etappe-33-een-mooi-terras-op-de-kluis.png';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-gray-800 py-12 px-4 sm:px-8">
      <h1 className="text-6xl font-bold mb-4 text-center text-white mb-12">Welkom bij Etappe 33</h1>
      <p className="text-lg text-white">
        Onze website is voorlopig nog onder constructie.
      </p>
      <Image src={photo} alt="restaurant" />
    </main>
  );
}