def move_zeroes(nums)
    zeros = []
    until !nums.find_index(0)
        index = nums.find_index(0)
        zero = nums.slice!(index)
        zeros.push(zero)
    end
    nums.push(zeros).flatten!
end

# Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Example:

# Input: [0,1,0,3,12]
# Output: [1,3,12,0,0]
# Note:

# You must do this in-place without making a copy of the array.
# Minimize the total number of operations.