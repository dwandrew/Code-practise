def makeAnagram(a, b)
    deletions = 0
    hash_a = {}
    hash_b = {}
a.split('').each do |l|
    if hash_a[l] 
        hash_a[l]+=1
    else hash_a[l] = 1
    end
end
b.split('').each do |l|
    if hash_b[l] 
        hash_b[l]+=1
    else hash_b[l] = 1
    end
end

hash_a.each do |k,v|
if !hash_b[k]
    deletions+= v
elsif hash_b[k] > v
    deletions += (hash_b[k] - v)
elsif hash_b[k] < v 
    deletions += (v - hash_b[k] )
end
end 

hash_b.each do |k,v|
    if !hash_a[k]
        deletions+= v
    end
end

deletions
end


# A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

# The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Determine this number.

# Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

# Example


# Delete  from  and  from  so that the remaining strings are  and  which are anagrams. This takes  character deletions.

# Function Description

# Complete the makeAnagram function in the editor below.

# makeAnagram has the following parameter(s):

# string a: a string
# string b: another string
# Returns

# int: the minimum total characters that must be deleted
# Input Format

# The first line contains a single string, .
# The second line contains a single string, .

# Constraints

# The strings  and  consist of lowercase English alphabetic letters, ascii[a-z].
# Sample Input

# cde
# abc
# Sample Output

# 4
# Explanation

# Delete the following characters from the strings make them anagrams:

# Remove d and e from cde to get c.
# Remove a and b from abc to get c.
# It takes  deletions to make both strings anagrams.