n = gets.to_i
def binary_ones(n)
binary = (n).to_s(2)

split =  binary.split('0')
max = 0
split.each{|num| 
if num.length > max
    max = num.length
end
}

return max

end

puts binary_ones(n)
# Objective
# Today, we're working with binary numbers. Check out the Tutorial tab for learning materials and an instructional video!

# Task
# Given a base- integer, , convert it to binary (base-). Then find and print the base- integer denoting the maximum number of consecutive 's in 's binary representation.

# Input Format

# A single integer, .

# Constraints

# Output Format

# Print a single base- integer denoting the maximum number of consecutive 's in the binary representation of .