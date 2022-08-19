# LitElement Dev Container

When I work on a project, I like to
[work in a container](https://jeremeevans.com/why-you-should-use-development-containers).
This repository serves as a template for developing LitElement web components in a
Visual Studio Code developement container. These are my requirements:

1. Create no local dependencies on my computer.
1. Use TypeScript.
1. Minimize the number of dependencies the codebase requires.
1. Write tests to ensure things work as expected.

This template will create a project that runs in a container, uses [LitElement](https://lit.dev/) to
create a web component, and tests the component with [Cypress](https://www.cypress.io/).

## Get started

1. Install [Visual Studio Code](https://code.visualstudio.com/)
1. Install [Docker](https://www.docker.com/products/docker-desktop/)
1. Open Visual Studio Code and install the [Remote Development Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
1. Clone this repository, or create a new one from the template, and open it in Visual Studio Code
1. Configure ports so they do not conflict with other things on your box:
    1. Set the [webPort for noVNC and vncPort](https://github.com/jeremeevans/LitDevContainer/blob/3061dd77fe150852fdbcb1ac1415dee7b4f7f35a/.devcontainer/devcontainer.json#L43) and forward them if you want to use them.
    1. Set the [appPort where your app will run](https://github.com/jeremeevans/LitDevContainer/blob/3061dd77fe150852fdbcb1ac1415dee7b4f7f35a/.devcontainer/devcontainer.json#L51).
1. Reopen the folder inside a dev container and open a terminal:
    1. Install dependencies: `npm i`
    1. Run it: `npm run dev`
    1. Test it: `npm run test`

## Rollup build

This template is configured to use [Rollup](https://rollupjs.org) to build the LitElement web component. It relies on the following plugins to do a proper job:

* [@rollup/plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve#readme) loads node modules.
* [@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript#readme) allows all the code to be written in TypeScript.
* [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss#readme) compiles SCSS.
  * [postcss-url](https://github.com/postcss/postcss-url#readme) embeds images in the compiled CSS.
* [rollup-plugin-postcss-lit](https://github.com/umbopepato/rollup-plugin-postcss-lit#readme) imports SCSS into LitElements
* [rollup-plugin-terser](https://github.com/TrySound/rollup-plugin-terser#readme) bundles the code as small as possible.
* [rollup-plugin-summary](https://github.com/yousifalraheem/rollup-plugin-summary#readme) lets us know what has been built.
