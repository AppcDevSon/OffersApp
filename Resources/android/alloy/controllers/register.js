function Controller() {
    function submit() {
        api.create({
            username: $.usertxt.value,
            password: $.passtxt.value,
            password_confirmation: $.passcontxt.value,
            email: $.usertxt.value
        }, function(e) {
            e.success ? Alloy.createController("done").getView().open() : alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    function back() {
        $.regWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "register";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.regWin = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        layout: "vertical",
        title: "Register",
        left: 0,
        leftNavButton: {
            title: "Back"
        },
        navBarHidden: false,
        id: "regWin"
    });
    $.__views.regWin && $.addTopLevelView($.__views.regWin);
    $.__views.__alloyId11 = Ti.UI.createView({
        top: 0,
        width: 320,
        height: 50,
        backgroundColor: "#E5E4E2",
        left: 0,
        id: "__alloyId11"
    });
    $.__views.regWin.add($.__views.__alloyId11);
    $.__views.navbtn = Ti.UI.createButton({
        font: {
            color: "#FFFFFF"
        },
        backgroundColor: "#E5E4E2",
        left: 15,
        title: "Back",
        id: "navbtn"
    });
    $.__views.__alloyId11.add($.__views.navbtn);
    back ? $.__views.navbtn.addEventListener("click", back) : __defers["$.__views.navbtn!click!back"] = true;
    $.__views.navlbl = Ti.UI.createLabel({
        left: 135,
        text: "Register",
        id: "navlbl"
    });
    $.__views.__alloyId11.add($.__views.navlbl);
    $.__views.__alloyId12 = Ti.UI.createView({
        top: 40,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 15,
        id: "__alloyId12"
    });
    $.__views.regWin.add($.__views.__alloyId12);
    $.__views.user = Ti.UI.createLabel({
        top: 0,
        width: 80,
        height: 40,
        left: 5,
        text: "Email",
        id: "user"
    });
    $.__views.__alloyId12.add($.__views.user);
    $.__views.usertxt = Ti.UI.createTextField({
        top: 0,
        width: 200,
        height: 35,
        backgroundColor: "#FFFFFF",
        borderColor: "#C0C0C0",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderWidth: 2,
        hintText: "user@example.com",
        font: {
            color: "#E5E4E2"
        },
        left: 100,
        right: 300,
        id: "usertxt"
    });
    $.__views.__alloyId12.add($.__views.usertxt);
    $.__views.__alloyId13 = Ti.UI.createView({
        top: 20,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 15,
        id: "__alloyId13"
    });
    $.__views.regWin.add($.__views.__alloyId13);
    $.__views.pass = Ti.UI.createLabel({
        top: 0,
        width: 80,
        height: 40,
        left: 5,
        text: "Password",
        id: "pass"
    });
    $.__views.__alloyId13.add($.__views.pass);
    $.__views.passtxt = Ti.UI.createTextField({
        top: 0,
        width: 200,
        height: 35,
        backgroundColor: "#FFFFFF",
        borderColor: "#C0C0C0",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderWidth: 2,
        hintText: "Password",
        font: {
            color: "#E5E4E2"
        },
        left: 100,
        right: 300,
        passwordMask: "true",
        id: "passtxt"
    });
    $.__views.__alloyId13.add($.__views.passtxt);
    $.__views.__alloyId14 = Ti.UI.createView({
        top: 20,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 15,
        id: "__alloyId14"
    });
    $.__views.regWin.add($.__views.__alloyId14);
    $.__views.passcon = Ti.UI.createLabel({
        top: 0,
        width: 80,
        height: 40,
        left: 5,
        text: "Repeat Password",
        id: "passcon"
    });
    $.__views.__alloyId14.add($.__views.passcon);
    $.__views.passcontxt = Ti.UI.createTextField({
        top: 0,
        width: 200,
        height: 35,
        backgroundColor: "#FFFFFF",
        borderColor: "#C0C0C0",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderWidth: 2,
        hintText: "Password",
        font: {
            color: "#E5E4E2"
        },
        left: 100,
        right: 300,
        passwordMask: "true",
        id: "passcontxt"
    });
    $.__views.__alloyId14.add($.__views.passcontxt);
    $.__views.__alloyId15 = Ti.UI.createView({
        top: 40,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 15,
        id: "__alloyId15"
    });
    $.__views.regWin.add($.__views.__alloyId15);
    $.__views.regbtn = Ti.UI.createButton({
        top: 0,
        width: 300,
        height: 60,
        left: 5,
        right: 300,
        backgroundColor: "#FFFFFF",
        borderColor: "#C0C0C0",
        borderWidth: 2,
        borderRadius: 10,
        title: "Register",
        id: "regbtn"
    });
    $.__views.__alloyId15.add($.__views.regbtn);
    submit ? $.__views.regbtn.addEventListener("click", submit) : __defers["$.__views.regbtn!click!submit"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var api = require("api");
    __defers["$.__views.navbtn!click!back"] && $.__views.navbtn.addEventListener("click", back);
    __defers["$.__views.regbtn!click!submit"] && $.__views.regbtn.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;