#About This

This repo is templating management tool for jqMVC.  

If you are not use jqMVC, this repo is not needed.

The jqMVC's template initialization is bad.  
1.requests asyncronously GET each template files, and append it as script tag to index.html. This initialization method is too slow and index.html become very huge.
2.defined views at controller, but, when defined files is not found, controller's init methods not working. but app can start.

##Setup
```
npm install -g grunt-cli
npm install
```

##Usage

###Write template
write template under src/views.

###Define template
Edit src/jq.br.views.js like:
```
var views = {
  "sample": require("/views/sample.html")
}
```

###Build
```
grunt build
```
It output file that named jq.br.template.min.js to build dir.
You can read the file after jq.mvc.js.
