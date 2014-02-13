function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "bookmarksTab";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId0 = Alloy.createController("bookmarksWindow", {
        id: "__alloyId0",
        __parentSymbol: __parentSymbol
    });
    $.__views.bookmarks = Ti.UI.createTab({
        icon: "/images/bookM.png",
        backgroundColor: "#E5E4E2",
        title: "Bookmarks",
        window: $.__views.__alloyId0.getViewEx({
            recurse: true
        }),
        id: "bookmarks"
    });
    $.__views.bookmarks && $.addTopLevelView($.__views.bookmarks);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;