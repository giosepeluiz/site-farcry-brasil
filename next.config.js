/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* i18n: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
  }, */
  env: {
    EXAMPLE: process.env.EXAMPLE,
  },
};

module.exports = nextConfig;
