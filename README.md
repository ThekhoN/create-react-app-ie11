## Running CRA on ie11.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Steps:

1. `npx create-react-app my-app` and `cd my-app`

2. Install react-app-polyfill<br>
  `npm i react-app-polyfill`
  
3. Import `react-app-polyfill/ie11` at the TOP of index.js<br>
  `import 'react-app-polyfill/ie11'`

 
Despite, all this, if IE11 continues to show the dreaded,
```
SCRIPT1002: Syntax error
0.chunk.js (15,34)
SCRIPT1002: Syntax error
main.chunk.js (280,62)
```
Try running `npm cache clean --force`


 
 
 
 
