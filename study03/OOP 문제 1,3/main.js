var os = new Person('S', new IPhone('010-9126-0811', 'IPhone'));
var nk = new Person('K', new Android('010-9117-3806', 'Android'));

os.sendSMS(nk, '폰 그만 보고 공부나 해');
nk.getSMS(os,  '폰 그만 보고 공부나 해');

nk.sendSMS(os, '너나');
os.getSMS(nk,  '너나');