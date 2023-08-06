// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];
const isUser = users.filter((item, index) => item["isActive"]).map((user)=> user.name);

const names = [];
users.forEach((user)=> names.push(user.name))
const getActive = users.map((user)=> user.isActive === true)
console.log(isUser, names);

const isUserExist = users.filter((item, index) => item["name"] === "Mike");
if(isUserExist > 0){
  console,log("User Exist");
} else {
  console.log("User does not");
}

let var1;
console.log(var1)
console.log(typeof var1)

let var2 = null;
console.log(var2)
console.log(typeof var2)

foo = 3;
console.log(foo);
var foo;

function privateSecret(){
  const secret = 'Foo';
  return ()=> secret;
}

const getSecret = privateSecret();
console.log(getSecret());


function multiply(num1){
  return (num2)=> {
    return num1 * num2
  }
}
const mul = (num1)=> (num2)=> num1 * num2

console.log(multiply(5)(6))
console.log("Multiply Currying = ", mul(5)(6))

const curry = function(fn){
  let arity = fn.length;
  return function f1(...args){
    if(args.length >= arity){
      return fn(...args);
    } else {
      return function f2(...moreArgs){
        var newArg = args.concat(moreArgs)
        return f1(...newArg)
      }
    }
  }
}
const isNameExist = (name, arr) => arr.some((el) => el.name === name);
console.log("isNameExist = ",isNameExist("Mike", users));

const isNameExisst = (name, arr) => {
  const index = arr.findIndex((el) => el.name === name);
  return index > 0;
}
console.log("isNameExisst = ",isNameExisst("Mike", users));

const get = curry((property, object)=> object[property]);
const getId = get("id");
const map = curry((fn, values)=> values.map(fn));
const getIds = map(getId);

// Remove Duplicate in an array
const removeDup = arr => {
  let result = [];
  arr.forEach((item)=>{
    if(!result.includes(item)){
      result.push(item)
    }
  })
  return result;
}

const uniqArr = arr => {
  return arr.reduce((acc, arr)=>{
    return acc.includes(arr) ? acc : [...acc, arr]
  },[])
}

console.log(removeDup([1,1,2]))

console.log(uniqArr([1,1,2]))

const shuffleItems = items => {
  return items
    .map((item)=> ({ sort: Math.random(), value: item}))
    .sort((item1, item2) => item1.sort - item2.sort)
    .map((a)=> a.value);
}

console.log("shuffleItems == ", shuffleItems([1,2]));