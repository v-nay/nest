## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

<!-- ##migration -->

npm run migration:generate -- db/migrations/BaseMigrations
npm run migration:run
npm run migration:revert
