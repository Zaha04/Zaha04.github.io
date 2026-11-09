// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  security: {
    // Content Security Policy: Astro adaugă un <meta> cu amprentele (hash) ale scripturilor
    // și stilurilor proprii → browserul refuză orice cod injectat care nu vine din site.
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
        'upgrade-insecure-requests',
      ],
      // atributele style="--var: …" (folosite pentru animații) sunt permise;
      // elementele <style> și <script> rămân permise doar pe baza hash-ului calculat de Astro
      styleDirective: {
        resources: [{ resource: "'unsafe-inline'", kind: 'attribute' }],
      },
    },
  },
});
