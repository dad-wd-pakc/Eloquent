/*
window.onload = function(){
};
*/

$(function() {
	
	// Example of the module pattern
	var essential = (function(){
		// Private attributes
		var privateVar1 = 5;
		var _body = $("body");
		
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
					_this = $(this),
					_thisLabel = $("label[for=" + _this.attr("id") + "]").text(),
					
					fields = [
						"CarModel", "CarYear", "CarMiles", "CarTint"
					];
				
				$.each(fields, function(i, key){
					$("#checkItem" + key).val(checked ? standardSettings[key] : "");
				});

				if(_this.is(":checked")) {
					console.log(_thisLabel + " is checked");
				} else {
					console.log(_thisLabel + " is not checked");
				}
				
				//alert("Test");
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
			// public attributes
			_publicVar: 10,
			
			// public methods
			publicMethod: function(){
				return ' Followed By Public Test ';
			},
		
			// let's access the private members
			getData: function(){
				return privateMethod() + this.publicMethod() + privateVar;
			}
		}
	})();


	var revealingModule = (function(opts){
		var name = opts.name || "John Doe",
			age = opts.age || 40;
		
		//Private Methods
		function setPerson(newName, newAge){
			if(!newName) {
				newName = name;
			}
			
			if(!newAge) {
				newAge = age;
			}
			
			name = newName;
			age = newAge;
		}
		
		function getPerson(){
			return [name, age];
		}
		
		//Public Methods
		return {
			set: setPerson,
			get: getPerson
		};
		
	}({
		//options object
	    name: "Juan Doe",
	    age: 56
	}));
	
	//revealingModule.set("Jane Doe", 25);
	revealingModule.set();
	var lahDeeDah = revealingModule.get();
	console.log(lahDeeDah);	
	
	
	// Factory function
	var myModule = (function(opts) {

		// Private variables with default values if none are passed in
		var foo = opts.foo || 0,
			bar = opts.bar || 0,  
		
		//private method
		product = function() {
	        return (foo * bar);
	    };
		
		//public methods
		return {
		    getFoo: function() {
	            return foo;
	        },
	        fooTimesBar: function() {
	            return product();
	        }
	    }
	})({
		//options object
	    foo: 5,
	    bar: 7
	});
	
	var fooForYou = myModule.getFoo();
	console.log(fooForYou);
	
	var fooBarred = myModule.fooTimesBar();
	console.log(fooBarred);
	
	// Facade Pattern integrated into Module Pattern
	var facade = (function{
		var _private = {
			i: 100,
			get: function(){
				
			},
			set: function(){
				
			},
			run: function(){
				
			},
			jump: function(){
				
			}
		};
		return {
			
		}
	})();
	
});