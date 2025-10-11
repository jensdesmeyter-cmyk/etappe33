import Image from 'next/image';
import photo from './assets/IMG_7184.jpg';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to Etappe 33</h1>
      <p className="text-lg text-gray-600">
        Our restaurant website is under construction.
      </p>
      <Image src={photo} alt="Logo" />
    </main>
  );
}