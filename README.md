# k6-handlebars

this repo demonstrates an error when a javascript module is used with k6.

## initialization

clone the repo :)

```
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
