import Image from 'next/image';
import photo from '../assets/IMG_6052.jpg';

export default function PhotoPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4 text-yellow-500 text-center mb-12 py-12 px-6 sm:px-12">Foto&apos;s</h1>
      <p className="text-yellow-500 text-2xl text-center mb-12">
        Hallo, ik ben maxim
      </p>
      <Image src={photo} alt="Logo" />
    </section>
  );
}
