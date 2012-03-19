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
	var facade = (function(){
		var _private = {
			i: 100,
			get: function(){
				console.log("current value: " + this.i);
			},
			set: function(val){
				this.i = val;
			},
			run: function(){
				console.log("Running");
			},
			jump: function(){
				console.log("Jumping");
			}
		};
		return {
			doThis: function(args){
				_private.set(args.val);
				_private.get();
				if(args.run) {
					_private.run();
				}
			}
		}
	})();
	
	facade.doThis({run:true, val:10});
	
	// Factory Pattern
	var Car = (function(){
		var Car = function(model, year, miles){
			this.model = model;
			this.year = year;
			this.miles = miles;
		};
		
		return function(model, year, miles){
			//console.log(new Car(model, year, miles));
			console.log(
			"This "
				+ model
				+ " was made in " 
				+ year 
				+ " and has travelled "
				+ miles
				+ " miles."
			);
			return new Car(model, year, miles);
		};
	})();
	
	var fiesta = Car("Ford Fiesta", 2009, 12000);
	var astra = Car("Vauxhall Astra", 2007, 20000);
	
	// Guitar
	var Guitar = function(settings){
		this.model = settings.model || "No model provided";
		this.colour = settings.colour || "No colour provided";
	};
	
	// Test to check 'strumDown' prior to augment
	Guitar.prototype = {
		strumDown: function(){
			console.log("Strum down strum down strum down strum down!");
		}
	}
	var strat = new Guitar({model: "Fender Stratocaster", colour: "Black"});
	strat.strumDown();
	
	// Mixin
	var Mixin = function(){};
	Mixin.prototype = {
		strumDown: function(){
			console.log("Strum down!");
		},
		strumUp: function(){
			console.log("Strum up!");
		}
	};
	
	// Augment 'Guitar' class with a method from another
	function augment(receivingClass, givingClass){
		// Only provide certain methods
		if(arguments[2]){
			for(var i=2, len=arguments.length; i<len; i++){
				receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
			}
		// Provide all methods
		} else {
			for(var methodName in givingClass.prototype){
				// Check to ensure that the receiving class doesn't have a method with the same name as the one currently being processed
				if(!receivingClass.prototype[methodName]){
					receivingClass.prototype[methodName] = givingClass.prototype[methodName];
				}
			}
		}
	}
	
	// Augment 'Guitar' with the methods 'strumDown' & 'strumUp'
	augment(Guitar, Mixin, "strumDown", "strumUp");
	// augment(Guitar, Mixin);
	
	// Create a new Guitar
	var tele = new Guitar({model: "Fender Telecaster", colour: "Sunburst"});
	
	// Test augmented functions
	tele.strumDown();
	tele.strumUp();
	
	// The Decorator pattern
	
	//Class to 'decorate'
	function MacBook(){
		this.cost = function(){
			return 1500;
		};
	}
	
	function Memory(macbook){
		this.cost = function(){
			return macbook.cost() + 500;
		};
	}
	
	function BlueRayDrive(macbook){
		this.cost = function(){
			return macbook.cost() + 250;
		};
	}
	
	function Insurance(macbook){
		this.cost = function(){
			return macbook.cost() + 125;
		};
	}
	
	// Sample usage
	var aMacbook = new Insurance(new BlueRayDrive(new Memory(new MacBook())));
	console.log(aMacbook.cost());
	
	var bMacbook = new BlueRayDrive(new Memory(new MacBook()));
	console.log(bMacbook.cost());
	
	var cMacbook = new Memory(new MacBook());
	console.log(cMacbook.cost());
	
	var dMacbook = new MacBook();
	console.log(dMacbook.cost());
	
	
	// More advanced decorator pattern
	/* Does not work!
	function ConcreteClass(){
		this.performTask = function(){
			this.preTask();
			console.log("I am performing the task");
			this.postTask();
		};
	}
	
	function AbstractDecorator(decorated){
		this.performTask = function(){
			decorated.performTask();
		};
	}
	
	function ConcreteDecoratorClass(decorated){
		this.base = AbstractDecorator;
		this.base(decorated);
		
		this.preTask = function(){
			console.log("Pre-pre-pre-pre");
		};
		
		this.postTask = function(){
			console.log("Post-post-post-post");
		};
	}
	
	var concrete = new ConcreteClass();
	var decorator1 = new ConcreteDecoratorClass(concrete);
	var decorator2 = new ConcreteDecoratorClass(decorator1);
	decorator2.performTask();
	*/
});