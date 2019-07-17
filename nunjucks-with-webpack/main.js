import http from "k6/http";
import nj from 'nunjucks'

nj.configure({ autoescape: false });

var src = "https://test.loadimpact.com/pi.php?decimals={{digs}}";
var dat = {"digs": 5};
var res = nj.renderString(src, dat);

export default function() {
  let resp = http.get(res);
  console.log(resp.body)
};
