(function() {
  var bienniums, centiseconds, centuries, currentYear, days, daysInMonth, decades, decaseconds, deciseconds, fortnights, galacticYears, gigaannums, gigaseconds, gregorianYears, halfminutes, hectoseconds, hours, inFunctions, indictions, isLeapYear, jubilees, julianYears, kes, kilosecond, leapYears, lustrums, megaannums, megasecond, millennia, milliseconds, minutes, months, now, olympiads, petaannums, quarters, seconds, siderealYears, teraannums, trienniums, tropicalYears, weeks, years;

  milliseconds = function(n) {
    return n;
  };

  centiseconds = function(n) {
    return n * 10;
  };

  deciseconds = function(n) {
    return n * 100;
  };

  seconds = function(n) {
    return milliseconds(n * 1000);
  };

  decaseconds = function(n) {
    return seconds(n * 10);
  };

  halfminutes = function(n) {
    return seconds(n * 30);
  };

  minutes = function(n) {
    return seconds(n * 60);
  };

  hectoseconds = function(n) {
    return seconds(n * 100);
  };

  kes = function(n) {
    return seconds(n * 864);
  };

  kilosecond = function(n) {
    return seconds(n * 1000);
  };

  megasecond = function(n) {
    return seconds(n * 1000000);
  };

  gigaseconds = function(n) {
    return seconds(n * 1000000000);
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

  quarters = function(n) {
    return months(n * 3);
  };

  years = function(n) {
    return days(n * 365);
  };

  tropicalYears = function(n) {
    return days(n * 365.24219);
  };

  gregorianYears = function(n) {
    return days(n * 365.2425);
  };

  julianYears = function(n) {
    return days(n * 365.25);
  };

  siderealYears = function(n) {
    return days(n * 365.256363004);
  };

  leapYears = function(n) {
    return days(n * 366);
  };

  bienniums = function(n) {
    return years(n * 2);
  };

  trienniums = function(n) {
    return years(n * 3);
  };

  olympiads = function(n) {
    return years(n * 4);
  };

  lustrums = function(n) {
    return years(n * 5);
  };

  decades = function(n) {
    return years(n * 10);
  };

  indictions = function(n) {
    return years(n * 15);
  };

  jubilees = function(n) {
    return years(n * 50);
  };

  centuries = function(n) {
    return years(n * 100);
  };

  millennia = function(n) {
    return years(n * 1000);
  };

  megaannums = function(n) {
    return years(n * 1000000);
  };

  galacticYears = function(n) {
    return years(n * 230000000);
  };

  gigaannums = function(n) {
    return years(n * 1000000000);
  };

  teraannums = function(n) {
    return years(n * 1000000000000);
  };

  petaannums = function(n) {
    return years(n * 1000000000000000);
  };

  fortnights = function(n) {
    return days(n * 14);
  };

  inFunctions = {
    milliseconds: function(n) {
      return n;
    },
    centiseconds: function(n) {
      return n / 10;
    },
    deciseconds: function(n) {
      return n / 100;
    },
    seconds: function(n) {
      return inFunctions.milliseconds(n / 1000);
    },
    decaseconds: function(n) {
      return inFunctions.seconds(n / 10);
    },
    halfminutes: function(n) {
      return inFunctions.seconds(n / 30);
    },
    minutes: function(n) {
      return inFunctions.seconds(n / 60);
    },
    hectoseconds: function(n) {
      return inFunctions.seconds(n / 100);
    },
    kes: function(n) {
      return inFunctions.seconds(n / 864);
    },
    kilosecond: function(n) {
      return inFunctions.seconds(n / 1000);
    },
    megasecond: function(n) {
      return inFunctions.seconds(n / 1000000);
    },
    gigaseconds: function(n) {
      return inFunctions.seconds(n / 1000000000);
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
    quarters: function(n) {
      return months(n / 3);
    },
    years: function(n) {
      return inFunctions.days(n / 365);
    },
    tropicalYears: function(n) {
      return inFunctions.days(n / 365.24219);
    },
    gregorianYears: function(n) {
      return inFunctions.days(n / 365.2425);
    },
    julianYears: function(n) {
      return inFunctions.days(n / 365.25);
    },
    siderealYears: function(n) {
      return inFunctions.days(n / 365.256363004);
    },
    leapYears: function(n) {
      return inFunctions.days(n / 366);
    },
    bienniums: function(n) {
      return inFunctions.years(n / 2);
    },
    trienniums: function(n) {
      return inFunctions.years(n / 3);
    },
    olympiads: function(n) {
      return inFunctions.years(n / 4);
    },
    lustrums: function(n) {
      return inFunctions.years(n / 5);
    },
    decades: function(n) {
      return inFunctions.years(n / 10);
    },
    indictions: function(n) {
      return inFunctions.years(n / 15);
    },
    jubilees: function(n) {
      return inFunctions.years(n / 50);
    },
    centuries: function(n) {
      return inFunctions.years(n / 100);
    },
    millennia: function(n) {
      return inFunctions.years(n / 1000);
    },
    megaannums: function(n) {
      return inFunctions.years(n / 1000000);
    },
    galacticYears: function(n) {
      return inFunctions.years(n / 230000000);
    },
    gigaannums: function(n) {
      return inFunctions.years(n / 1000000000);
    },
    teraannums: function(n) {
      return inFunctions.years(n / 1000000000000);
    },
    petaannums: function(n) {
      return inFunctions.years(n / 1000000000000000);
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
    milliseconds: milliseconds,
    centiseconds: centiseconds,
    deciseconds: deciseconds,
    seconds: seconds,
    decaseconds: decaseconds,
    halfminutes: halfminutes,
    minutes: minutes,
    hectoseconds: hectoseconds,
    kes: kes,
    kilosecond: kilosecond,
    megasecond: megasecond,
    gigaseconds: gigaseconds,
    hours: hours,
    days: days,
    weeks: weeks,
    sennights: weeks,
    months: months,
    quarters: quarters,
    years: years,
    tropicalYears: tropicalYears,
    gregorianYears: gregorianYears,
    julianYears: julianYears,
    siderealYears: siderealYears,
    leapYears: leapYears,
    bienniums: bienniums,
    trienniums: trienniums,
    olympiads: olympiads,
    decades: decades,
    lustrums: lustrums,
    indictions: indictions,
    jubilees: jubilees,
    centuries: centuries,
    millennia: millennia,
    megaannums: megaannums,
    galacticYears: galacticYears,
    gigaannums: gigaannums,
    teraannums: teraannums,
    petaannums: petaannums,
    fortnights: fortnights,
    currentYear: currentYear,
    isLeapYear: isLeapYear,
    daysInMonth: daysInMonth,
    now: now
  };

}).call(this);
