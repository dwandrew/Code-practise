const nat_insurance = (n, min) => {
    if (n <= min) {
        return n
    }
    else if (n > min  && n <= 4167){
        total = n - (n * 0.12)
        return total
    }
    else {
        total = n - (n*0.02)
    }
}

