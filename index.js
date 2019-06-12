// Code your solution in this file!
const returnFirstTwoDrivers = (driverArray) => {
	  let newArr = driverArray.slice(0, 2);
	  return newArr
}

const returnLastTwoDrivers = (driverArray) => {
	  let newArr = driverArray.slice(-2);
	  return newArr
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

const createFareMultiplier = (integer) => {
	return function (fare) {
		let finalFare =	(fare * integer)
		return finalFare
	}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (driverArray, chosenFunction) => {
	return	chosenFunction(driverArray)
}

// + `fetchSpecifiedDrivers()` — This function takes two arguments, an array of `drivers` and either the 
// `returnFirstTwoDrivers()` or `returnLastTwoDrivers()` function. Based on these two arguments, `fetchSpecifiedDrivers()` 
// ll return either the first two drivers or the last two drivers.