var fs = require("fs");

var views = {
  "sample": fs.readFileSync(__dirname + "/views/sample.html", "utf8") 
};

module.exports = views;
