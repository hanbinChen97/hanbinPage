# React JS Resume Website Template

![ReactJS Resume Website Template](resume-screenshot.jpg?raw=true 'ReactJS Resume Website Template')

<div align="center">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/tbakerx/react-resume-template?style=flat">

<img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/tbakerx/react-resume-template/react?style=flat">

[![Build and Dev Check](https://github.com/hanbinChen97/hanbinPage/actions/workflows/build-check.yml/badge.svg)](https://github.com/hanbinChen97/hanbinPage/actions/workflows/build-check.yml)

## React based template for software developer-focused resume websites
</div>


### 🎉 Version 2 is here! New features:
1. Completely rebuilt with React and full typescript support
2. Built on the [Next.js](https://nextjs.org/) framework for easy server side rendering/static generation, image optimization, api routes, and deployment
3. Styled entirely with [TailwindCss](https://tailwindcss.com/)
4. Re-organized data population file for customizing site.
5. Significant improvement/modernization of all site sections
 
## Description
This is a React based personal resume website template. Built with **typescript** on the **Next.js** framework, styled with Tailwind css, and populated with data from a single file, you can easily create, customize and host your own personal website in minutes. Even better, the site is fully mobile-optimized and server-side rendered to ensure fast loading and a clean UI on any device. Read on to learn how to make it your own.

## Make it Your Own!

### 1. Make sure you have what you need
To build this website, you will need to have the latest stable versions of Node and Yarn downloaded and installed on your machine. If you don't already have them, you can get Node [here,](https://nodejs.org/en/download/) and Yarn [here.](https://yarnpkg.com/getting-started/install)

### 2. Fork and download this repo (and star if you like!)
Next, find the `Fork` button in the top right of this page. This will allow you to make your own copy, for more info on forking repo's see [here.](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) After this, download to your development machine using the green `Code` button at the top of the repo page.

### 3. Install dependencies and run
Once you have your own copy of this repo forked and downloaded, open the folder in your favorite terminal and run `yarn install` to install dependencies. Following this, run `yarn dev` to run the project. In your terminal you should be given the url of the running instance (usually http://localhost:3000 unless you have something else running).

### 4. Customize the data to make it your own
All of the data for the site is driven via a file at `/src/data/data.tsx`. This is where you'll find the existing content, and updating the values here will be reflected on the site.

If you have the site running as described above, you should see these changes reflected on save. The data types for all of these items are given in the same folder in the `dataDef.ts` file. 

Example images can be found at `src/images/` and are imported in the data file. To change, simply update these images using the same name and location, or add new images and update the imports. 

### 5. Make any other changes you like
Of course, all of the code is there and nothing is hidden from you so if you would like to make any other styling/data changes, feel free!

### 6. Deploy to Vercel and enjoy your new Resume Website
Deploying your new site to Vercel is simple, and can be done by following their guide [here.](https://vercel.com/guides/deploying-nextjs-with-vercel) 

When you're all done and the build succeeds, you should be given a url for your live site, go there and you'll see your new personal resume website! Congratulations!

## Project Structure

The project is organized into several directories, including:

- `pages`: This directory contains the Next.js pages for the application. Each file in this directory represents a route in the application.
- `components`: This directory contains the React components used throughout the application. Components are reusable pieces of UI that can be used in multiple places in the application.

## src Directory Structure

The `src` directory contains the source code for the application. Here is a tree structure of the `src` directory with simple descriptions for important files:

```
src
├── components
│   ├── Base.tsx                # Base component
│   ├── Icon
│   │   ├── GithubIcon.tsx      # GitHub icon component
│   │   ├── GitLabIcon.tsx      # GitLab icon component
│   │   ├── HuggingfaceIcon.tsx # Hugging Face icon component
│   │   ├── Icon.tsx            # Icon component
│   │   └── LinkedInIcon.tsx    # LinkedIn icon component
│   ├── Layout
│   │   ├── Page.tsx            # Page layout component
│   │   └── Section.tsx         # Section layout component
│   ├── Sections
│   │   ├── About.tsx           # About section component
│   │   ├── Footer.tsx          # Footer section component
│   │   ├── Header.tsx          # Header section component
│   │   ├── Hero.tsx            # Hero section component
│   │   ├── Portfolio.tsx       # Portfolio section component
│   │   └── Resume
│   │       ├── index.tsx       # Resume section component
│   │       ├── ResumeSection.tsx # Resume section layout component
│   │       ├── Skills.tsx      # Skills component
│   │       └── TimelineItem.tsx # Timeline item component
│   ├── Socials.tsx             # Socials component
├── data
│   ├── data.tsx                # Data file
│   ├── dataDef.ts              # Data definitions
│   └── personalData.json       # Personal data file
├── hooks
│   ├── useDetectOutsideClick.ts # Hook for detecting outside clicks
│   ├── useInterval.ts          # Hook for intervals
│   ├── useNavObserver.tsx      # Hook for navigation observer
│   └── useWindow.ts            # Hook for window events
├── images                      # Image assets
├── pages
│   ├── _app.tsx                # Custom App component
│   ├── _document.tsx           # Custom Document component
│   ├── api                     # API routes
│   └── index.tsx               # Home page
├── styles                      # Global styles
│   └── globalStyles.scss       # Global SCSS styles
├── types.d.ts                  # TypeScript types
└── types
    └── images.d.ts             # Image types
```

## Original Project Created & Maintained By
### Tim Baker
<a href="https://twitter.com/timbakerx"><img src="https://github.com/aritraroy/social-icons/blob/master/twitter-icon.png?raw=true" width="60"></a><a href="https://instagram.com/tbakerx"><img src="https://github.com/aritraroy/social-icons/blob/master/instagram-icon.png?raw=true" width="60"></a>

[![GitHub followers](https://img.shields.io/github/followers/tbakerx.svg?style=social&label=Follow)](https://github.com/tbakerx/)
