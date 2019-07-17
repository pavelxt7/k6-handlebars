import http from "k6/http";
import hb from 'handlebars'

var src = "https://test.loadimpact.com/pi.php?decimals={{digs}}";
var tpl = hb.compile(src);
var dat = {"digs": 5};
var res = tpl(dat);
console.log(res)

export default function() {
  let response = http.get(res);
};
