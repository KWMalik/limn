require.define('/node_modules/limn/chart/option/index.js', function(require, module, exports, __dirname, __filename, undefined){

var model, view;
model = require('./chart-option-model');
view = require('./chart-option-view');
__import(__import(exports, model), view);
function __import(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}

});
