var current_datetime = new Date();
console.log(current_datetime, typeof current_datetime);
//
var date_string = current_datetime.toString();
console.log(date_string, typeof date_string);
//
console.log(current_datetime.getDay());
console.log(current_datetime.getDate());
console.log(current_datetime.getMonth());
console.log(current_datetime.getFullYear());
console.log(current_datetime.getHours());
console.log(current_datetime.getMinutes());
console.log(current_datetime.getSeconds());
console.log(current_datetime.getMilliseconds());
//
console.log(current_datetime.setDate(11));
console.log(current_datetime.setMonth(10));
console.log(current_datetime.setFullYear(2026));
console.log(current_datetime.setHours(20));
console.log(current_datetime.setMinutes(30));
console.log(current_datetime.setSeconds(40));
console.log(current_datetime.setMilliseconds(500));