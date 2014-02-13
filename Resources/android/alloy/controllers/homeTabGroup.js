function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homeTabGroup";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId1 = [];
    $.__views.__alloyId2 = Alloy.createController("home", {
        id: "__alloyId2",
        __parentSymbol: __parentSymbol
    });
    $.__views.home = Ti.UI.createTab({
        icon: "/images/home.png",
        backgroundColor: "#E5E4E2",
        title: "Home",
        window: $.__views.__alloyId2.getViewEx({
            recurse: true
        }),
        id: "home"
    });
    __alloyId1.push($.__views.home);
    $.__views.__alloyId3 = Alloy.createController("profile", {
        id: "__alloyId3",
        __parentSymbol: __parentSymbol
    });
    $.__views.profile = Ti.UI.createTab({
        icon: "/images/profile.png",
        backgroundColor: "#E5E4E2",
        title: "Profile",
        window: $.__views.__alloyId3.getViewEx({
            recurse: true
        }),
        id: "profile"
    });
    __alloyId1.push($.__views.profile);
    $.__views.__alloyId5 = Alloy.createController("bookMarks", {
        id: "__alloyId5",
        __parentSymbol: __parentSymbol
    });
    $.__views.bookMarks = Ti.UI.createTab({
        icon: "/images/bookM.png",
        backgroundColor: "#E5E4E2",
        title: "Bookmarks",
        window: $.__views.__alloyId5.getViewEx({
            recurse: true
        }),
        id: "bookMarks"
    });
    __alloyId1.push($.__views.bookMarks);
    $.__views.homeTabGroup = Ti.UI.createTabGroup({
        barColor: "#E5E4E2",
        tabs: __alloyId1,
        id: "homeTabGroup"
    });
    $.__views.homeTabGroup && $.addTopLevelView($.__views.homeTabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;