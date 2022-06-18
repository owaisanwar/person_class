// Your code here
function instance(arr) {
  if(arr.length === 0) {
    return true;
  }
  return arr[0] instanceof Person && instance(arr.slice(1));
}
class Person {
  constructor (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }
  static introducePeople(persons) {
    if(!(Array.isArray(persons))) {
      console.log('introducePeople only takes an array as an argument.');
    } else {
      if(instance(persons)) {
        persons.forEach((person) => {
          return person.introduce()
        })
      }
      else {
        console.log( "All items in array must be Person class instances.")
      }
    }
  }
}
const owais = new Person('owais', 'anwar', 19);
console.log(owais.introduce());
console.log(Person.introducePeople([owais]));
let badInput = 'Owais';
console.log(Person.introducePeople(badInput));


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
