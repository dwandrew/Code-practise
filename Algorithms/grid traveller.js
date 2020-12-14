// Considering you can only travel down or right, and you start in the top left corner, how many
// ways are there to travel an r*c grid

const gridTraveler = (r,c) => {
    if (r ===1 && c === 1) return 1;
    if (r === 0 || c=== 0 ) return 0;
    
    return gridTraveler(r-1, c) + gridTraveler(r, c-1);
}

console.log(gridTraveler(3,2))