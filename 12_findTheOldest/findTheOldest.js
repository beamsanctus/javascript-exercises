
const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

const findTheOldest = function (people) {

    return people.reduce((oldest, nextPerson) => {
        // console.log(oldest.name)
        // console.log(nextPerson.name)

        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        let nextPersonAge = getAge(nextPerson.yearOfBirth, nextPerson.yearOfDeath)
        return oldest = oldestAge > nextPersonAge ? oldest : nextPerson
    }
    );
};


function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth
}

console.log(findTheOldest(people).name)

// Do not edit below this line
module.exports = findTheOldest;
