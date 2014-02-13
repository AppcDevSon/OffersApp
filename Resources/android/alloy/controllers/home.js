function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.homeWin = Ti.UI.createWindow({
        id: "homeWin"
    });
    $.__views.homeWin && $.addTopLevelView($.__views.homeWin);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.homeWin.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var api = require("api");
    var data = [];
    api.showRow({
        order: "title"
    }, function(e) {
        if (e.success) {
            alert("Done");
            Ti.API.info(JSON.stringify(e));
            for (var i = 0; e.posts.length > i; i++) {
                var post = e.posts[i];
                alert(post.title);
                var row = Ti.UI.createTableViewRow({
                    backgroundColor: "#ffffff",
                    height: Ti.UI.SIZE,
                    width: Ti.UI.SIZE
                });
                var viewRow = Ti.UI.createView({
                    top: 0,
                    height: Ti.UI.SIZE,
                    width: Ti.UI.SIZE,
                    left: 0
                });
                var imgView = Ti.UI.createImageView({
                    image: post.photo.urls.square_75,
                    width: Ti.UI.SIZE,
                    height: Ti.UI.SIZE,
                    top: 0,
                    left: 3
                });
                var title = Ti.UI.createLabel({
                    text: post.title,
                    width: 300,
                    height: 30,
                    top: 0,
                    left: 100,
                    font: {
                        color: "#000000"
                    }
                });
                var desc = Ti.UI.createLabel({
                    text: post.custom_fields.Description,
                    width: 300,
                    height: 30,
                    top: 40,
                    left: 100,
                    font: {
                        color: "#000000"
                    }
                });
                row.add(viewRow);
                viewRow.add(title);
                viewRow.add(desc);
                viewRow.add(imgView);
                data.push(row);
            }
            $.table.setData(data);
        } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;