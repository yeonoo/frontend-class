function IPhone(phoneNum, phoneType){
	Phone.call(this, phoneNum, phoneType);
};

IPhone.prototype = {
	send : function(name, person, message){
		Phone.prototype.send.call(name, person, message);
	},

	receive : function(naem, person, message){
		Phone.prototype.receive.call(name, person, message);
	}
};

IPhone.prototype = new Phone();
IPhone.constructor = IPhone;