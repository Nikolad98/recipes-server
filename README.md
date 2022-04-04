http://localhost:3000/api/signup,
--method: POST
--body: email, password
--response: 201, "user created"
--err: 404, error

http://localhost:3000/api/login,
--method: POST
--body: email, password
--response: 201, user
--err: 404, error

http://localhost:3000/api/logout
--method: GET
--response: 200, "user loged out"
--delet auth cookie recipeIdToken

---

http://localhost:3000/api/groceries
--method: POST
--body: name, expDate - yyyy-mm-dd, amount, user

http://localhost:3000/api/groceries
--method: GET
--query-params: user

http://localhost:3000/api/groceries/:id
--method: DELETE
--params: id

http://localhost:3000/api/groceries/:id
--method: PUT
--body: name, expDate - yyyy-mm-dd, amount
--params: id

---

http://localhost:3000/api/recipes
--method: POST
--body: title, subtitle, groceries-array, workflow-array, time-number of minutes, difficulty-number 0-5, user

http://localhost:3000/api/recipes
--method: GET
--PUBLIC ROUTE

http://localhost:3000/api/recipes/:id
--method: DELETE
--params: id

http://localhost:3000/api/recipes/:id
--method: PUT
--params: id
--body: title, subtitle, groceries-array, workflow-array, time-number of minutes, difficulty-number 0-5,

http://localhost:3000/api/recipes-me
--method: GET
--query-params: user
