# Scopes and Closures

* **Functions:** first-class values: they can be assigned and passed
* **Closures:** keep the original scope no matter where the function is executed.

## Compiling code
* **Tokenizing/Lexing** => breaking the code into meaningful chunks called tokens
* **Parsing** => array of tokens and turning into a tree of nested elements known as **Abstract Syntax Tree (AST)**
* **Code generation** => taking the AST and turning into executable code

## Compilation Phase
* Scope is determined as the program is compiled
* The **target** can be considered as the assignment to a variable
* The **source** can be considered as the value assigned

> Ways to modify scope at runtime (none allowed with strict mode): 
> * **eval** => executes the the string code to compile and execute during rutime
> * **with** => modify the object into scope at runtime instead of comple 

## Lexical scope
* It is controlled by **functions, blocks, variable declations**
* The compilation phase creates a map of all the lexical scopes
* Variables are declared in specific scopes
* All this assignment of scopes ocurred at compilation 
### Lookup Failures
* When the varible is missing as a source it will cause a `ReferenceError`
* Whe the variable is missing as a target it will cause a `undeclared` and `ReferenceError`

* **Scope Chain** => connectiosn between scopes that are nested within other scopes.

> **BAD PRACTICE**: Access global variables through the window 

* **Function expression** => function definition used as a value instead of a standalone declaration 

## Global scope
* The browser global is considered as a *pure* environment without intrusion or interference of the global scope *window*
* Web workers extension that allows to run JS file in a separate thread  In this case as it is not running in the same thread there’s no DOM access so window alias is not accessible, instead it can be used self
* **Node**: using the keyword `global`

## Function Hoisting
* It occurs when a function declaration is registered at the top of its scope
* Only works for function declarations and not tu function expression assignments.
* Working the same as var hoisting 

> **let / const** => enclosing block

> **CONSIDERATION**
Function declaration is hoisted and initialized to its function value (function hoisting)
Var variable is also hoisted and automatically initialized to *undefined*, and the assignment won’t happen until runtime execution

* In the case of const it needs to be assigned at the beginning so it can’t be re-assign later
* The error when re-assigning is **TyperError**

* **TDZ** => Temporal Dead Zone it's a period of time from the entering of a scope to here the auto-initialization of the variable occurs.

* let / const => they hoist but they not auto-initialized like var 
* 2 different process => hoisting & auto-initialize
* To avoid TDZ errors for let and const de ideal scenario should be to put at the beginning of the scope

## LIMITING SCOPE EXPOSURE
* **Least Exposure (POLE)** => default exposing the bare minimum necessary, keeping everything else as private as possible
* **Principle of Least Privilege (POLP)** => Components of the system should be designed to function with least privilege, least access, least exposure. If it’s only connected to minimum-necessary capabilities it wil be stronger in case something fails
* Using variables as global will cause:
    * Naming collisions
    * Unexpected behavior
    * Unintended Dependency

* A function expression that’s then immediately invoked: **Immediately Invoked Function Expression  (IIFE)**
* It's a way to create scope to hide variables/functions
* var => function-scpoed
* let/const => block-scoped


## CLOSURES
* It is only a function behavior
* A function must be invoked and in a different branch of the scope chain where it was originally defined
* It defines a a references from the inner function to the variable in an outer scope
* Allows to access outer variables even after the outer scope is finished

## Advantages 
* Can improve efficency by allowing a function instance to remember previously determined information instead of having to compute it each time
* Can improve code readability, bounding scope-exposure by encapsulating variables inside function instances

## MODULE PATTERN
* A module is a collection of related data and functions characterized by a division between hidden private details and public accessible details.
* If a module is stateful => maintains some information over time, along with functionality to access and update that information
* A namespace is considered stateless functions grouped together
* A data structures is considered stateful grouping, if you are not limiting the visibility of any of it 
* The **Modules** need to be stateful access control. not only grouping and state but also access control through visibility
* We can have a singleton by using IIFE
> **To be considered as a Module it needs to**
> * There must be an outer scope
> * At least one piece of hidden information that represents state for the module
> * Must return on its public API a reference to at least one function that has closure over the hidden module state