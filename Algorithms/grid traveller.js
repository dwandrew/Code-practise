// Considering you can only travel down or right, and you start in the top left corner, how many
// ways are there to travel an r*c grid

const gridTraveler = (r,c) => {
    if (r ===1 && c === 1) return 1;
    if (r === 0 || c=== 0 ) return 0;
    
    return gridTraveler(r-1, c) + gridTraveler(r, c-1);
}

console.log(gridTraveler(3,2))
console.log(gridTraveler(12,2))
console.log(gridTraveler(4,6))

const gridTraveler_two = (r,c, memo = {}) => {
    const key = r + ',' + c
    if (key in memo) return memo[key];
    if (r ===1 && c === 1) return 1;
    if (r === 0 || c=== 0 ) return 0;
    memo[key] = gridTraveler_two(r-1, c, memo) + gridTraveler_two(r, c-1, memo);
    return memo[key]
}


console.log(gridTraveler_two(100, 124))
console.log(gridTraveler_two(18, 18))