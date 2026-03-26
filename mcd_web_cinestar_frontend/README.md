<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

# Cinestar Frontend

Frontend til Cinestar undervisningsprojekt. Bygget med React, Vite, TailwindCSS og integrerer med en Node.js backend til autentificering og datahåndtering.

## Indholdsfortegnelse

- [Om projektet](#om-projektet)
- [Teknologier](#teknologier)
- [Kom godt i gang](#kom-godt-i-gang)
- [Miljøvariabler](#miljøvariabler)
- [Testbrugere](#testbrugere)
- [Brug](#brug)
- [Licens](#licens)
- [Kontakt](#kontakt)

## Om projektet

Cinestar Frontend er en single-page applikation til et fiktivt filmstudie, udviklet som et undervisningsprojekt. Den demonstrerer moderne React-udvikling, autentificering med JWT, beskyttede ruter og integration med en Node.js backend.

Nøglefunktioner:

- Responsivt layout med TailwindCSS
- Login og beskyttet adminpanel (Backoffice)
- Blog, anmeldelser, kontaktformular m.m.
- Modulær og skalerbar komponentstruktur

### Teknologier

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [clsx](https://github.com/lukeed/clsx)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)

## Kom godt i gang

### Forudsætninger

- Node.js (v18+ anbefales)
- npm

### Installation

1. Klon projektet:
   ```sh
   git clone https://github.com/your_username/cinestar-frontend.git
   cd cinestar-frontend
   ```
2. Installer afhængigheder:
   ```sh
   npm install
   ```
3. Opret en `.env` fil i projektets rodmappe (se nedenfor).
4. Start udviklingsserveren:
   ```sh
   npm run dev
   ```

## Miljøvariabler

Du **skal** oprette en `.env` fil i projektets rodmappe før du kan køre appen. Eksempel:

```
VITE_API_BASE_URL=http://localhost:3042
```

> Projektet starter ikke uden en gyldig `.env` fil med denne variabel!

## Testbrugere

Brug disse testoplysninger for at logge ind som admin:

- **Admin**
  - Email: admin@mediacollege.dk
  - Password: admin

Admin-brugeren giver adgang til Backoffice (adminpanel).

## Brug

- Log ind med ovenstående oplysninger.
- Efter login gemmes JWT-token og bruges til beskyttede ruter (Backoffice m.m.).

## Licens

Kun til undervisningsbrug.

## Kontakt

- Udvikler: Oleg Troian
- Portfolio: [olegtr](https://olegtr.netlify.app/)

Projekt repository: [GitHub](https://github.com/sleiterr/cinestar_fagproeve_md)

Se udvidet dokumentation i [dokumentation.md](./dokumentation.md)
