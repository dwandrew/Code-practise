def first_uniq_char(s)
    arr = s.split('')
    hash = {}
    arr.uniq.each{|e| hash[e]= arr.count(e)}
    single = hash.select {|k,v| v ==1}
    first = single.keys[0]
    index = arr.find_index(first)
    if index
        return index
    else 
        return -1
    end
end

# Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

# Examples:

# s = "leetcode"
# return 0.

# s = "loveleetcode"
# return 2.
 

# Note: You may assume the string contains only lowercase English letters.