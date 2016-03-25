seconds = (n) -> n * 1000
minutes = (n) -> seconds(n * 60)
hours = (n) -> minutes(n * 60)
days = (n) -> hours(n * 24)
weeks = (n) -> days(n * 7)
months = (n) -> days(n * 30)
years = (n) -> days(n * 365)
decades = (n) -> years(n * 10)
centuries = (n) -> years(n * 100)
millennia = (n) -> years(n * 1000)
fortnights = (n) -> days(n * 14)

inFunctions = {
  seconds: (n) -> n / 1000
  minutes: (n) -> inFunctions.seconds(n / 60)
  hours: (n) -> inFunctions.minutes(n / 60)
  days: (n) -> inFunctions.hours(n / 24)
  weeks: (n) -> inFunctions.days(n / 7)
  months: (n) -> inFunctions.days(n / 30)
  years: (n) -> inFunctions.days(n / 365)
  decades: (n) -> inFunctions.years(n / 10)
  centuries: (n) -> inFunctions.years(n / 100)
  millennia: (n) -> inFunctions.years(n / 1000)
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
  seconds
  minutes
  hours
  days
  weeks
  months
  years
  decades
  centuries
  millennia
  fortnights
  currentYear
  isLeapYear
  daysInMonth
  now
}