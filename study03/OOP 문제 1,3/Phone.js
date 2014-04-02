(function(){

	var num = '';

	function Phone (options){
		if(!options){
			options = {
				model : Android,
				color : black,
				year : 2014
			}
		}
		this.model = options.model;
		this.color : options.color;
		this.release : options.release;
	}

	Phone.prototype.boot = function() {
		console.log("전원을 켭니다.");
	}

	Phone.prototype.call = function(){
        	 	if(num === ""){
			console.log("개통하세요!");
       		 }

        		else{
           	 		console.log("전화를 겁니다!");
        		}
	};

	Phone.prototype.message = function (){
		if(num === ""){
			console.log("개통하세요!");
		}
		else{
			console.log("메시지앱을 엽니다");
		}

	}

	Phone.prototype.camera = function(){
        console.log('카메라 켜짐');
        this.isCamera = true;
    };
    
    
	Phone.prototype.setNum = function(userNum){
        num = userNum;
	};

	window.Phone = Phone;
})();