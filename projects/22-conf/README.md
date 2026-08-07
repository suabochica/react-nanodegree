# React conf app

React app to explore hooks. No bundler, no framework: React 19 is loaded in
the browser through import maps pointing at esm.sh, components are plain ES
modules written with `React.createElement`, and `server.js` is a tiny static
file server built on Node.js core modules.

## Usage

This project is a package of the `react-nanodegree` pnpm workspace. Start
the dev server from this directory:

```bash
pnpm dev
```

Then open one of the pages:

| Route                            | Page     |
| -------------------------------- | -------- |
| http://localhost:3000            | Home     |
| http://localhost:3000/speakers.html | Speakers |
