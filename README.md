This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Steps:

1. Install react-app-polyfill<br>
  `npm i react-app-polyfill`
  
2. Import `react-app-polyfill/ie11` at the TOP of index.js<br>
  `import 'react-app-polyfill/ie11'`
 
3. Delete .cache in /node_modules
 
4. Add ie11 meta tag in index.html (in public folder)<br>
 `<meta http-equiv="X-UA-Compatible" content="IE=11">`
 
Restart CRA - `yarn start`
 
 
 
 
 
