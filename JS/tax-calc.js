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
        return allowance <= 0 ? 0 : allowance
    }
    else {
        return allowance}
}

// console.log(personal_allowance(125000, 12500))
// console.log(personal_allowance(112000, 12500))
// console.log(personal_allowance(100000, 12500))

let rates = {"basic_rate": 0.2, "higher_rate": 0.4, "additional_rate": 0.45 }
let thresholds = {"lowest": 12500, "basic": 50000, "higher": 150000}

// final tax calculator

const tax = (n, rates, thresholds, nat_insurance_hash) => {
let final
let nat_ins_deductions = n -nat_insurance(n, nat_insurance_hash)
let allowance = personal_allowance(n, 12500)

if (n<= thresholds["lowest"]) {
    let total = n - nat_ins_deductions
    final = total 
}
else if (n <= thresholds["basic"]){
    let taxable = n - allowance
    let total = taxable - (taxable * rates["basic_rate"])
    total -= nat_ins_deductions
    total += allowance
    final = total
}
else if (n <= thresholds["higher"]) {
    let taxable = n - allowance
    let basic = thresholds["basic"] - 12500
    let higher = taxable - basic
    basic -= basic * rates["basic_rate"]
    higher -= higher * rates["higher_rate"]
    let total = basic + higher + allowance
    total -= nat_ins_deductions
    final = total
}
else {
    let basic = thresholds["basic"] - 12500
    let higher = thresholds["higher"] - basic
    let additional = n - thresholds["higher"]
    basic -= basic * rates["basic_rate"]
    higher -= higher * rates["higher_rate"]
    additional -= additional * rates["additional_rate"]
    let total = basic + higher + additional + allowance
    total -= nat_ins_deductions
    final = total
}


return final.toFixed(2)
}

// tax(12500, rates, thresholds, twenty_nineteen_twenty_hash)
// // tax(100000, rates, thresholds, twenty_nineteen_twenty_hash)
// console.log(tax(35000, rates, thresholds, twenty_twenty_twentyone_hash))
// console.log(tax(50000, rates, thresholds, twenty_nineteen_twenty_hash))
// console.log(tax(50000, rates, thresholds, twenty_twenty_twentyone_hash))
// console.log(tax(150000, rates, thresholds, twenty_twenty_twentyone_hash))
// console.log(tax(149000, rates, thresholds, twenty_twenty_twentyone_hash))
// console.log(tax(100000, rates, thresholds, twenty_twenty_twentyone_hash))
// console.log(tax(200000, rates, thresholds, twenty_nineteen_twenty_hash))
// console.log(tax(200000, rates, thresholds, twenty_twenty_twentyone_hash))

// Nat insurance inverse 

const inverse_nat_ins = (n, nat_insurance_hash) => {
    let final
    if (n <= nat_insurance_hash["lower_limit"]){
        final = n
    }
    else if (n <= nat_insurance_hash["upper_limit"]){
        let twelve_percent = n - nat_insurance_hash["lower_limit"]
        let total = twelve_percent / 0.88
        total += nat_insurance_hash["lower_limit"]
        final = total
    }
    else {
        let twelve_percent = (nat_insurance_hash["upper_limit"] - nat_insurance_hash["lower_limit"])
        twelve_percent = twelve_percent / 0.88
        n = n - nat_insurance_hash["upper_limit"]
        let total = n / 0.98
        total += twelve_percent
        total += nat_insurance_hash["lower_limit"]
        final =total
    }
    return final
}

console.log(inverse_nat_ins(719, twenty_nineteen_twenty_hash))
console.log(inverse_nat_ins(3000, twenty_nineteen_twenty_hash))
console.log(inverse_nat_ins(5000, twenty_nineteen_twenty_hash))

// Take home pay calculator

const take_home_pay_monthly = (n, rates, thresholds, nat_insurance_hash) => {
    let yearly = n * 12
    let min_nat_ins = nat_insurance(12500, nat_insurance_hash)
    if (n <= nat_insurance_hash["lower_limit"]) {
        return n * 12
    }
    else if (yearly <= min_nat_ins){
        return n* 12
    }
    else if (yearly <=thresholds["basic"]){
        let allowance = 12500
        let total = yearly - allowance
        total /= 1- rates["basic_rate"]
        total += allowance 

        
    }


}

// console.log(take_home_pay_monthly(719, rates, thresholds, twenty_nineteen_twenty_hash))
// console.log(take_home_pay_monthly(1000, rates, thresholds, twenty_nineteen_twenty_hash))
// console.log(take_home_pay_monthly(2286.71, rates, thresholds, twenty_nineteen_twenty_hash))