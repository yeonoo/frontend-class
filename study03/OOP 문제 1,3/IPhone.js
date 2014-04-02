(function(){
	function IPhone(options) {
		Phone.call(this, options);
			this.model = "iPhone5";
			this.color = options.color;
			this.release = 2012
	}

	IPhone.prototype = new Phone();
	IPhone.prototype.constructor = IPhone;

	IPhone.prototype.startFaceTime = function() {
		console.log("페이스타임을 겁니다!");
	};

	IPhone.prototype.openPhotoStream = function() {
		console.log("포토스트림을 엽니다!");
	};

	IPhone.prototype.callSiri = function() {
		console.log("시리와의 대화를 시작합니다.");
	};

	window.IPhone = IPhone;
})();