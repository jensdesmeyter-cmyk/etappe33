// app/i18n.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(() => {
  return {
    // these are the only properties now allowed in the returned object
    // next-intl expects this shape for server-side requests
    locale: 'nl'
  };
});



