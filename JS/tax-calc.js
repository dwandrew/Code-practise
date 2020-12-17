// National Insurance Calc, with variable min depening on yearly threshold. 
const twenty_nineteen_twenty_hash = {"lower_limit": 719, "upper_limit": 4167}
const twenty_twenty_twentyone_hash = {"lower_limit": 792, "upper_limit": 4167}

const nat_insurance = (n, limits_hash) => {
    if (n <= limits_hash["lower_limit"]) {
        return n
    }
    else if (n > limits_hash["lower_limit"]  && n <= limits_hash["upper_limit"]){
        let total = n - (n * 0.12)
        return total
    }
    else {
        let total = n - (n*0.02)
        return total
    }
}

// console.log(nat_insurance(600, twenty_nineteen_twenty_hash))
// console.log(nat_insurance(780, twenty_nineteen_twenty_hash))
// console.log(nat_insurance(780, twenty_twenty_twentyone_hash))
// console.log(nat_insurance(1400, twenty_nineteen_twenty_hash))
// console.log(nat_insurance(6000, twenty_nineteen_twenty_hash))

// Calculating personal_allowance

const personal_allowance = (n, allowance) => {
    if (n > 100000){
        let over = n - 100000
        let reduction = Math.floor(over/2)
        allowance -= reduction
        return allowance
    }
    else {
        return allowance}
}

// console.log(personal_allowance(125000, 12500))
// console.log(personal_allowance(112000, 12500))
// console.log(personal_allowance(100000, 12500))

let rates = {"basic_rate": 0.2, "higher_rate": 0.4, "additional_rate": 0.45 }

const tax = (n, rates) => {





let nat_ins = nat_insurance(n, twenty_nineteen_twenty_hash)
let allowance = personal_allowance(n, 12500)

}

tax(12500, rates)
tax(125000, rates)