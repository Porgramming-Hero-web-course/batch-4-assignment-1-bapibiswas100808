## Handling Async/Await for Asynchronous Operations in TypeScript over Callback and Promise

In TypeScript, asynchronous operations like Input/Output, Network Requests, or time-based tasks can be handled by Callback, Promise, or async/await operations. We will discuss today why async/await is more acceptable than Callback or Promise for asynchronous operations in TypeScript.

### Let's discuss Callback and Promise first:

#### Callback:

This is an old approach to handle asynchronous operations. A Callback function is a function that is passed to another function as a parameter, which gets executed after the asynchronous operation completes. The main problem shows up when we need to use a complex nested operation using Callback functions, as it can create "Callback Hell".

**Example of Callback:**

```typescript
function fetchData(callback: (data: string) => void) {
  setTimeout(() => callback("Data fetched"), 1000);
}

fetchData((data) => console.log(data));
```

#### Promise:

Promise is a good alternative to Callback. A promise will eventually be resolved or rejected. It helps to write cleaner code than callbacks. Rather than nesting callbacks, we can use the `then` and `catch` methods to handle the result or error. Promises are easier to manage than callbacks and help avoid "Callback Hell".

**Example of Promise:**

```typescript
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });
}

fetchData().then((data) => console.log(data));
```

### Now let's see why async/await is preferable over the operations mentioned above:

#### async/await:

This is the modern approach to handling asynchronous operations. This approach is built on top of Promises mainly. The async/await operation looks more like synchronous syntax to handle asynchronous operations. It improves readability and maintainability, especially when working with more complex operations. So the main benefit is that with async/await, the code looks like traditional synchronous code, which is very easy to understand.

**Exaple of async/await function over Promise:**

```typescript
async function fetchData(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Data fetched"), 1000)
  );
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();
```

### The main points where async/await is better than Promise/Callback:

1. Readability
2. Error Handling
3. Debugging
4. Avoid Callback Hell
5. Maintainability
