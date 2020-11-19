
def lowestCommon(arr)
# max = arr.max()
# min = arr.min()
# array = (min..max).to_a
# array.reduce(:lcm)
(arr.min()..arr.max()).to_a.reduce(:lcm)
end




puts lowestCommon([5, 1])
puts lowestCommon([2, 16])
puts lowestCommon([1,20])