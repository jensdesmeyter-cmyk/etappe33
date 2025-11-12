import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ZenChefPopup from "./components/ZenChefPopup";
import "../globals.css";

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { children, params } = props;
  const { locale } = await params; // 👈 await is required in Next.js 15+

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="bg-gray-50 text-gray-800">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header className="w-full bg-white shadow-sm sticky top-0 z-50">
            <Navbar/>
          </header>

          <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">{children}</main>
          <ZenChefPopup/>
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
