# how to use template libraries with k6

this repo contains three subdirectories that show

1. an error when handlebars is used with k6 & browserify
1. an error when handlebars is used with k6 & webpack
1. a success when nunjacks is used with k6 & webpack (based on the work done by Mihail Stoykov in https://github.com/MStoykov/k6-es6)

# handlebars with browserify

## initialization

clone the repo :)

```
cd handlebars-with-browserify
npm install -g browserify
npm install
```

## to prepare handlebars as a modjule for k6

`browserify embed-hb.js -s hb -o vendor/hb.js`

## to prove that is works in node

`node node_t.js`

which outputs (correctly): `https://test.loadimpact.com/pi.php?decimals=5`

## running with k6

`k6 run k6_t.js`

produces this error:

`ERRO[0000] TypeError: Not a constructor at ~/k6/vendor/hb.js:3523:31(48)`

## references

- [using npm module with k6](https://docs.k6.io/docs/modules#section-npm-modules)
- [browserify standlone](https://github.com/browserify/browserify-handbook#standalone)

# handlebars with webpack

```
cd handlebars-with-webpack
npm install
npm run webpack
k6 run build/app.bundle.js
```

# nunjacks with webpack

```
cd nunjacks-with-webpack
npm install
npm run webpack
k6 run build/app.bundle.js
```