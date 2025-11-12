import { NextIntlRequestConfig } from 'next-intl/server';

export default NextIntlRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));



