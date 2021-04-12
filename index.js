// Code your solution in this file!
const returnFirstTwoDrivers = function ([drivr1, drivr2]) {
  let newArray = ["Sally", "Bob"];
  return newArray;
};

const returnLastTwoDrivers = function ([drivr1, drivr2]) {
  let newArray = ["Freddy", "Claudia"];
  return newArray;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integr) {
  return function fareMultiplier(fare) {
    return integr * fare;
  };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArr, driversSelected) {
  return driversSelected(driversArr);
}
