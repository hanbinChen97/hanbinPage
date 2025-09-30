# Technische Projektstruktur

## Projektübersicht

Dies ist ein **persönliches Portfolio-Website-Projekt**, das mit modernen Web-Technologien entwickelt wurde. Die Website präsentiert Hanbin Chens beruflichen Werdegang, Fähigkeiten und Projekte in einem eleganten, mehrsprachigen Design.

## Technische Architektur

### Frontend Framework
- **React 18** - Moderne React-Bibliothek für komponentenbasierte UI-Entwicklung
- **Next.js 14** - Full-Stack React Framework mit Server-Side Rendering (SSR) und Static Site Generation (SSG)
- **TypeScript** - Typisierte JavaScript-Variante für bessere Code-Qualität und Entwicklererfahrung

### Styling & Design
- **Tailwind CSS** - Utility-First CSS Framework für schnelle und konsistente Gestaltung
- **SCSS/Sass** - CSS-Präprozessor für erweiterte Styling-Funktionen
- **Responsive Design** - Mobile-first Ansatz für alle Geräte

### Internationalisierung (i18n)
- **Next-intl** - Mehrsprachige Unterstützung
- Unterstützte Sprachen: **Englisch (en)**, **Deutsch (de)**, **Chinesisch (zh)**
- Automatische Locale-Erkennung und URL-basierte Sprachauswahl

## Seitenstruktur

Die Website besteht aus folgenden Hauptsektionen:

1. **Header** - Navigationsleiste mit Sprachwechsler
2. **Hero** - Einführungssektion mit Name und Schlüsselwörtern
3. **About** - Persönliche Informationen und Hintergrund
4. **Resume** - Bildungsweg, Berufserfahrung und Fähigkeiten
5. **Portfolio** - Showcase der Projekte mit Bildergalerie
6. **Footer** - Kontaktinformationen und soziale Links

## Ordnerstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Mehrsprachige Routen
│   └── layout.tsx         # Root Layout
├── components/            # React Komponenten
│   ├── Sections/         # Seitenabschnitte (Header, Hero, About, etc.)
│   ├── Layout/           # Layout-Komponenten
│   └── Icon/             # Icon-Komponenten
├── data/                 # Datenstruktur und Inhalte
├── i18n/                 # Internationalisierung
├── hooks/                # Custom React Hooks
└── types/                # TypeScript Typdefinitionen
```

## Besondere Features

- **Statische Website-Generierung** für optimale Performance
- **SEO-optimiert** mit Meta-Tags und OpenGraph-Support
- **Progressive Web App (PWA)** ready
- **Responsive Design** für alle Geräte
- **Image Marquee** für dynamische Bildpräsentation
- **Smooth Scrolling** Navigation
- **Dark/Light Mode** Support (über Tailwind CSS)

## Deployment & Build

- **Vercel** - Hosting-Plattform für Next.js Anwendungen
- **Automatisches Deployment** bei Git-Push
- **Next.js Sitemap** Generation für bessere SEO
- **Asset-Optimierung** mit automatischer Bildkomprimierung

## Entwicklungstools

- **ESLint & Prettier** - Code-Qualität und Formatierung
- **Stylelint** - CSS/SCSS Linting
- **TypeScript** - Statische Typenprüfung
- **pnpm** - Effizienter Package Manager