// Code your solution in this file!
// Function: returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Function: returnLastTwoDrivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array: selectingDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function: createFareMultiplier
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // Function: fareDoubler
  const fareDoubler = createFareMultiplier(2);
  
  // Function: fareTripler
  const fareTripler = createFareMultiplier(3);
  
  // Function: selectDifferentDrivers
  const selectDifferentDrivers = function(drivers, returnDriversFunction) {
    return returnDriversFunction(drivers);
  };
  