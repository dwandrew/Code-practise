require 'Prime'
def sum_primes(n)
Prime.each(n).sum
end


puts sum_primes(100)
puts sum_primes(10)