function Phone(phoneNum, phoneName, phoneType){
	this.phoneNum = phoneNum;
	this.phoneName = phoneName;
    this.phoneType = phoneType;
};

Phone.prototype = {
	send : function(name, person, message){
		console.log("["+name+"] "+person.getName()+"에게 '"+message+"' 메시지를 보냈습니다.");
		console.log(this.phoneNum+"("+this.phoneName+") -> "+person.getNum()+" : "+ message);
	},

	receive : function(person, name, message){
		console.log("["+name+"] "+person.getName()+"에게 '"+message+"' 메시지를 받았습니다.");
	},

	getNum : function(){
		return this.phoneNum;
	},
    
    getType : function(){
        return this.phoneType;
    }
};