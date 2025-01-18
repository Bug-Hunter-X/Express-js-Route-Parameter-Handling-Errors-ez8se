# Express.js Route Parameter Handling Errors
This repository demonstrates a common error in Express.js route parameter handling and its solution.

## Bug
The bug is in the `/users/:id` route.  If the user ID is not found in the database, a 500 Internal Server Error is thrown instead of the expected 404 Not Found error.  This is because the code lacks proper error handling for when `userData` is null or undefined.  Also, the code is vulnerable to injection attacks if not properly sanitized.

## Solution
The solution includes explicit error handling and input validation to prevent unexpected errors and improve the security of the route.

## How to Run
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `node bug.js` to see the bug.
4. Run `node bugSolution.js` to see the solution.