// National Insurance Calc, with variable min depening on yearly threshold. 
const twenty_nineteen_twenty_hash = {"lower_limit": 719, "upper_limit": 4167}
const twenty_twenty_twentyone_hash = {"lower_limit": 792, "upper_limit": 4167}

const nat_insurance = (n, limits_hash) => {
    n = n/12
    let final
    if (n <= limits_hash["lower_limit"]) {
        final = n * 12
    }
    else if (n > limits_hash["lower_limit"]  && n <= limits_hash["upper_limit"]){
        let twelve_percent = n - limits_hash["lower_limit"]
        let total = twelve_percent * 0.88
        total += limits_hash["lower_limit"]
        final = total * 12
    }
    else {
        let twelve_percent = (limits_hash["upper_limit"] - limits_hash["lower_limit"])
        twelve_percent = twelve_percent * 0.88
        n = n - limits_hash["upper_limit"]
        let total = n * 0.98
        total += twelve_percent
        total += limits_hash["lower_limit"]
        final = total * 12
    }
    return final
}

// console.log(nat_insurance(600, twenty_nineteen_twenty_hash))
// console.log(nat_insurance(780, twenty_nineteen_twenty_hash))
// console.log(nat_insurance(780, twenty_twenty_twentyone_hash))
// console.log(nat_insurance(1400, twenty_nineteen_twenty_hash))
// console.log(nat_insurance(6000, twenty_nineteen_twenty_hash))
// console.log(nat_insurance(12500, twenty_nineteen_twenty_hash))
// console.log(nat_insurance(100000, twenty_twenty_twentyone_hash))



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
let thresholds = {"lowest": 12500, "basic": 50000, "higher": 150000}

const tax = (n, rates, thresholds, nat_insurance_hash) => {
let nat_ins = nat_insurance(n, nat_insurance_hash)
let allowance = personal_allowance(n, 12500)

if (n<= thresholds["lowest"]) {
    return nat_ins
}


}

// console.log(tax(12500, rates, thresholds, twenty_twenty_twentyone_hash))
// // console.log(tax(125000, rates, thresholds))
// // console.log(tax(17500, rates, thresholds))
