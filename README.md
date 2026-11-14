# Portfolion

Min portfolio på [johan-rutberg.se](https://www.johan-rutberg.se/) – byggd med Next.js (Pages Router), Tailwind CSS, Framer Motion, Swiper och tsParticles.

## Kom igång

Kräver Node.js 20.9 eller senare.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # produktionsbygge
npm run lint
```

## Kontaktformuläret

`pages/api/send-email.js` skickar via Gmail med Nodemailer och behöver två miljövariabler (lokalt i `.env.local`, på Vercel under *Environment Variables*):

| Variabel     | Innehåll                                  |
| ------------ | ----------------------------------------- |
| `GMAIL_USER` | Gmail-adressen som skickar                |
| `GMAIL_PASS` | Ett [app-lösenord](https://myaccount.google.com/apppasswords) för kontot |

## Projektsidan

Projekten som visas under `/work` listas i `components/WorkSlider.js`. Skärmdumparna ligger i `public/projects/` (1200×750 JPG). Lägg till ett nytt projekt genom att lägga till ett objekt i `projects`-listan; sliden fylls på med fyra kort per sida.
