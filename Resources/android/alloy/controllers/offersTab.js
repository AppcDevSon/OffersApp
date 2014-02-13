function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "offersTab";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.offerWindow = Alloy.createController("offersWindow", {
        id: "offerWindow",
        __parentSymbol: __parentSymbol
    });
    $.__views.offersTab = Ti.UI.createTab({
        icon: "/images/home.png",
        backgroundColor: "#E5E4E2",
        title: "Offers",
        window: $.__views.offerWindow.getViewEx({
            recurse: true
        }),
        id: "offersTab"
    });
    $.__views.offersTab && $.addTopLevelView($.__views.offersTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.offerWindow.setTab($.offersTab);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;