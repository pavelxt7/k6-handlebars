import http from "k6/http";
import {default as hb} from './vendor/hb.js'

var src = "https://test.loadimpact.com/pi.php?decimals={{digs}}";
var tpl = hb.compile(src);
var dat = {"digs": 5};
var res = tpl(dat);

export default function() {
  let response = http.get(res);
};

