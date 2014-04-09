var board = document.getElementById("board");
var sum, i, j, cls;
for (i=0; i<4; i++){
    for(j=0; j<4; j++){
        sum = i+j; 
        if (sum % 2 === 0) {
            cls = 'black';
        } else {
            cls = 'white';
        }
        board.innerHTML += '<span id="' + sum + '" class="' + cls + '"></span>';
    }
}

var click = function(event) {
	if (this.red != null) {
		if ((this.red.id % 2) == 0) {
			this.red.className = this.red.className.replace("red", "black");
		} else {
			this.red.className = this.red.className.replace("red", "white");
		}
	}
	event.target.className += " red";
	this.red = event.target;
};

board.addEventListener('click', click);