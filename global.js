window.onload = function() {
    initAllTheseThings();
};

function initAllTheseThings() {    
    var add = function(a, b) {
        return a + b;
    };
    
    //alert(add(5, 5));
    
    var yaddaDadda = function (x, y, z) {
        return z + " " + y + " " + x;
    };

    var baddaBing = yaddaDadda("Three", "Two", "One");
    
    //alert(baddaBing);
    
    var whatsaMattaWitchoo = function() {
        
    };
    
    //var chicken = function() {
        //return egg();
    //}
    
    //var egg = function() {
        //return chicken();
    //}
    
    //var ageOldQuestion = function() {
        //alert(chicken() + " came first.");
    //};
    
    //ageOldQuestion();
    
    var simpleAddition = function() {
        function makeAddFunction(amount) {
            function add(number) {
                return number + amount;
            }
            return add;
        }
        
        var addTwo = makeAddFunction(2);
        //var addFive = makeAddFunction(5);
        alert(addTwo(9)); 
    };
    
    //simpleAddition();
    
    var getThePower = function() {
        function power(base, exponent) {
            if (exponent == 0) {
                return 1;
            } else {
                return base * power(base, exponent - 1);
            }
        }
        var newPower = power(2,3);
        alert(newPower);
    };
    
    //getThePower();
    
    var arrayThing = function() {
        var chineseBox = {};
        chineseBox.content = chineseBox;
        alert("content" in chineseBox);
        alert("content" in chineseBox.content);
    };
    
    //arrayThing();
    
    var arraylooping = function() {
        var mailArchive = {
            0: "lorem ipsum",
            1: "blah blah blah",
            2: "yadda yadda",
            3: "yes yes yes",
            4: "no no no",
            5: "maybe maybe myabe"
        };

        for (var current = 0; current in mailArchive; current++) {
            document.write("<p>Processing email #" + current + ": " + mailArchive[current] + "</p>");
        }
    };
    
    //arraylooping();
    
    var arrayloopingRedux = function() {
        var mailArchive = ["Juan", "Tu", "Tree", "Thor"];
        
        for (var current = 0; current < mailArchive.length; current++) {
            document.write("<p>List 'o names #", current+1, ": ", mailArchive[current] + "</p>");
        }
    };
    
    //arrayloopingRedux();
    
    var objectStuff = function() {
        var doh = "Doh";
        document.write("<h1>" + (typeof doh).toUpperCase() + "</h1>");
        document.write("<h2>" + doh.toUpperCase() + "</h2>");
    };
    
    //objectStuff();
    
    var manipulateObjects = function() {
        var mack = [];
        mack.push("Return");
        mack.push("of");
        mack.push("the");
        mack.push("Mack");
        document.write("<p>" + mack.join(" ") + "</p>");
        document.write("<p>" + mack.pop() + "</p>");
        document.write("<p>" + mack + "</p>");
    };
    
    //manipulateObjects();
    
    var moreManipulation = function() {
        var words = "I am an inefficient and bloated sentence that needs to be downsized.";
        document.write("<strong>" + words.split(" ") + "</strong>");
    };
    
    //moreManipulation();
	
	var charIgnore = function() {
		var cakeCopy = "Tart applicake chocolate cake powder bear claw. Candy carrot cake marshmallow sweet roll jujubes pudding caramels faworki. Lollipop brownie muffin oat cake liquorice gummies.";
		
		var baconCopy = "Pastrami chuck filet mignon jowl, rump short ribs pork belly shankle salami. Cow meatloaf fatback, hamburger venison beef ribs chuck sausage tri-tip frankfurter chicken tail. Pork hamburger jowl, jerky swine salami shoulder pig beef short ribs fatback rump. Cow chicken strip steak, capicola t-bone short ribs jerky pork chop leberk&egrave;se. Pastrami turkey meatball cow ribeye boudin, pancetta strip steak ham spare ribs. Bresaola ham hock ball tip shoulder chicken. Shankle tongue sausage pork chop.";
		
		//if(cakeCopy.slice(0, 4) == "applicake") {
		if(cakeCopy.slice(0, 4) == "Tart") {
			document.write(cakeCopy);
		} else {
			document.write(baconCopy);
		}
	};
	
	//charIgnore();
	
	var stringCompare = function() {
		var startsWith = function(string, pattern) {
			return string.slice(0, pattern.length) == pattern;	
		};
		
		//alert(startsWith("blah blah blah","bla"));
		
		var retrieveArrayOfNames = function(string) {
			var array = string.split(/[\s,]+/);
			return array;
		};
		
		alert(retrieveArrayOfNames("Cupcake ipsum dolor sit amet fruitcake toffee gummi bears"));
    };
	
	//stringCompare();

	var livingCatsChecker = function() {
		function startsWith(string, pattern) {
			return string.slice(0, pattern.length) == pattern;	
		}
		
		function retrieveArrayOfNames(string) {
			var array = string.split(/[\s,]+/);
			return array;
		}
		
		function addToSet(set, values) {
			for (var i = 0; i < values.length; i++) {
				set[values[i]] = true;
			}
		}
		
		function removeFromSet(set, values) {
			for (var i = 0; i < values.length; i++) {
				delete set[values[i]];
			}
		}
		
		var mailArchive = {"mail": 
			[
				{"content": "born faworki bear claw pie. Sweet brownie liquorice sugar plum lollipop. Danish bear claw caramels sugar plum bear claw."},
				{"content": "died carrot cake jelly Spot carrot cake donut. Dessert drag&egrave;e gummies chupa chups muffin. Pie gummies gummies danish tiramisu cheesecake cookie. Chupa chups gummi bears chocolate bar gummies."},
				{"content": "born caramels croissant. Donut muffin oat cake chocolate cake carrot cake ice cream. Croissant marshmallow muffin tart powder gummies powder."},
				{"content": "died cake marzipan chupa chups icing cotton candy muffin drag&egrave;e applicake. Died in a pie bonbon lemon drops topping tart jelly beans cookie. Cupcake donut dessert. Marzipan oat cake chupa chups muffin pastry."},
				{"content": "born tootsie roll faworki wafer dessert cake souffl&egrave;. Cake pudding halvah oat cake jelly-o fruitcake cake. Tart marzipan icing carrot cake bear claw bear claw chocolate cake lemon drops."}
			]
		};
		
		var livingCats = { 
			"Pickles": true
		};
		
		var paragraphs = [];
		var paragraphs = [];
		
		var i;
		
		for (var i = 0; i < mailArchive.mail.length; i++) {
			paragraphs.push(mailArchive.mail[i].content);
			
			for (var paragraph = 0; paragraph < paragraphs.length; paragraph++) {
				if (startsWith(paragraphs[paragraph], "born")) {
					var names = catNames(paragraphs[paragraph]);
					for (var name = 0; name < names.length; name++) {
						livingCats[names[name]] = true;
					}
				} else if (startsWith(paragraphs[paragraph], "died")) {
					var names = catNames(paragraphs[paragraph]);
					for (var name = 0; name < names.length; name++) {
						delete livingCats[names[name]];
					}
				}
			}
		}
		
		if ("Pickles" in livingCats) {
			document.write("Win!");
		} else {
			document.write("Fail!");
		}
	};
	
	//livingCatsChecker(); INCOMPLETE
	
	var makeADate = function() {
		document.write(new Date());
		document.write(new Date(1980, 1, 1));
		document.write(new Date(2007, 2, 30, 8, 20, 30)); // Year, Month, Day, Hour, Minute, Second, Milliseconds
		
		var today = new Date();
		document.write("<br />Year: " + today.getFullYear() + "<br />month: " + today.getMonth() + "<br />day: " + today.getDate());
		document.write("<br />Hour: " + today.getHours() + "<br />minutes: " + today.getMinutes() + "<br />seconds: " + today.getSeconds());
		document.write("<br />Day of week: " + today.getDay());
		document.write(today.getTime());
		
		var wallFall = new Date(1989, 10, 9);
		var gulfWarOne = new Date(1990, 6, 2);

		if (wallFall < gulfWarOne) {
			document.write("The Wall fell first... ");
		} else {
			document.write("The did not Wall fall first... ");
		}
		
		if (wallFall == wallFall) {
			document.write("The Wall fell at the same time as the Wall fell... ");
		} else {
			document.write("The Wall did not fall at the same time as the Wall... ");
		}
		
		// but
		if (wallFall == new Date(1989, 10, 9)) {
			document.write("The Wall fell at the same time as the new date... ");
		} else {
			document.write("The Wall did not fall at the same time as the new date... ");
		}
	};
	
	//makeADate();
	
	var optionalArguments = function() {
		function add(number, howmuch) {
			if (arguments.length < 2) {
				howmuch = 1;
			}
			
			return number + howmuch;
		}
		
		document.write("<p>" + add(6) + "</p>");
		document.write("<p>" + add(6, 4) + "</p>");
	};
	
	//optionalArguments();
	
	var errorCatching = function() {
		function lastElement(array) {
			if (array.length > 0) {
				return array[array.length - 1];
			} else {
				throw "Can not take the last element of an empty array or something to that effect...";
			}
		}
		
		function lastElementPlusTen(array) {
			return lastElement(array) + 10;
		}
		
		try {
			document.write(lastElementPlusTen([]));
		}
		catch (error) {
			document.write("Something went wrong: ", error);
		}
	};
	
	// errorCatching();
	
	// Higher-order function
	// Generic for loop
	var	forEach = function(array, action) {
		for (var i = 0; i < array.length; i++) {
			action(array[i]);
		}
	};
	
	// Combines an array into a single value
	function reduce(combine, base, array) {
		forEach(array, function (element) {
			base = combine(base, element);
		});
		return base;
	}
	
	function add(a, b) {
		return a + b;
	}
	
	function sum(numbers) {
		return reduce(add, 0, numbers);
	}
	
	var reduceSomeValues = function() {
		var numbers = [2, 5, 78, 15, 35, 15, 23, 27];
		var reducedItem = sum(numbers);
		document.write(reducedItem);
	};
	
	// reduceSomeValues();
	
	// Builds iterate through an array and building an new array from the values
	function map(func, array) {
		var result = [];
			forEach(array, function (element) {
			result.push(func(element));
		});
		return result;
	}
	
	var mapMyValues = function() {
		var mapped = map(Math.round, [0.01, 2.4949999999999, 9.89182913281371298371893792, Math.PI]);
		document.write(mapped);
	};
	
	// mapMyValues();
	
	var universalForEach = function() {
		var myGenericArray = [
			"eenie",
			"meenie",
			"minie",
			"mo",
			"teenie",
			"tinie",
			"tempah",
			"stump",
			"stup",
			"sit",
			"steal"
		];
		
		function wordify(theArray) {
			var wordEnding = "ification";
			var newWord;
			
			forEach(theArray, function (currentWord) {
				var theWord = currentWord;
				
				if(theWord.charAt(theWord.length-1) == "e") {
					theWord = theWord.slice(0, -1);
				}
				
				newWord = theWord += wordEnding;
				document.write("<p><strong>" + newWord.toUpperCase() + "</strong></p>");
			});
		}
		
		wordify(myGenericArray);
	};
	
	//universalForEach();
	
	var generateHTMLTags = function() {
		var linkObject = {
			name: "a",
			attributes: {
				href: "http://www.gokgs.com/"
			},
			content: [
				"Play Go!"
			]
		};
		
		function tag(name, content, attributes) {
			return {name: name, attributes: attributes, content: content};
		}
		
		function link(target, text) {
			return tag("a", [text], {href: target});
		}
		
		function image(source, alt, title) {
			return tag("img", [], {src: source, alt: alt, title: title});
		}
		
		function escapeHTML(text) {
			var replacements = [
				[/&/g, "&amp;"],
				[/"/g, "&quot;"],
				[/</g, "&lt;"],
				[/>/g, "&gt;"]
			];
			
			forEach(replacements, function(replace) {
				text = text.replace(replace[0], replace[1]);
			});
			
			return text;
		}
		
		function renderHTML(element) {
			var pieces = [];
		
			function renderAttributes(attributes) {
				var result = [];
				if (attributes) {
					for (var name in attributes) 
					result.push(" " + name + "=\"" +
					escapeHTML(attributes[name]) + "\"");
				}
				return result.join("");
			}
		
			function render(element) {
				// Text node
				if (typeof element == "string") {
					pieces.push(escapeHTML(element));
				}
				// Empty tag
				else if (!element.content || element.content.length == 0) {
					pieces.push("<" + element.name + renderAttributes(element.attributes) + "/>");
				}
				
				// Tag with content
				else {
					pieces.push("<" + element.name + renderAttributes(element.attributes) + ">");
					forEach(element.content, render);
					pieces.push("</" + element.name + ">");
				}
			}
		
			render(element);
			return pieces.join("");
		}
		
		document.write(renderHTML(image("http://placehold.it/350x150", "Placeholder Image", "PlaceShoulder Image")));
	};
	
	//generateHTMLTags();
	
	var mapDirections = function() {
		var roads = {};
		function makeRoad(from, to, length) {
			//document.write(from + " " + to + " " + length);
			
			function addRoad(from, to) {
				if (!(from in roads)) {
					roads[from] = [];
				}
				
				roads[from].push({to: to, distance: length});
			}
			
			addRoad(from, to);
			addRoad(to, from);
		}
		
		function makeRoads(start) {
			for (var i = 1; i < arguments.length; i += 2) {
				makeRoad(start, arguments[i], arguments[i + 1]);
			}
		}
		
		makeRoads("Point Kiukiu", "Hanaiapa", 19, "Mt Feani", 15, "Taaoa", 15);
		makeRoads("Airport", "Hanaiapa", 6, "Mt Feani", 5, "Atuona", 4, "Mt Ootua", 11);
		makeRoads("Mt Temetiu", "Mt Feani", 8, "Taaoa", 4);
		makeRoads("Atuona", "Taaoa", 3, "Hanakee pearl lodge", 1);
		makeRoads("Cemetery", "Hanakee pearl lodge", 6, "Mt Ootua", 5);
		makeRoads("Hanapaoa", "Mt Ootua", 3);
		makeRoads("Puamua", "Mt Ootua", 13, "Point Teohotepapapa", 14);
		
		//document.write(roads["Point Kiukiu"]);
		//alert(roads["Airport"]);
		
		function roadsFrom(place) {
			var found = roads[place];
			
			if(found == undefined) {
				//document.write("Sorry. We did not find a place called '" + place + "'.");
				throw new Error("Sorry. We did not find a place called '" + place + "'.");
			} else {
				//document.write(found);
				return found;
			}
		}
		
		//roadsFrom("Cemetery");
		
		function member(array, value) {
			var found = false;
			forEach(array, function(element) {
				if (element === value) {
					found = true;
				}
			});
			
			return found;
		}
		
		//document.write(member([6, 7, "Bordeaux"], 7));
	};
	
	mapDirections();
	
	/*
	var speak = function(line){
		document.write("<p>The " + this.adjective + " rabbit says '" + line + ".'</p>");
	};
	
	var corporateRabbit = {
		adjective: "corporate",
		speak: speak
	};
	
	var addictRabbit = {
		adjective: "Cherry Coke craving",
		speak: speak
	};
	
	speak.apply(corporateRabbit, ["I love the SPAR meal deal!"]);
	speak.call(addictRabbit, "Cherry Coke! Cherry Coke! Cherry Coke! Cherry Coke!");
	*/
	
	var Rabbit = function(adjective){
		this.adjective = adjective;
		this.speak = function(line){
			document.write("<p>The " + this.adjective + " rabbit says '" + line + ".'</p>");
		}
	};
	
	var inconsiderateRabbit = new Rabbit("inconsiderate");
	inconsiderateRabbit.speak("Someone's sitting there, luv");
	
	var distinguishedRabbit = new Rabbit("distinguished");
	
	var simpleObject = {};
	console.log(simpleObject.constructor);
	console.log(simpleObject.toString);
	
	//document.write(inconsiderateRabbit.toString == simpleObject.toString);
	
	Rabbit.prototype.dance = function() {
		document.write("The " + this.adjective + " rabbit is a maniac on the dancefloor.");
	};
	
	distinguishedRabbit.dance();
	
	/*
	Object.prototype.properties = function() {
		var result = [];
		
		for(var property in this) {
			if(this.hasOwnProperty(property)) {
				result.push(property);
			}
		}
		
		return result;
	};
	
	var test = {"Evian": true, "Volvic": true};
	document.write("<p>" + test.properties() + "</p>");
	*/
	
	var forEachIn = function(object, action) {
		for(var property in object){
			if(Object.prototype.hasOwnProperty.call(object, property)){
				action(property, object[property]);
			}
		}
	};
	
	var monkeyBearCat = {head: "monkey", body: "bear", tail: "cat", hasOwnProperty: "responsive"};
	
	forEachIn(monkeyBearCat, function(name, value) {
		//document.write("<p>The " + name + " of a " + value + ".</p>");
		document.write("<p>Property " + name + " = " + value + "</p>");
	});
	
	var object = {foo: "bar"};
	
	document.write(Object.prototype.hasOwnProperty.call(object, "foo") && Object.prototype.propertyIsEnumerable.call(object, "foo"));
	
	var Dictionary = function(startValues){
		this.values = startValues || {};
	};
	
	Dictionary.prototype.store = function(name, value) {
		this.values[name] = value;
	};
	
	Dictionary.prototype.lookup = function(name) {
		return this.values[name];
	};
	
	Dictionary.prototype.contains = function(name) {
		return Object.prototype.hasOwnProperty.call(this.values, name) && Object.prototype.propertyIsEnumerable.call(this.values, name);
	};
	
	Dictionary.prototype.each = function(action) {
		forEachIn(this.values, action);
	}
	
	var colours = new Dictionary({
		Grover: "blue",
		Elmo: "red",
		Bert: "yellow"
	});
	
	document.write("<p>Does colours contain Grover? " + colours.contains("Grover") + "</p>");
	document.write("<p>Does colours contain constructor? " + colours.contains("constructor") + "</p>");
	
	colours.each(function(name, colour) {
		document.write("<p>" + name + " is " + colour + "</p>");
	});
};