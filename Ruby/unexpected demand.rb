
def filledOrders(order, k)
    # Write your code here
    orders_fulfilled = 0
    i = 0
    order = order.sort()
    order.each{|o| 
    if k - o >= 0 
       k-=o
       orders_fulfilled+=1 
    end
}
    return orders_fulfilled
end