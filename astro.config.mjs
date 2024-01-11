import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

const currentDate = new Date();
const currentStrDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;

// https://astro.build/config
export default defineConfig({
  site: 'https://tendederoderopa.shop',
  integrations: [
    tailwind(),
    sitemap({
      lastmod: new Date(currentStrDate),
      filter: (page) =>
        page !== 'https://tendederoderopa.shop/ubicacion/' &&
        page !== 'https://tendederoderopa.shop/tipos/' &&
        page !== 'https://tendederoderopa.shop/material/' &&
        page !== 'https://tendederoderopa.shop/tipo-de-prendas/' &&
        page !== 'https://tendederoderopa.shop/aviso-legal/' &&
        page !== 'https://tendederoderopa.shop/politica-de-cookies/' &&
        page !== 'https://tendederoderopa.shop/politica-de-privacidad/' &&
        page !== 'https://tendederoderopa.shop/unsplash/' &&
        page !== 'https://tendederoderopa.shop/flaticons/' &&
        page !== 'https://tendederoderopa.shop/contacto/'
    }),
  ]
});