function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "offerDetails";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.detailsWindow = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        layout: "vertical",
        left: 0,
        id: "detailsWindow"
    });
    $.__views.detailsWindow && $.addTopLevelView($.__views.detailsWindow);
    $.__views.imgView = Ti.UI.createView({
        top: 20,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 100,
        id: "imgView"
    });
    $.__views.detailsWindow.add($.__views.imgView);
    $.__views.imageView = Ti.UI.createImageView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "imageView"
    });
    $.__views.imgView.add($.__views.imageView);
    $.__views.ttlView = Ti.UI.createView({
        top: 0,
        left: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "ttlView"
    });
    $.__views.detailsWindow.add($.__views.ttlView);
    $.__views.title = Ti.UI.createLabel({
        top: 0,
        left: 10,
        width: 100,
        height: 50,
        font: {
            coclor: "#EFEFEF"
        },
        id: "title"
    });
    $.__views.ttlView.add($.__views.title);
    $.__views.desc = Ti.UI.createLabel({
        top: 0,
        left: 130,
        width: 200,
        height: 50,
        font: {
            coclor: "#EFEFEF"
        },
        id: "desc"
    });
    $.__views.ttlView.add($.__views.desc);
    $.__views.cntView = Ti.UI.createView({
        top: 0,
        left: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "cntView"
    });
    $.__views.detailsWindow.add($.__views.cntView);
    $.__views.content = Ti.UI.createLabel({
        top: 0,
        left: 10,
        width: 100,
        height: Ti.UI.SIZE,
        font: {
            coclor: "#EFEFEF"
        },
        id: "content"
    });
    $.__views.cntView.add($.__views.content);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var datat = [];
    datat = args.data;
    $.detailsWindow.title = datat.title + "Details";
    $.title.text = datat.title;
    $.desc.text = datat.desc;
    $.content.text = datat.content;
    $.imageView.image = datat.photo;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;