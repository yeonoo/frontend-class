var myPhone1 = new IPhone({ model:'IPhone5', release:2012, color:white});
var myPhone2 = new Android({ model:'GalaxyS5', release:2014, color:gold});

console.log(myPhone1.color);
console.log(myPhone1.model);

console.log(myPhone2.color);
console.log(myPhone2.model);

myPhone1.setNumber( '01122020303');
myPhone1.call();

myPhone2.setNumber( '01122020304');
myPhone2.call();

myPhone1.boot();
myPhone1.call();
myPhone1.message();
myPhone1.camera();
myPhone1.callSiri();
myPhone1.startFaceTime();
myPhone1.openPhotoStream();

myPhone2.boot();
myPhone2.call();
myPhone2.message();
myPhone2.camera();
myPhone2.googleMarket();
myPhone2.sNote();