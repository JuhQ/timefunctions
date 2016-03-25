(function() {
  var centuries, currentYear, days, daysInMonth, decades, fortnights, hours, isLeapYear, millennia, minutes, months, seconds, weeks, years;

  seconds = function(n) {
    return n * 1000;
  };

  minutes = function(n) {
    return seconds(n * 60);
  };

  hours = function(n) {
    return minutes(n * 60);
  };

  days = function(n) {
    return hours(n * 24);
  };

  weeks = function(n) {
    return days(n * 7);
  };

  months = function(n) {
    return days(n * 30);
  };

  years = function(n) {
    return days(n * 365);
  };

  decades = function(n) {
    return years(n * 10);
  };

  centuries = function(n) {
    return years(n * 100);
  };

  millennia = function(n) {
    return years(n * 1000);
  };

  fortnights = function(n) {
    return days(n * 14);
  };

  currentYear = function() {
    return new Date().getFullYear();
  };

  isLeapYear = function() {
    var year;
    year = currentYear();
    return new Date(year, 1, 29).getMonth() === 1;
  };

  daysInMonth = function(month, year) {
    if (year == null) {
      year = currentYear();
    }
    if (month == null) {
      month = new Date(year).getMonth();
    }
    return new Date(year, month, 0).getDate();
  };

  module.exports = {
    seconds: seconds,
    minutes: minutes,
    hours: hours,
    days: days,
    weeks: weeks,
    months: months,
    years: years,
    decades: decades,
    centuries: centuries,
    millennia: millennia,
    fortnights: fortnights,
    currentYear: currentYear,
    isLeapYear: isLeapYear,
    daysInMonth: daysInMonth
  };

}).call(this);
