require.define('/node_modules/limn/util/underscore/index.js', function(require, module, exports, __dirname, __filename, undefined){

var exports, _;
_ = require('underscore');
_.str = require('underscore.string');
_.mixin(_.str.exports());
_.mixin(require('./function'));
_.mixin(require('./array'));
_.mixin(require('./object'));
_.mixin(require('./class'));
_.mixin(require('./kv'));
_.mixin(require('./string'));
_.dump = function(o, label, expanded){
  var k, v;
  label == null && (label = 'dump');
  expanded == null && (expanded = true);
  if (!_.isArray(o) && _.isObject(o)) {
    if (expanded) {
      console.group(label);
    } else {
      console.groupCollapsed(label);
    }
    for (k in o) {
      v = o[k];
      console.log(k + ":", v);
    }
    console.groupEnd();
  } else {
    console.log(label, o);
  }
  return o;
};
module.exports = exports = _;

});
