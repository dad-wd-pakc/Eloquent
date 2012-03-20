$(function() {
	// INCOMPLETE
	var PubSub = {};
	
	(function(p){
		"use strict";
		var topics = {},
			lastUid = -1;
			
		var publish = function(topic, data){
			if(!topics.hasOwnProperty(topic)){
				return false;
			}
			
			var notify = function() {
				var subscribers = topics[topic],
				throwException = function(e) {
					return function(){
						throw e;
					};
				};
				
				for(var i = 0, j = subscribers.length; i < j; i++){
					try {
						subscribers[i].func(topic, data); 
					} catch(e){
						setTimeout(throwException(e), 0);
					}
				}
			};
			
			setTimeout(notify, 0);
			return true;
		};
		
		// Publishes the topic, passing the data to it's subscribers
		// 'topic' (String): The topic to publish
		// 'data' 
		
	});
});