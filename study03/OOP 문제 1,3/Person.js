function Person(name, phone){
	this.name = name;
	this.phone = phone;
};

Person.prototype ={
	sendSMS : function(person, message){
		this.phone.send(this.name, person, message); 
	},	
    
    getSMS : function(person, message) {
        this.phone.receive(person, this.name, message);
    },

	getName : function(){
		return this.name;
	},

	getNum : function(){
		return this.phone.getNum();
	},
    
    getType : function(){
        return this.phoen.getType();
    }
};