def repeatedString(s, n)
    i = 0
    num = 0

    # work out what percentage of the letters are 'a'
    while i< s.length
        if s[i] == 'a'
            num +=1
        end
        i+=1
    end
    
    percentage_a =  (num.to_f/((s.length).to_f)).to_f

    # work out how much of infinite string is going to be the full test string
    remainder = n%s.length
    n = n-remainder
    total = (n * percentage_a).round(half: :down)

    # make sure to check any remianing string for a's
    j = 0
    while j < remainder
        if s[j] == 'a'
            total +=1
        end
        j+=1
    end

    # return final total
    return total 
end
repeatedString('aba', 10)
repeatedString('gfcaaaecbg', 547602)

# Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

# Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

# For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.

# Function Description

# Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

# repeatedString has the following parameter(s):

# s: a string to repeat
# n: the number of characters to consider
# Input Format

# The first line contains a single string, .
# The second line contains an integer, .

# Constraints

# For  of the test cases, .
# Output Format

# Print a single integer denoting the number of letter a's in the first  letters of the infinite string created by repeating  infinitely many times.