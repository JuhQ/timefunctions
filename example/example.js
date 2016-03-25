var time = require('../index.js');


console.log('seconds', time.seconds(60));
console.log('minutes', time.minutes(60));
console.log('hours', time.hours(24));
console.log('days', time.days(30));
console.log('weeks', time.weeks(4));
console.log('months', time.months(12));
console.log('years', time.years(30));
console.log('decades', time.decades(2));
console.log('centuries', time.centuries(5));
console.log('millennia', time.millennia(1000));
console.log('fortnights', time.fortnights(100));
console.log('now', time.now());


console.log('60 minutes in seconds', time.in.seconds(time.minutes(60)));
console.log('24 hours in seconds', time.in.seconds(time.hours(24)));
console.log('24 hours in hours', time.in.hours(time.hours(24)));
console.log('1 day in hours', time.in.hours(time.days(1)));
console.log('1 day in hours', time.in.hours(time.days(1)));
console.log('current time in years', time.in.years(time.now()));
console.log('current time in fortnights', time.in.fortnights(time.now()));
