# Testing React
- it's a library but it also has a philoshophy (opinitionated)
  - the way of the library is written encourages a some practices

## Best Practices
- test the software the way the users actually used it
  - not testing internal implementation
  - the software works it is supposed to
  - not need to know how it is working
- find elements by accesibility markers, not test IDs
  - if your tests can find them by accesibility it means the readers can also read it

## React Testing Library
- Provides a virtual DOM for tests
- renders components into the virtual DOM
- searching virtual DOM
- interacting with virtual DOM
- allows testing without a browser
- Jest
  - Is a test runner that finds, runs test and determines whether the tests pass or fail

## Jest/Mocha/Jasmine
- comes with create-react-app
- is a test runner that finds, runs, determines whether tests pass or fail

### jest-dom
- comes with create-react-app
- serc/setupTests.js imports it before each test, makes matchers available
- DOM-based matchers

### Jest watch mode
- watch for changes in files since last commit
- only run tests related to these files
- type `a` to run all tests

### How does Jest works?
- global test method has two arguments:
  - string description of the test => to tell which test fails/pass
  - test function => runs the function to see if fails/pass
- the test fails if an error is thrown when running function
  - assertions throw errors when the expections fails
- if there's no error => test pass!

### Default or Generic tests
- `render(<App />);` _creates a virtual DOM_
- `const linkElement = screen.getByRole('link', {name: /learn react/i});` _to access the virtual DOM it is used the screen import_
- `expect(linkElement).toBeInTheDocument();`
  - **expect** => jest global starts the assertion
  - **expect arcument** => subject of the assertion
  - **matcher** => type of assertion, this matches forms from jest-DOM
  - **matcher document** => refines matcher
- assertions examples:
  - `expect(element.textContent).toBe('hello');`
  - `expect(elementsArray).toHaveLength(7);`

## TDD (test-driven development)
- write tests before writing code then write the code to pass the tests
- red-green testing
  - test fail before code is written to later make it pass

### Why TDD?
- Makes a huge difference in how it feels to write tests
- Part of the coding process
- Efficient
- Re-run tests after changes, "free regression testing"

### Types of tests
- unit tests
  - tests one unit of code in isolation (react component, function...) just the compoennt
- integration tests
  - how multiple units work together (between components, microservices)
- functional tests (React Testing Library)
  - tests a particular function of software (behaviour)
  - you are not testing the code you are testing behaviour
- e2e
  - use actual browser and server to tests (Cypress, Selenium )

## Unit vs Functional Testing

### Unit Testing
- The idea of a unit test is to be as isolated as possible (mock)
- Sometimes some functions are separate from components because:
  - they are used by several components or have complex logic.
    We can use unit test if:
  - Complex logic difficult to test via functional tests
  - Too many edge cases
- **Pros**
  - easy to pinpoint failueres
- **Cons**
  - further from how users interact with software it might fail/pass even if the way the users interact is passing/failing
  - More likely to break with refactoring changing code without changing the behavior

### Functional Testing
- **pros**
  - include all relevant units for a pacticular behavior
  - close to how users interact with software
  - robust tests if refactor as long as the behavior stays the same the tests should pass.
- **cons**
  - more difficult to debug failing tests

## TDD vs BDD
- testing library encourages testing behavior over implementation

## Practice Notes
- One option to debug or find roles in the component we can use `LogRole` and pass the `container`
- accesibilty and finding elements
  - Finding elements by accessibility handlers
    - Guide to which query to use: https://testing-library.com/docs/guide-which-query/
  - getByText => for non interactive elements
  - getByRole => interactive element (best choice)
    - know which role to use: https://www.w3.org/TR/wai-aria/#role_definitions
    - Some elements already have built-in role
    - In case there's an element that should have a role it can be added with the attribute role=""
- screen query methods with the template `command[All]ByQueryType`
  - links:
    - [https://testing-library.com/docs/dom-testing-library/api-queries]
    - [https://testing-library.com/docs/react-testing-library/cheatsheet]
    - [https://testing-library.com/docs/guide-which-query]
  - _command_ options:
    - **get** => expect element to be in DOM
    - **query** => expect element not to be in DOM
    - **find** => expect element to appear async
  - _[All]_ options:
    - **(exclude)** => expect only one match
    - **(include)** => expect more than one match
  - _QueryType_ options:
    - **Role** => most preferred
    - **AltText** => images
    - **Text** => display images
    - **Form** Elements:
      - _PlaceholderText_, _LabelText_, _DisplayValue_
- `not wraped in act(...) warning`
  - Link help: [https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning]
  - React updated element after test was finished
    - some async event ocurred
  - Testing Library already does
  - How to fix the error
    - Know what changes after the test is over (async)
    - Account the change in the tests by:
      - awaiting the change
      - asserting on it

## Mock Service Worker
- Link help: [mswjs.io/docs/getting-started/mocks/rest-api]
- Why use it?
  - The idea of mocking a service is to intercept network calls and return specified responses
  - Prvent network calls during tests
  - set up test conditions using server response
- Every time you need to make something async and need to find something you should use `await` and `findBy`
