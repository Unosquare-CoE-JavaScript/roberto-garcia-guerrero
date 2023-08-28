# Rendering React 18

## < Suspense /> component
- Allows React to **_suspend_** rendering a component subtree
  - Used where a (grand) child component is not ready to be rendered
    - ECMAScript bundle containing the component isn't loaded yet.
    - The data needed for a component isn't redady yet.
- The **_fallback_** component wil be rendered instead
  - Replaces the template children component tree
- Rendering is suspended when **a promise is thrown**
- And resumed when the prmise resolves
- If a suspense resource fails to load an error is thrown
  - When requesting it during the render()
- Catch the error using an ErrorBoundary
  - Just like other runtime error in React lifecycle functions
- Error boundaries can be nested
  - Just like suspense boundaries
- We can use as many suspense components as we want and be nested
- React will use the closest parent **<Suspense />** componet
  - Very useful to control what part of the UI is replaced by a fallback
- Multiple suspense boundaries can suspend in parallel
  - React will suspend them all and show multiple fallback components
- If you want to render a component while others are still loading
- Multiple suspending components in a single **<Suspense />** is also ok
  - Will resume when all resources promises are resolved
- Hooks available
  - **useDeferredValue()**
    - Returns a deferred version of the value that may lag behind
    - can prevent extra re-renders of expensive components
  - **useTransition()**
    - Avoid undesirable states when waiting for content
    - can be used to control how React renders when components suspend
    - prevent the fallback component being rendered immediately
    - the new components will be rendered when
      - their resources are ready
      - the timeout is expired
    - the "old" UI can use the isPending state when rendering
    - startTransition vs useTransition
      - startTransition
        - can be used anywhere
        - no additional renders
        - slightly faster
      - useTransition
        - Needs to be used in a functional component
        - One additional render with isPending
  - **useSyncExternalStore()**
    - Enables React components to safely and efficiently read from mutable external source in Concurrent Mode
    - Avoids tearing
  - **useId()**
    - Can bu used to generate unique ID's in an SSR-safe way
- **<SuspenseList />** will let you control how multiple **<Suspense />** components render their fallback
  - The order in which child components show when ready
  - If multiple child fallbacks components are displayed
- Tearing of components => different components rendered with different versions of the state because of concurrent render

### SWR is used in the application to **load data**

- A convenient hook to fetch data
- SWR makes it easy to start using suspense
  - Add suspense: _true_ to the **<SWRConfig />**
