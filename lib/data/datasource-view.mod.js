require.define('/node_modules/limn/data/datasource-view.js', function(require, module, exports, __dirname, __filename, undefined){

var op, BaseModel, BaseList, BaseView, DataSourceView, _ref, _;
_ref = require('../util'), _ = _ref._, op = _ref.op;
_ref = require('../base'), BaseModel = _ref.BaseModel, BaseList = _ref.BaseList, BaseView = _ref.BaseView;
/**
 * @class
 */
DataSourceView = exports.DataSourceView = BaseView.extend({
  __bind__: [],
  tagName: 'section',
  className: 'datasource',
  template: require('../template/data/datasource'),
  constructor: (function(){
    function DataSourceView(){
      return BaseView.apply(this, arguments);
    }
    return DataSourceView;
  }()),
  initialize: function(){
    return BaseView.prototype.initialize.apply(this, arguments);
  }
});

});
