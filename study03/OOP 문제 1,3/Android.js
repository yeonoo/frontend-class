function Android(phoneNum, phoneType){
	Phone.call(this, phoneNum, phoneType);
};

Android.prototype = {
	send : function(name, person, message){
		Phone.prototype.send.call(name, person, message);
	},

	receive : function(name, person, message){
		Phone.prototype.receive.call(name, person, message);
	}
};

Android.prototype = new Phone();
Android.constructor = Android;