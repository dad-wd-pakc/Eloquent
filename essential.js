/*
window.onload = function(){
	Essential();
};
*/

$(function() {
	Essential();
});

// Example of the module pattern
var Essential = (function(){
	// Private attributes
	var privateVar1 = 5;
	
	// Example use of an object literal as a configuration file
	var essentialConfig = {
		language: "english",
		defaults: {
			enableGeolocation: true,
			enableSharing: false,
			maxPhotos: 20
		},
		theme: {
			skin: "a",
			toolbars: {
				index: "ui-navigation-toolbar",
				pages: "ui-custom-toolbar"
			}
		}
	};
	
	var standardSettings = {};
	
	standardSettings["CarModel"] = "Mercedes";
	standardSettings["CarYear"] = 2010;
	standardSettings["CarMiles"] = 5000;
	standardSettings["CarTint"] = "Metallic Blue";
	
	// Private method 1
	var privateMethod1 = (function(){
		$(".check-item").click(function(){
			var checked = this.check,
			fields = [
				"CarModel", "CarYear", "CarMiles", "CarTint"
			];
			
			$.each(fields, function(i, key){
				$("#checkItem" + key).val(checked ? standardSettings[key] : "");
			});
		});
		//alert("Function #1");
	})();

	var privateMethod2 = function(){
		//alert("Function #2");
	};
	
	var privateMethod3 = function(){
		//alert("Function #3");
	};
	
	return {
		
	};
})();