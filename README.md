# README

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for?

-   Quick summary
-   Version
-   [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### Use bash

Launch Web3convention NextJS
(node.js: version **16.x**)

```bash
$ git clone https://username@bitbucket.org/jiang_ren/web3convention.git
$ cd web3convention
$ npm install
$ npm run dev    # visit http://localhost:8000
```

## Project structure

```
$PROJECT_ROOT
│   # pre-commit
├── .husky
│   # Work Place setting and Recommendations extension
├── .vscode
│   # Jenkins file
├── public
│   # font file
│   ├── font
│
├── src
│   │   # All images
│   ├── assets
│   │   # React component files
│   ├── components
│       # Login and register components
│       ├── Access
│       # Only that Page use component (not share component)
│       ├── Pages
│       # Other share components
│       ├── Shares
│
│   │   # Custom hooks
│   ├── hooks
│   │   # Interfaces files
│   ├── interfaces
│   │   # Page files
│   ├── pages
│   │   # Page layout
│   ├── layouts
│   │   # API services
│   ├── services
│   │   # redux(store,reducer,action)
│   ├── store
│   │   # mixins, variable, and tailwind
│   ├── styles
│   │   # tools, helper
│   ├── utils
```

## Env

The .env.local file has been added to the .gitignore file, which means the sections working with secret credentials,
e.g. AWS SDK and SendGrid, will not be functioning in local environment.

Please contact DevOps to get the secrets and create the file manually in local, if needed.

## Project dependencies/tools/language Guideline

Git:
Git visual playground

-   https://git-school.github.io/visualizing-git/

NextJS:

-   https://nextjs.org/docs/getting-started
-   [More example of NextJS](https://nextjs.org/examples)

Typescript:

-   https://typescript.bootcss.com/basic-types.html

Redux/Toolkit:

-   https://redux-toolkit.js.org/introduction/getting-started
-   **https://redux-toolkit.js.org/api/createSlice**
-   **https://redux-toolkit.js.org/api/createAsyncThunk**

Example to useAppSelector, useAppDispatch:

-   **https://github.com/vercel/next.js/blob/canary/examples/with-redux/src/features/counter/Counter.tsx**

node.js: version **16.x**

-   https://nodejs.org/en/docs/

styled-components:

-   https://styled-components.com/

MDN:

-   https://developer.mozilla.org/zh-CN/docs/MDN/Contribute/Getting_started

Eslint

-   https://eslint.org/docs/rules/
