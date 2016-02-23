# app

app starter kit

## Features

## Usage

Clone the repo and initialize git:
```
git clone git@github.com:n-j-m/app your_project
cd your_project
rm -rf .git
git init
npm install
```
Add a ```.env``` file at the project root containing the following:
```
JWT_SECTRET=yoursecrethere
PORT=3000                   # optional
DEV_PORT=3001               # for front end dev. will proxy all requests to $HOST:$DEV_PORT/api/* to $HOST:$PORT/api/*
HOST=localhost              # for front end dev. those host webpack-dev-server runs on
```

**You'll need to install knex globally to run these commands**
```
npm install knex -g
```

Create and seed the database:
```
knex migrate:latest
knex seed:run
```

Routes:
```
POST  /api/auth     # Content-Type: application/json { email: 'jimmy@crackcorn.com', password: 'idontcare' }
GET   /api/me       # specifiy Authorization header: Bearer [your_token]
```

## Scripts

 - **npm run start** : `node ./bin/www`
 - **npm run dev** : `cross-env DEBUG=:server webpack-dev-server --config ./build/webpack.dev.js`
 - **npm run build** : `webpack -p --config ./build/webpack.build.js`
 - **npm run readme** : `node ./node_modules/.bin/node-readme`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[body-parser](https://www.npmjs.com/package/body-parser) | ^1.15.0 | ✖
[bookshelf](https://www.npmjs.com/package/bookshelf) | ^0.9.2 | ✖
[dotenv](https://www.npmjs.com/package/dotenv) | ^2.0.0 | ✖
[express](https://www.npmjs.com/package/express) | ^4.13.4 | ✖
[express-jwt](https://www.npmjs.com/package/express-jwt) | ^3.3.0 | ✖
[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) | ^5.7.0 | ✖
[knex](https://www.npmjs.com/package/knex) | ^0.10.0 | ✖
[morgan](https://www.npmjs.com/package/morgan) | ^1.7.0 | ✖
[pg](https://www.npmjs.com/package/pg) | ^4.4.6 | ✖
[babel-core](https://www.npmjs.com/package/babel-core) | ^6.5.2 | ✔
[babel-loader](https://www.npmjs.com/package/babel-loader) | ^6.2.3 | ✔
[babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) | ^6.5.0 | ✔
[babel-preset-stage-0](https://www.npmjs.com/package/babel-preset-stage-0) | ^6.5.0 | ✔
[cross-env](https://www.npmjs.com/package/cross-env) | ^1.0.7 | ✔
[css-loader](https://www.npmjs.com/package/css-loader) | ^0.23.1 | ✔
[debug](https://www.npmjs.com/package/debug) | ^2.2.0 | ✔
[file-loader](https://www.npmjs.com/package/file-loader) | ^0.8.5 | ✔
[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) | ^2.9.0 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔
[nodemon](https://www.npmjs.com/package/nodemon) | ^1.9.0 | ✔
[postcss-loader](https://www.npmjs.com/package/postcss-loader) | ^0.8.1 | ✔
[sqlite3](https://www.npmjs.com/package/sqlite3) | ^3.1.1 | ✔
[style-loader](https://www.npmjs.com/package/style-loader) | ^0.13.0 | ✔
[url-loader](https://www.npmjs.com/package/url-loader) | ^0.5.7 | ✔
[webpack](https://www.npmjs.com/package/webpack) | ^1.12.14 | ✔
[webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) | ^1.14.1 | ✔
[webpack-merge](https://www.npmjs.com/package/webpack-merge) | ^0.7.3 | ✔


## Author



## License

 - **MIT** : http://opensource.org/licenses/MIT