# SplitShare

This project is a demo of a bill-splitting app. It simulates user group creation and management, calculates group overall balance and allows deletion. User is able to see the details of the group, which consist of list of group users and their individual balances.

## Demo

The app demo is deployed and available to use under this link:
https://split-share-7ivg.vercel.app/

## Tech Stack

SplitShare is a Single-Page-Application (SPA) developed in ReactJS and TypeScript. It was created in [Vite](https://vitejs.dev/), a fast and efficient tool for building applications and module bundling. SplitShare is a demo front-end application. It simulates integration with API using [MirageJS](https://miragejs.com/), which is a JavaScript library that enables mocking the server and calling HTTP requests. For routing it uses [React-Router](https://reactrouter.com/en/main), which allows to create multiple routes and dynamic URL-based views. The app is available in three languages: english, polish and spanish. The internationalization is created with [i18-next](https://www.i18next.com/), a JavaScript library providing tools to localize content in web apps. General app states, like sidebar state or demo features, are managed by [React-Redux](https://react-redux.js.org/). New group creation feature is developed based on two libraries: [React Hook Form](https://react-hook-form.com/) for submission handling and [yup](https://www.npmjs.com/package/yup/v/1.0.0-alpha.3) for form validation. The app uses ready-to-use components provided by [Flowbite-React](https://flowbite-react.com/), with adjusted themes and styling. SplitShare is fully responsive and mobile-friendly website, utilizing [TailwindCSS](https://tailwindcss.com/) breakpoint prefixes and window events, such as resize.

## Run locally

Local project installation

1. Clone project repository

2. Install project dependencies. Run:

```bash
  npm install
```

3. To run the app locally, run:

```bash
  npm run dev
```

## Feedback

If you have any suggestions on how to optimize or enhance the code or application feel free to reach out to me via email: kslupinski97@gmail.com. Constructive feedback and criticism is always appreciated!
