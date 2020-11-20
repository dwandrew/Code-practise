def sockMerchant(n, arr)
    sockHash = {}
    i=0
    while i<arr.length do
        if sockHash[arr[i]]
            sockHash[arr[i]] +=1
        else
            sockHash[arr[i]] = 1
        end
        i+=1
    end
    
    totalPairs = 0
    
    sockHash.each {|k, v| 
    pairs = v/2
    totalPairs += pairs.floor
    }
    return totalPairs
    end

#     Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

# For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

# Function Description

# Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

# sockMerchant has the following parameter(s):

# n: the number of socks in the pile
# ar: the colors of each sock
# Input Format

# The first line contains an integer , the number of socks represented in .
# The second line contains  space-separated integers describing the colors  of the socks in the pile.

# Constraints

#  where 
# Output Format

# Return the total number of matching pairs of socks that Alex can sell.