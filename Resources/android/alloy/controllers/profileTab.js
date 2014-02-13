function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profileTab";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId11 = Alloy.createController("profileWindow", {
        id: "__alloyId11",
        __parentSymbol: __parentSymbol
    });
    $.__views.profile = Ti.UI.createTab({
        icon: "/images/profile.png",
        backgroundColor: "#E5E4E2",
        title: "Profile",
        window: $.__views.__alloyId11.getViewEx({
            recurse: true
        }),
        id: "profile"
    });
    $.__views.profile && $.addTopLevelView($.__views.profile);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;