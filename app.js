// The initial numbers that must be verified.
const n1 = 5;
const n2 = 15;
const n3 = 20;
const n4 = 10;

const divBy5 = (n1 % 5 ===0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
//console.log(divBy5);

//Part two: Practical Math
 const distance = 1500
 const fuelBudget = 175
 const fuelPerGallon = 3.00
 const MilesPerHour55 = 55
 const MilesPerHour60 = 60
 const MilesPerHour75 = 75
 const fuelAt55 = 30
 const fuelAt60 = 28
 const fuelAt75 = 23

//55 milesper hour evaluation
let totalFuelForTrip55 = distance / fuelAt55
let fuelCostFor55Miles = totalFuelForTrip55 * fuelPerGallon
let lengthOfTripFor55Miles = Math.floor(distance / MilesPerHour55)
console.log(`At 55 miles per hour you will need ${totalFuelForTrip55} gallon for the entire trip, the cost for the fuel is ${fuelCostFor55Miles}, so it will cover the fuel expenses. The trip will have ${lengthOfTripFor55Miles} hours.`)

//60 miles per hour evaluation
let totalFuelForTrip60 = Math.floor(distance / fuelAt60)
let fuelCostFor60Miles = Math.floor(totalFuelForTrip60 * fuelPerGallon)
let lengthOfTripFor60Miles = Math.floor(distance / MilesPerHour60)
console.log(`At 60 miles per hour you will need ${totalFuelForTrip60} gallon for the entire trip, the cost for the fuel is ${fuelCostFor60Miles}, so it will cover the fuel expenses. The trip will have ${lengthOfTripFor60Miles} hours.`)


//75 miles per hour evaluation
let totalFuelForTrip75 = Math.floor(distance / fuelAt75)
let fuelCostFor75Miles = Math.floor(totalFuelForTrip75 * fuelPerGallon)
let lengthOfTripFor75Miles = Math.floor(distance / MilesPerHour75)
console.log(`At 75 miles per hour you will need ${totalFuelForTrip75} gallon for the entire trip, the cost for the fuel is ${fuelCostFor75Miles}, so it will NOT cover the fuel expenses. The trip will have ${lengthOfTripFor75Miles} hours.`)


//Part 3: Future Exploration
function futureExploration(fuelCostFor55Miles, fuelCostFor60Miles, fuelCostFor75Miles){
    if(fuelCostFor75Miles > fuelBudget) {
        fuelCostFor75Miles = MilesPerHour55 
        console.log(`At ${ MilesPerHour75} miles per hour, the cost exceeds the budget, So your speed has been changed to ${fuelCostFor75Miles} and the cost is now ${fuelCostFor55Miles}.`)
    } else if (fuelCostFor60Miles < fuelBudget) {
        console.log ("You are within the budget")
    } else if(fuelCostFor55Miles < fuelBudget){
        console.log ("You are within the budget")
    }
}
futureExploration(fuelCostFor55Miles, fuelCostFor60Miles, fuelCostFor75Miles)
