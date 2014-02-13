function Controller() {
    function doLogin() {
        api.login({
            login: $.usertxt.value,
            password: $.passtxt.value
        }, function(e) {
            e.success ? Alloy.createController("homeTabGroup").getView().open() : alert(e.message);
        });
    }
    function register() {
        Alloy.createController("register").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.Login = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        layout: "vertical",
        title: "Login",
        left: 0,
        id: "Login"
    });
    $.__views.Login && $.addTopLevelView($.__views.Login);
    $.__views.__alloyId7 = Ti.UI.createView({
        top: 20,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 135,
        id: "__alloyId7"
    });
    $.__views.Login.add($.__views.__alloyId7);
    $.__views.imageView = Ti.UI.createImageView({
        image: "/images/login.png",
        width: 100,
        height: 100,
        id: "imageView"
    });
    $.__views.__alloyId7.add($.__views.imageView);
    $.__views.__alloyId8 = Ti.UI.createView({
        top: 20,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 15,
        id: "__alloyId8"
    });
    $.__views.Login.add($.__views.__alloyId8);
    $.__views.user = Ti.UI.createLabel({
        top: 0,
        width: 80,
        height: 40,
        left: 5,
        text: "Email",
        id: "user"
    });
    $.__views.__alloyId8.add($.__views.user);
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
    $.__views.__alloyId8.add($.__views.usertxt);
    $.__views.__alloyId9 = Ti.UI.createView({
        top: 20,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 15,
        id: "__alloyId9"
    });
    $.__views.Login.add($.__views.__alloyId9);
    $.__views.pass = Ti.UI.createLabel({
        top: 0,
        width: 80,
        height: 40,
        left: 5,
        text: "Password",
        id: "pass"
    });
    $.__views.__alloyId9.add($.__views.pass);
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
    $.__views.__alloyId9.add($.__views.passtxt);
    $.__views.__alloyId10 = Ti.UI.createView({
        top: 30,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 15,
        id: "__alloyId10"
    });
    $.__views.Login.add($.__views.__alloyId10);
    $.__views.logbtn = Ti.UI.createButton({
        top: 0,
        width: 140,
        height: 60,
        left: 5,
        backgroundColor: "#FFFFFF",
        borderColor: "#C0C0C0",
        borderWidth: 2,
        borderRadius: 10,
        title: "Login",
        id: "logbtn"
    });
    $.__views.__alloyId10.add($.__views.logbtn);
    doLogin ? $.__views.logbtn.addEventListener("click", doLogin) : __defers["$.__views.logbtn!click!doLogin"] = true;
    $.__views.regbtn = Ti.UI.createButton({
        top: 0,
        width: 140,
        height: 60,
        left: 160,
        right: 300,
        backgroundColor: "#FFFFFF",
        borderColor: "#C0C0C0",
        borderWidth: 2,
        borderRadius: 10,
        title: "Register",
        id: "regbtn"
    });
    $.__views.__alloyId10.add($.__views.regbtn);
    register ? $.__views.regbtn.addEventListener("click", register) : __defers["$.__views.regbtn!click!register"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var api = require("api");
    __defers["$.__views.logbtn!click!doLogin"] && $.__views.logbtn.addEventListener("click", doLogin);
    __defers["$.__views.regbtn!click!register"] && $.__views.regbtn.addEventListener("click", register);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;