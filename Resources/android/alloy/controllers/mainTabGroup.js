function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mainTabGroup";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId7 = [];
    $.__views.__alloyId8 = Alloy.createController("offersTab", {
        id: "__alloyId8",
        __parentSymbol: __parentSymbol
    });
    __alloyId7.push($.__views.__alloyId8.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId9 = Alloy.createController("profileTab", {
        id: "__alloyId9",
        __parentSymbol: __parentSymbol
    });
    __alloyId7.push($.__views.__alloyId9.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId10 = Alloy.createController("bookmarksTab", {
        id: "__alloyId10",
        __parentSymbol: __parentSymbol
    });
    __alloyId7.push($.__views.__alloyId10.getViewEx({
        recurse: true
    }));
    $.__views.mainTabGroup = Ti.UI.createTabGroup({
        barColor: "#E5E4E2",
        tabs: __alloyId7,
        id: "mainTabGroup"
    });
    $.__views.mainTabGroup && $.addTopLevelView($.__views.mainTabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;