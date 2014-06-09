(function($){

  var views = require("./jq.br.views.js");

  $.template = function(key, opts) {
    if (!opts) { opts = {}; }
    return tmpl(key, opts);
  };


  (function() {
    var cache = {};
    this.tmpl = function tmpl(str, data) {
      var fn = !/\W/.test(str)||/.js$/.test(str) ? tmpl(views[str]) : new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" + "with(obj){p.push('" + str.replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g, "',$1,'").split("<%").join("');").split("%>").join("p.push('") + "');}return p.join('');");
      return data ? fn(data) : fn;
    };
  })();

})(jq);
