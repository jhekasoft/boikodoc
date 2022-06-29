/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'custom'
  },
  env: {
    baseUrl: 'https://boikodoc.com',
    baseTitle: 'Бойко Юлія Миколаївна — лікар акушер-гінеколог, лікар УЗД',
    googleTagId: 'GTM-MCKFBVK'
  }
};
