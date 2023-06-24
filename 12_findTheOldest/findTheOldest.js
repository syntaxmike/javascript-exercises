const sortByAge = (a, b) => {
    const getCurrentYear = new Date().getFullYear();
    if(!a.yearOfDeath){
        return (b.yearOfDeath - b.yearOfBirth) - (getCurrentYear - a.yearOfBirth);
    } else if (!b.yearOfDeath) {
        return (getCurrentYear - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    }

    return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
}

const findTheOldest = function(listOfPeople) {

    return listOfPeople.sort(sortByAge)[0];

};

// Do not edit below this line
module.exports = findTheOldest;
