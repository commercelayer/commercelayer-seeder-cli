# Commerce Layer Seeder CLI

> A CLI that lets you import predefines seed data into a Commerce Layer organization.

### What is Commerce Layer?

[Commerce Layer](https://commercelayer.io/) is a headless platform that lets you easily build enterprise-grade ecommerce into any website, by using the language, CMS, and tools you already master and love.

### Table of contents

- [How it works](#how-it-works)
- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Import](#import)
- [Usage](#usage)
  - [The seeder function](#the-seeder-function)
  - [The returned object](#the-returned-object)
- [Available business models](#available-business-models)

## How it works

This seeder is the easiest way to bulk import a [set of products](https://data.commercelayer.app/seed/skus.json), the related [prices](https://data.commercelayer.app/seed/prices.json), and [inventory](https://data.commercelayer.app/seed/stock_items.json) — based on one of the [available business models](#available-business-models) — into your organization and start using Commerce Layer right away.

## Getting Started

To be ready to use the Commerce Layer Seeder CLI, you need to install it and then get the credentials that will allow you to manage your organization in Commerce Layer.

### Installation

Commerce Layer Seeder is available as an [npm package](https://www.npmjs.com/package/@commercelayer/commercelayer-seeder-cli):

```
// npm
npm install -g @commercelayer/commercelayer-seeder-cli

// yarn
yarn global add @commercelayer/commercelayer-seeder-cli
```

## Usage

### The seeder options

- `-i, --clientId <your-client-id>` — your Commerce Layer application client ID (required)
- `-s, --clientSecret <your-client-secret>` — your Commerce Layer application client secret (required)
- `-e, --endpoint <https://yourdomain.commercelayer.io>` — your Commerce Layer organization endpoint (required)
- `-b, --businessModel <business-model>` — the kind of business model you want to import (optional / default: `multi_market` / choose among [this list](#available-business-models))
- `-m, --maxItems <max-items>` — the maximum number of SKUs that will be imported (optional / default: all)
- `-u, --resourcesUrl <resources-url>` — the resources URL or local path (optional / default: [our seeds directory](https://data.commercelayer.app/seed))

```
commercelayer-seeder -i your-client-id -s your-client-secret -e https://yourdomain.commercelayer.io
```

![Product import into Commerce Layer](docs/images/skus-imported-commerce-layer.jpg?raw=true 'Product import into Commerce Layer')

![Prices import into Commerce Layer](docs/images/prices-imported-commerce-layer.jpg?raw=true 'Prices import into Commerce Layer')

![Inventory import into Commerce Layer](docs/images/inventory-imported-commerce-layer.jpg?raw=true 'Inventory import into Commerce Layer')

## Available business models

Commerce Layer provides a set of predefined business models so that you can choose and import your stater one based on your needs and business requirements. These are the business models available at the moment (more to come):

- [Multi-market](https://data.commercelayer.app/seed/multi_market.json) — `businessModel: 'multi_market'`
- Custom — `businessModel: 'custom'`

## License

This repository is published under the [MIT](LICENSE) license.
