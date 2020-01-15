var moment = require('moment');
var myDate = new Date();
var myCoolFormat = moment(myDate).format('LL');
console.log(myDate);
alert(myCoolFormat);
