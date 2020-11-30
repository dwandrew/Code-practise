def plus_one(digits)
    digits.reverse!()
    
    index = 0
    while index< digits.length 
        if index == 0
            digits[index] +=1
        elsif digits[index-1] == 10
                digits[index] +=1
        else 
            digits[index]
        end
        index+=1
    end
    
        if digits.rindex(10) && digits.rindex(10) == (digits.length-1)
            index = digits.rindex(10)
            digits[index] = 1
            digits.unshift(0)
        else 
            digits
        end
    
    until !digits.find_index(10)
        index = digits.find_index(10)
        digits[index] = 0
    end
   digits.reverse()
end

# Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

# The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

# You may assume the integer does not contain any leading zero, except the number 0 itself.

 

# Example 1:

# Input: digits = [1,2,3]
# Output: [1,2,4]
# Explanation: The array represents the integer 123.
# Example 2:

# Input: digits = [4,3,2,1]
# Output: [4,3,2,2]
# Explanation: The array represents the integer 4321.
# Example 3:

# Input: digits = [0]
# Output: [1]
 

# Constraints:

# 1 <= digits.length <= 100
# 0 <= digits[i] <= 9