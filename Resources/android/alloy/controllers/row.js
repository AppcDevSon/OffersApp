function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.rowView = Ti.UI.createView({
        id: "rowView"
    });
    $.__views.row.add($.__views.rowView);
    $.__views.img = Ti.UI.createiamgeView({
        id: "img"
    });
    $.__views.rowView.add($.__views.img);
    $.__views.title = Ti.UI.createLabel({
        id: "title"
    });
    $.__views.rowView.add($.__views.title);
    $.__views.desc = Ti.UI.createLabel({
        id: "desc"
    });
    $.__views.rowView.add($.__views.desc);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;