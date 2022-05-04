# Functional Programming

### **DEFINITION**
* Programming with functions 
* To be considered as a function it needs to have
    * A single-value collection of pairs, a set of 
    inputs and outputs
    

> **TERMS**: 
> * input the domain
> * output the range

**Function Characteristics**
* **Total** => for every input there is a corresponding output
    * It should be always a return value for the range/cases we defined
* **Deterministic** => always receive the same output for the same input
* **No observable side-effects** => No observable effects besides computing value
    * *changing the outside world*
    * Ex. changing DB, screen, logs

> **not a function** => array.splice
> **a function** => array.slice

## WHY DOING THIS? 
* Learning of functional programming help us create functions that become:
* Reliable => They always return the same output 
* Portable => They are not stuck in their environment
* Reusable => They are not stuck in their environment 
* Testable => As they have the same input same output 
* Composable
* Properties/Contract

## CURRYING

Is a transform that makes `f(a,b,c)` into sum `sum(a)(b)(c)`
* Javascript implementations usually both keep the function callable normally and return the partial if the arguments count is not enough
* We choose currying when I want to remember an argument
* When currying the information that needs be remembered should be at the beginning and then the data to use 

## Composition

It takes 2 functions `(f,g)` to use it like `f(g(x)) `

Example 
```javascript
const toUpper = str => str.toUpperCase();
const exclaim = str => str + '!';

const compose = (f, g) => f(g(x));

const shout = compose(toUpper, exclaim);

console.log(shout(tears)) // TEARS! 
```

## Functors
* Functors are the containers that can be used with ‘map’ function.
* Is any object we can *map* and apply a function generating another object instance of the same type and connections

## Either Monad
In error handling we have two possible paths either a success or fail. The way to control it is by using exceptions and a try/catch block. In the functional programming it can be joined into a structure that signifies one or the other and unify them into an `Either<ok,error>` structure

`Either` is a common type in functional languages it's also called as *discrminated union*

## **BASE EXAMPLE**
```javascript
const right = (v) => ({
    map: (f) => right(f(v)),
    fold: (f, g) => g(x)
});

const left = (v) => ({
    map: () => left(v),
    fold: (f, g) => f(x),
});
```

## **Refactor try/catch to Either**

```javascript

// Refactor this function to use either 
const getPort = () => {
    try {
        const str= fs.readFileSync('config.json')
        const config = JSON.parse(str)
        return config.port
    } catch(e){
        return 5000
    }
}

// This is the result
const Try = (f) => {
    try {
        return right(f());
    } catch(e) {
        return left(e);
    }
}

const getPort = () => {
    Try(() => fs.readFileSync('config.json'))
    .map(contents => JSON.parse(contents))
    .map(config => config.port)
    .fold(() => 8080, x => x)
}

console.log(getPort()) // error: 8080, success: port 

```
