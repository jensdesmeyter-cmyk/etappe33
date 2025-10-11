import Image from 'next/image';
import photo from '../assets/IMG_6052.jpg';

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">About Etappe 33</h1>
      <p className="text-white-600">
        Welcome to Etappe 33 — where culinary artistry meets warm hospitality.
        Our chefs combine tradition and innovation to create an unforgettable dining experience.
      </p>
      <Image src={photo} alt="Logo" />
    </section>
  );
}
