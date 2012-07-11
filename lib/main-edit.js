var Seq, Backbone, op, AppView, BaseView, BaseModel, BaseList, ChartType, DataSource, DataSourceList, Graph, GraphList, GraphEditView, root, CHART_OPTIONS_SPEC, CHART_DEFAULT_OPTIONS, main, _ref, _;
Seq = require('seq');
Backbone = require('backbone');
_ref = require('kraken/util'), _ = _ref._, op = _ref.op;
AppView = require('kraken/app').AppView;
_ref = require('kraken/base'), BaseView = _ref.BaseView, BaseModel = _ref.BaseModel, BaseList = _ref.BaseList;
ChartType = require('kraken/chart').ChartType;
_ref = require('kraken/data'), DataSource = _ref.DataSource, DataSourceList = _ref.DataSourceList;
_ref = require('kraken/graph'), Graph = _ref.Graph, GraphList = _ref.GraphList, GraphEditView = _ref.GraphEditView;
root = this;
CHART_OPTIONS_SPEC = [];
CHART_DEFAULT_OPTIONS = {};
main = function(){
  var loc, data, match, id;
  History.Adapter.bind(window, 'statechange', function(){});
  loc = String(root.location);
  data = {};
  if (match = /\/graphs\/([^\/?]+)/i.exec(loc)) {
    id = match[1];
    if (!_(['edit', 'new']).contains(id)) {
      data.id = data.slug = id;
    }
  }
  return root.app = new AppView(function(){
    this.model = root.graph = new Graph(data, {
      parse: true
    });
    return this.view = root.view = new GraphEditView({
      model: this.model
    });
  });
};
jQuery(main);