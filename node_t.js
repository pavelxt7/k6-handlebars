var hb = require( './vendor/hb.js' );

var src = "https://test.loadimpact.com/pi.php?decimals={{digs}}";
var tpl = hb.compile(src);
var dat = {"digs": 5};
var res = tpl(dat);

console.log(res);
