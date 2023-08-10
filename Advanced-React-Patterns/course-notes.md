## Design Patterns

- Time-tested solutions to recurring design problems

## Why react patterns?

- Solved issues related to build reusable components using proven solutions
- Development to highly cohesive components with minimal coupling
- Better ways to share logic between components

## High Order Component

Is an advanced technique in React for reusing component logic
It's a function that takes a component and returns another component

## React Hooks

- The idea of the hooks is to offer a more powerful and expressive way to write (and share) functionality between components.
- They always start with the leter _use_
- Normally we needed to use a Class component to keep track of the local state of the component, however with the hooks we can use functional components to access state with `useState`
- State Hook
  - `useState`: to allow the functional component to have (and update) local state
- Effect Hook
  - `useEffect`: perform side effects such as logging, fetching data or managing subscriptions. You pass a function within which you can perform your side effects
  - If you want to use the `useEffect` only when the componennt mounts then you should use the second parameter and pass an empty array
  - If you pass a any values in the second parameter, then the function will be run on mount and anytime the values passes are updated.
  - If you return a function within the effect function, it will be invoked when the component unmounts. This is a good place to cancel subscription like removing eventlisteners
- Custom Hook
  - Is a regular function, however its name must begin with the word `use` and if needed it may call any of the React hooks itself
- Refs
  - Provides a way to access DOM nodes or React elements created in the render method
  - When to use it?
    - Managing focus, text selection or media playback
    - Triggering imperative animations
    - Integrating with third-party DOM libraries
  - Ways to create it:
    - add the ref attribute on the DOM element and set the instance property with `React.createRef()`
    - callback refs with this you will pass a function instead of ref attribute, the function will receive the React component instance or HTML DOM as its argument, which can be stored and accessed elsewhere

### Rules of hooks

- Only call hooks at the top level i.e not within conditionals, loops or nested functions
- Only call hookf from react functions, i.e. functional components and custom hooks

## Compound components

- It helps build more expressive and flexible APIs to share state and logic within components.
- Encloses the state and the behevior of a group of components but still gives the rendering control of its variable parts back to the external user.
- Provide a more expressive and flexible API for communication between the paren and child components

```html
<select>
  <option value="volvo">Volvo</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
```

- That example of the `select` tag works together with the `option` tag which is used for a drop-down menu to select items in HTML, in this case `<select>` manages the state of the UI, then the `<option>` elements are configured on how the `<selecte>` should work. Compunt components in React are used to build a declarative UI component which helps to avoid prop drilling.

> Prop drilling is passing props down multiple child components, the worst part is that when the paren component re-renders, the child components will also re-render and cause a domino effect on the component.

### When to use ?

- Solve issues related to building reusable components.
- Development of highly cohesive components with minimal coupling
- Better ways to share logic between components

### Pros & Cons

#### Pros

- Separation of Concern
  - Having the UI state logic in the parent component and communicating that internally to all the child components makes a clear division of responsability
- Reduced Complexity
  - As opposed to drop drilling to pass down properties to their specific components, child props go to their respective components

#### Cons

- Only **direct components** of the parent component will have access to the props, meaning you can't wrap
- A possible solution is use `React.createContext` API

> Context API makes possible to React pass state through nested components when building using the compound component pattern. Context provides a way to pass data down the component ree without having to pass props down manually at every level.

### when to use context?

- Context is desinged to share dara that can be considered "global" for the tree of React compinents, such as authenticated user, theme or preferred language.
- Compound components provide a more flexible way to share a state within React applications, so making use of compound components in your React applications makes easiear to maintain and debug the app.

## Control Props

- Normally we will contril the state of a component from within its internal state, but there are some scenarios when we want to be able to override the internal state and control the state from the parent component (i.e updating content when something happens outside)

> Components that delegate their state to the browser as known as uncontrolled components

- Controlled components instead keep the state inside of React either in the component rendering the input or a parent component in the virtual DOM.
- Passing in `value` and `onChange` handler to the form element changes it from a _uncontrolled component_ to a _controlled_ since you now manage the state within react app.
- Done by handling the callback and managing the state within the parent component. The state and the method for updating the states are passed as props to the component.
- You can also let the component be flexible by letting the component use its internal state and also be overriden by a parent's state.

## Prop Collection and Getters

- Allows the hook to support common use cases for UI elements people build with the hook
- Hand over the rendering responsibility to your component user.
- A function that will return props when called and people must apply those props to the right element to hook together all the relevant elements to make the overarching component
- Your components will take care of the hard an generic part (the logic of the component) and the user can take care of the easy and less-generic part: "what to show and how it's styled given the state of the component"

## State Initializers

- Allows you to expose an API to users tob e able to reset your component to its original state without having to completely unmount and remount the component

## State Reducer

- Component override the state changes that a child wants to perform
