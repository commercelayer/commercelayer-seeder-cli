# Commerce Layer Seeder CLI

> A CLI that lets you import predefined seed data into a Commerce Layer organization.

## What is Commerce Layer?

[Commerce Layer](https://commercelayer.io) is a headless commerce platform and order management system that lets you add global shopping capabilities to any website, mobile app, chatbot, or IoT device, with ease. Perfect fit for the best-of-breed CMSs, static site generators, and any other tools you already master and love, our blazing-fast and secure API will help you make your content shoppable on a global scale.

### Table of contents

- [How it works](#how-it-works)
- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Import](#import)
- [Usage](#usage)
- [Available business models](#available-business-models)
- [Contributors guide](#contributors-guide)

## How it works

This seeder is the easiest way to bulk import a [set of products](https://data.commercelayer.app/seed/skus.json), the related [prices](https://data.commercelayer.app/seed/prices.json), and [inventory](https://data.commercelayer.app/seed/stock_items.json) — based on one of the [available business models](#available-business-models) — into your organization and start using Commerce Layer right away.

## Getting started

To be ready to use the Commerce Layer Seeder CLI, you need to install it and then get the credentials that will allow you to manage your organization in Commerce Layer.

### Installation

Commerce Layer Seeder is available as an [npm package](https://www.npmjs.com/package/@commercelayer/commercelayer-seeder-cli):

```
// npm
npm install -g @commercelayer/commercelayer-seeder-cli

// yarn
yarn global add @commercelayer/commercelayer-seeder-cli
```

### Import

Run the command below to import a [set of products](https://data.commercelayer.app/seed/skus.json), related [prices](https://data.commercelayer.app/seed/prices.json), and [inventory](https://data.commercelayer.app/seed/stock_items.json) into your organization.

```bash
commercelayer-seeder -i your-client-id -s your-client-secret -e https://<yourdomain>.commercelayer.io
```

## Usage

### The seeder options

- `-i, --clientId <your-client-id>` — your Commerce Layer application client ID (required)
- `-s, --clientSecret <your-client-secret>` — your Commerce Layer application client secret (required)
- `-e, --endpoint <https://yourdomain.commercelayer.io>` — your Commerce Layer organization endpoint (required)
- `-b, --businessModel <business-model>` — the kind of business model you want to import (optional / default: `multi_market` choose among [this list](#available-business-models))
- `-m, --maxItems <max-items>` — the maximum number of SKUs that will be imported (optional / default: all)
- `-u, --resourcesUrl <resources-url>` — the resources URL or local path (optional / default: [our seeds directory](https://data.commercelayer.app/seed))

![Product import into Commerce Layer](https://raw.githubusercontent.com/commercelayer/commercelayer-seeder-cli/main/docs/images/skus-imported-commerce-layer.jpg 'Product import into Commerce Layer')

![Prices import into Commerce Layer](https://raw.githubusercontent.com/commercelayer/commercelayer-seeder-cli/main/docs/images/prices-imported-commerce-layer.jpg 'Prices import into Commerce Layer')

![Inventory import into Commerce Layer](https://raw.githubusercontent.com/commercelayer/commercelayer-seeder-cli/main/docs/images/inventory-imported-commerce-layer.jpg 'Inventory import into Commerce Layer')

## Available business models

Commerce Layer provides a set of predefined business models so that you can choose and import your stater one based on your needs and business requirements. These are the business models available at the moment (more to come):

- [Multi-market](https://data.commercelayer.app/seed/multi_market.json) — `businessModel: 'multi_market'`
- Custom — `businessModel: 'custom'`

## Contributors guide

1. Fork this repository ([learn how to do it](https://help.github.com/articles/fork-a-repo)).

2. Clone the forked repository like so:

```bash
git clone https://github.com/<your username>/commercelayer-seeder-cli.git && cd commercelayer-seeder-cli
```

3. Make your changes and create a pull request ([learn how to do it](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)).

4. Someone will attend to your pull request and provide some feedback.

## Need help?

1. Request an invite to join [Commerce Layer's Slack community](https://slack.sanity.io).

2. Create an [issue](https://github.com/commercelayer/sanity-template-commercelayer/issues) in this repository.

3. Ping us [on Twitter](https://twitter.com/commercelayer).

## License

This repository is published under the [MIT](LICENSE) license.
