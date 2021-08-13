// Code your solution here

function findMatching (drivers, name) {
    return drivers.filter(names => names === name.toLowerCase() || names === name)
}
function fuzzyMatch(drivers,letter){

return drivers.filter(match => match.slice(0,letter.length) === letter) 
}

function matchName(drivers,name){
    return drivers.filter(driver =>driver.name === name)
    }