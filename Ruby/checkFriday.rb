require 'Date'
require "active_support"
def check_friday_thirteenth(date)
if date.day < 13 
    first = Date.new(date.year, date.month, 13)
    if first.strftime("%A") == 'Friday'
        return date
    end
end

first = Date.new(date.next_month.year, date.next_month.month, 13)
until first.strftime("%A") == 'Friday'
    first = Date.new(first.next_month.year, first.next_month.month, 13)
end

return first 
end

# If given a date return the date of the next friday the 13th.

