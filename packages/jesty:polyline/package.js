Package.describe({
  summary: "This package is a wrapper of Polyline (https://github.com/mapbox/polyline) project to expose functions to work with polyline on Meteor server side.",
  version: "1.0.0",
  name: "jesty:polyline",
  git: "https://github.com/jesty/polyline-meteor.git",
});

Npm.depends({
  polyline: "0.1.0"
});
 
Package.on_use(function(api){
  api.add_files("polyline.js", "server");
  api.export('polyline', 'server');
});
