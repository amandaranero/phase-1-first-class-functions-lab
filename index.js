
const returnFirstTwoDrivers = function(array){
    const firstTwoDrivers = [...array]
    firstTwoDrivers.splice(2,2);
    return firstTwoDrivers
}

const returnLastTwoDrivers = function(array){
    const lastTwoDrivers = [...array]
    lastTwoDrivers.splice(0,2)
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return function quad(fare){
        return fare*num};
    
};


const fareDoubler = function(fare){
    return fare*2
};

const fareTripler = function(fare){
    return fare*3
}

function selectDifferentDrivers(array,fn){
    return fn(array)

}