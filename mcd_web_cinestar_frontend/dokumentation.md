# Cinestar — Dokumentation

Denne dokumentation beskriver frontend-delen af Cinestar-projektet: en moderne webplatform til et fiktivt filmstudie, bygget med React, Vite, TailwindCSS og Node.js backend.

## Indhold

- Projektoversigt
- Projektstruktur
- Stack og afhængigheder
- Centrale komponenter
- Typiske brugerflows
- Udviklings- og build-kommandoer
- Kvalitetssikring og test
- Udvidelse og vedligeholdelse

---

## Projektoversigt

Cinestar er en single-page applikation (SPA), der demonstrerer moderne frontend-udvikling med fokus på brugeroplevelse, datahåndtering og adminfunktioner. Platformen har:

- Forside med info, galleri, anmeldelser, kontakt
- Adminpanel (Backoffice) med CRUD for blogs
- Login og adgangskontrol
- Responsivt design

### Typisk brugerflow

1. Bruger lander på forsiden (Home)
2. Kan se info, galleri, anmeldelser
3. Kan sende besked via kontaktformular
4. Admin logger ind og styrer blogs i Backoffice

---

## Projektstruktur

```
cinestar_materialer/
  images/
mcd_web_cinestar_frontend/
  public/
  src/
    assets/
      awards/
      cine_studio/
      gallery_slider/
      hero/
      logo/
    components/
      Awards/
      CinestarIntro/
      CineStatsSection/
      Header/
      Hero/
      Pagination/
      Portfolio/
      Section/
    pages/
      Home/
    utils/
    index.css
    App.jsx
    main.jsx
    ...
  package.json
  tailwind.config.js
  vite.config.js
  README.md
  dokumentation.md
mcd_web_cinestar_server/
  ...
```

**Bemærk:** Se `src/components/` og `src/pages/` for centrale UI-komponenter og routing.

---

## Stack og afhængigheder

- React 19
- Vite
- TailwindCSS 4
- Formik/Yup (formularer og validering)
- clsx (dynamiske klasser)
- react-router-dom (routing)
- JWT (autentificering)
- Egen Node.js backend (API)

Se alle afhængigheder i `package.json`.

---

## Centrale komponenter

- **Header** — navigation, burger-menu
- **Hero** — forsidebillede og intro
- **Portfolio/GallerySlider** — billedgalleri
- **Awards** — priser og anerkendelser
- **CineStatsSection** — statistik
- **Contact** — kontaktformular
- **LoginForm** — login til admin
- **Backoffice** — adminpanel med blog-CRUD
- **ProtectedRoute** — adgangskontrol

---

## Udviklings- og build-kommandoer

```bash
npm install      # installer afhængigheder
npm run dev      # lokal udvikling
npm run build    # produktionsbuild
npm run preview  # lokal visning af build
npm run lint     # eslint check
```

---

## Kvalitetssikring og test

- Test kontaktformularen (`src/components/Contact/ContactForm.jsx`)
- Prøv CRUD for blogs i adminpanelet (`src/pages/Backoffice/`)
- Tjek visning af galleri, statistik, anmeldelser
- Kør `npm run lint` før aflevering
- Test responsivt på mobil og desktop
- Tjek API-integration i `src/utils/api.js`

---

## Udvidelse og vedligeholdelse

- Tilføj nye komponenter i `src/components/`
- Udvid API-endpoints i backend
- Tilpas adminpanelet for flere datatyper
- Opdater dokumentation ved større ændringer

---

## Kontakt

- Udvikler: Oleg Troian  
- Portfolio: [olegtr](https://olegtr.netlify.app/)
- Projekt repository: [GitHub](https://github.com/sleiterr/cinestar_fagproeve_md)

---

> Denne dokumentation er udarbejdet til eksamensprojektet Cinestar (MediaCollege 2026).
