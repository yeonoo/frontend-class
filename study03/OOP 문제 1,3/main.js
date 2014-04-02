var myPhone = new IPhone({ model:'IPhone5', release:2012, color:white});

console.log(myPhone.color);
console.log(myPhone.model);

myPhone.setNumber( '01122020303');
myPhone.call();


myPhone.boot();
myPhone.call();
myPhone.message();
myPhone.camera();
myPhone.callSiri();
myPhone.startFaceTime();
myPhone.openPhotoStream();
