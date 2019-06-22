# Todo web app

An web "to-do" application. Made for get better at React

# What I learned

- Developed a user interface using React library
- UI is made of few functional components with state management using hooks
- Implemented functionality to the UI: addItem, completeTodo, removeTodo
- Using state in App.js component
- Styling using: inline styling, styling using variable and also with style contained in function
- Using Router(HashRouter) to get basic SPA functionality

# Instructions

Requires Node.js version 11.12.0, npm version 6.9.0

Clone repo:

```
git clone https://github.com/michal-codes/react-hooks-todo.git
```

Cd into project folder and run:

```
npm install
```

To start json-server, open project folder in new terminal window an run command:

```
npm run json:server
```

Back to other terminal window with open project folder an run:

```
npm start
```

The app runs in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

---

---

# Todo

- Add some final touches.

# Done already

- Make a version with request to json-server whoch is in dependencies
- Separate todos into two components into Todos and TodoItem. .map() is in Todos component on passed todos as props
- Make a version with request to JSON placeholder
