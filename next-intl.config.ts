import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const activeLocale = locale ?? 'en'; // fallback if locale is undefined
  const messages = (await import(`./messages/${activeLocale}.json`)).default;

  return {
    locale: activeLocale,
    messages
  };
});




