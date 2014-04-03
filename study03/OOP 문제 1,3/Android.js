(function(){
	function Android(options) {
		Phone.call(this, options);
			this.model = "GalaxyS5";
			this.color = options.color;
			this.release = 2014
	}

	Android.prototype = new Phone();
	Android.prototype.constructor = Android;

	Android.prototype.googleMarket = function() {
		console.log("구글마켓을 엽니다!");
	};

	Android.prototype.sNote = function() {
		console.log("S노트를 엽니다!");
	};

	window.Android = Android;
})();