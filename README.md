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
1. Once the folder is opened inside a dev container, open a terminal:
    1. Install dependencies: `npm i`
    1. Run it: `npm run dev` and [open it locally](http://localhost:8000/dev)
    1. Test it: `npm run test`

## How it works
