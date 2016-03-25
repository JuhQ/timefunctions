milliseconds = (n) -> n
centiseconds = (n) -> n * 10
deciseconds = (n) -> n * 100
seconds = (n) -> milliseconds(n * 1000)
decaseconds = (n) -> seconds(n * 10)
halfminutes = (n) -> seconds(n * 30)
minutes = (n) -> seconds(n * 60)
hectoseconds = (n) -> seconds(n * 100)
kes = (n) -> seconds(n * 864)
kilosecond = (n) -> seconds(n * 1000)
megasecond = (n) -> seconds(n * 1000000)
gigaseconds = (n) -> seconds(n * 1000000000)
hours = (n) -> minutes(n * 60)
days = (n) -> hours(n * 24)
weeks = (n) -> days(n * 7)
months = (n) -> days(n * 30)
quarters = (n) -> months(n * 3)
years = (n) -> days(n * 365)
tropicalYears = (n) -> days(n * 365.24219)
gregorianYears = (n) -> days(n * 365.2425)
julianYears = (n) -> days(n * 365.25)
siderealYears = (n) -> days(n * 365.256363004)
leapYears = (n) -> days(n * 366)
bienniums = (n) -> years(n * 2)
trienniums = (n) -> years(n * 3)
olympiads = (n) -> years(n * 4)
lustrums = (n) -> years(n * 5)
decades = (n) -> years(n * 10)
indictions = (n) -> years(n * 15)
jubilees = (n) -> years(n * 50)
centuries = (n) -> years(n * 100)
millennia = (n) -> years(n * 1000)
megaannums = (n) -> years(n * 1000000)
galacticYears = (n) -> years(n * 230000000)
gigaannums = (n) -> years(n * 1000000000)
teraannums = (n) -> years(n *  1000000000000)
petaannums = (n) -> years(n * 1000000000000000)
fortnights = (n) -> days(n * 14)

inFunctions = {
  milliseconds: (n) -> n
  centiseconds: (n) -> n / 10
  deciseconds: (n) -> n / 100
  seconds: (n) -> inFunctions.milliseconds(n / 1000)
  decaseconds: (n) -> inFunctions.seconds(n / 10)
  halfminutes: (n) -> inFunctions.seconds(n / 30)
  minutes: (n) -> inFunctions.seconds(n / 60)
  hectoseconds: (n) -> inFunctions.seconds(n / 100)
  kes: (n) -> inFunctions.seconds(n / 864)
  kilosecond: (n) -> inFunctions.seconds(n / 1000)
  megasecond: (n) -> inFunctions.seconds(n / 1000000)
  gigaseconds: (n) -> inFunctions.seconds(n / 1000000000)
  hours: (n) -> inFunctions.minutes(n / 60)
  days: (n) -> inFunctions.hours(n / 24)
  weeks: (n) -> inFunctions.days(n / 7)
  months: (n) -> inFunctions.days(n / 30)
  quarters: (n) -> months(n / 3)
  years: (n) -> inFunctions.days(n / 365)
  tropicalYears: (n) -> inFunctions.days(n / 365.24219)
  gregorianYears: (n) -> inFunctions.days(n / 365.2425)
  julianYears: (n) -> inFunctions.days(n / 365.25)
  siderealYears: (n) -> inFunctions.days(n / 365.256363004)
  leapYears: (n) -> inFunctions.days(n / 366)
  bienniums: (n) -> inFunctions.years(n / 2)
  trienniums: (n) -> inFunctions.years(n / 3)
  olympiads: (n) -> inFunctions.years(n / 4)
  lustrums: (n) -> inFunctions.years(n / 5)
  decades: (n) -> inFunctions.years(n / 10)
  indictions: (n) -> inFunctions.years(n / 15)
  jubilees: (n) -> inFunctions.years(n / 50)
  centuries: (n) -> inFunctions.years(n / 100)
  millennia: (n) -> inFunctions.years(n / 1000)
  megaannums: (n) -> inFunctions.years(n / 1000000)
  galacticYears: (n) -> inFunctions.years(n / 230000000)
  gigaannums: (n) -> inFunctions.years(n / 1000000000)
  teraannums: (n) -> inFunctions.years(n /  1000000000000)
  petaannums: (n) -> inFunctions.years(n / 1000000000000000)
  fortnights: (n) -> inFunctions.days(n / 14)
}

currentYear = ->
  new Date().getFullYear()

isLeapYear = ->
  year = currentYear()
  new Date(year, 1, 29).getMonth() is 1

daysInMonth = (month, year) ->
  year ?= currentYear()
  month ?= new Date(year).getMonth()
  new Date(year, month, 0).getDate()

now = ->
  +new Date()

module.exports = {
  in: inFunctions
  milliseconds
  centiseconds
  deciseconds
  seconds
  decaseconds
  halfminutes
  minutes
  hectoseconds
  kes
  kilosecond
  megasecond
  gigaseconds
  hours
  days
  weeks
  sennights: weeks
  months
  quarters
  years
  tropicalYears
  gregorianYears
  julianYears
  siderealYears
  leapYears
  bienniums
  trienniums
  olympiads
  decades
  lustrums
  indictions
  jubilees
  centuries
  millennia
  megaannums
  galacticYears
  gigaannums
  teraannums
  petaannums
  fortnights
  currentYear
  isLeapYear
  daysInMonth
  now
}