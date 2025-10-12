import Image from 'next/image';
import photo from './assets/IMG_7184.jpg';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-gray-800 py-12 px-4 sm:px-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-yellow-500 mb-12">Welkom bij Etappe 33</h1>
      <p className="text-lg text-gray-600">
        Onze website is voorlopig nog onder constructie.
      </p>
      <Image src={photo} alt="Logo" />
    </main>
  );
}