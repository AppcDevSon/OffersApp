var api = require('api');
function doLogin(e) {
	api.login({
		login : $.usertxt.value,
		password : $.passtxt.value
	}, function(e) {
		if (e.success) {
			
			Alloy.createController("mainTabGroup").getView().open();
			
			/*var win=Alloy.createController('success').getView();
			 win.open();*/
			//alert('Done');
		} else {
			
			alert(e.message);
		}
	});
}

function register(e) {
	Alloy.createController("registerWindow").getView().open();
}