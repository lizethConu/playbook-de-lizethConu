const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   /*
   Sobre esta lista, realiza lo siguiente:
   
   Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
   Imprime el stack de cada explorer, usa FOR EACH
   Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
   Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
   Busca el primer explorer que sea de la CDMX, usa FIND
   Obtén la suma de todos los exercises_completed, usa REDUCE
   Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
   Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
*/

//1
explorers.forEach( function(explorer){ 
    console.log(`El nombre es ${explorer.name}`);
});

//2
explorers.forEach(explorer =>console.log(`El nombre es ${explorer.name} y su stack
es: ${explorer.stack}`))

//3
/*
Multiply all the values in an array with 10:

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
*/
const newArr = explorers.map(explorer => explorer.stack);
console.log(newArr)

//4
/*Return an array of all values in ages[] that are 18 or over:

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
} 
*/

const result = explorers.filter(explorer => explorer.stack.includes("js"));
console.log(result);

//5
/*const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12 */
const found = explorers.find(explorer => explorer.city === "CDMX");
console.log(found);

//6
/*
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
*/
const Arr1 = explorers.map(explorer => explorer.exercises_completed);
const initialValue =0;
const sum = Arr1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
initialValue);
console.log(sum);

//7
/*
const ages = [3, 10, 18, 20];

ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}
*/
const arr2 = explorers.map(explorer => explorer.missions.frontend.exercisesFinished);
console.log(arr2.some(item =>item==true));


//8
/*
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
 
*/