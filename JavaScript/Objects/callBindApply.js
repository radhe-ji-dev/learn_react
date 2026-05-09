/*
============== Intermidiate==============


// call, apply, bind
/*
## `call`, `bind`, `apply` Practice Problems in JavaScript Objects

### Easy Level

1. Create an object `person` with `name`.
   Create a function `greet(city)` that prints:
   `"Hi I am RK from Udaipur"`
   Use `call()`.

---
*/

const person1 = {
	name: 'RK',
};

const person2 = {
	name: 'Ram',
};

function greet(city) {
	console.log(`Hi I am ${this.name} from ${city}`);
}

greet.call(person1, 'Udaipur');
greet.call(person2, 'Jaipur');

/*



2. Create two objects:

   ```js
   const user1 = { name: "Ram" };
   const user2 = { name: "Shyam" };
   ```

   Create one function `sayAge(age)` and reuse it for both objects using `call()`.

---



3. Create a function:

   ```js
   function introduce(city, country)
   ```

   Use `apply()` to pass arguments from an array.

---

4. Create a button click handler using `bind()` so that `this.name` works correctly inside callback.

---

5. Create a calculator object:

   ```js
   const calc = {
     num: 10
   }
   ```

   Create function `add(a, b)` and use `call()` to access `num`.

---

---

## Medium Level

6. Borrow a method from one object into another using `call()`.

Example:

```js
const student = {
  name: "RK",
  print() {
    console.log(this.name);
  }
}
```

Use `student.print` for another object.

---

7. Create a reusable function:

   ```js
   fullName(city)
   ```

   and use `bind()` to create:

   ```js
   const userFromDelhi
   const userFromMumbai
   ```

---

8. Use `apply()` to find maximum number from an array without loop.

---

9. Create an object with salary.
   Create function:

   ```js
   yearlySalary(months)
   ```

   Use `call()`.

---

10. Create a function that prints:

```js
name + role + company
```

Reuse it for 3 employee objects using `bind()`.

---

---

## Tricky / Interview Style

11. Predict output:

```js
const obj = {
  name: "RK",
  show() {
    console.log(this.name);
  }
};

setTimeout(obj.show, 1000);
```

Fix it using `bind()`.

---

12. What is difference between:

```js
fn.call(obj, 1, 2)
fn.apply(obj, [1, 2])
```

Create code examples.

---

13. Create polyfill for `myCall()`.

---

14. Create polyfill for `myApply()`.

---

15. Create polyfill for `myBind()`.

---

16. Create a shopping cart object.
    Use `call()` to reuse discount function for multiple carts.

---

17. Use `bind()` for partial function application.

Example:

```js
multiply(a, b)
```

Create:

```js
double
triple
```

---

18. Create method borrowing example using array methods:

```js
Array.prototype.slice.call(arguments)
```

Convert `arguments` into real array.

---

19. Create function:

```js
printDetails(lang1, lang2)
```

Use:

* `call`
* `apply`
* `bind`

all three on same function.

---

20. Predict output:

```js
const user = {
  name: "RK",
  show: () => {
    console.log(this.name);
  }
};

user.show();
```

Explain why `this` fails here.
*/
