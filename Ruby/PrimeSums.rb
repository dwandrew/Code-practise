require 'Prime'
def sum_primes(n)
total =  Prime.each(n).sum
puts total
return total
end

sum_primes(100)
sum_primes(10)