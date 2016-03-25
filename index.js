(function() {
  var centuries, currentYear, days, daysInMonth, decades, fortnights, hours, inFunctions, isLeapYear, millennia, minutes, months, now, seconds, weeks, years;

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

  inFunctions = {
    seconds: function(n) {
      return n / 1000;
    },
    minutes: function(n) {
      return inFunctions.seconds(n / 60);
    },
    hours: function(n) {
      return inFunctions.minutes(n / 60);
    },
    days: function(n) {
      return inFunctions.hours(n / 24);
    },
    weeks: function(n) {
      return inFunctions.days(n / 7);
    },
    months: function(n) {
      return inFunctions.days(n / 30);
    },
    years: function(n) {
      return inFunctions.days(n / 365);
    },
    decades: function(n) {
      return inFunctions.years(n / 10);
    },
    centuries: function(n) {
      return inFunctions.years(n / 100);
    },
    millennia: function(n) {
      return inFunctions.years(n / 1000);
    },
    fortnights: function(n) {
      return inFunctions.days(n / 14);
    }
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

  now = function() {
    return +new Date();
  };

  module.exports = {
    "in": inFunctions,
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
    daysInMonth: daysInMonth,
    now: now
  };

}).call(this);
