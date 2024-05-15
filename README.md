
## Create a new React app using Vite
React has two ways to create an app. 
-Create React App (CRA)
-Vite (This is much faster and gives smaller bundle sizes)

`npm create vite@4.1.0`  (you could install latest version alternatively)


`cd [projectname]`

`npm install` or `npm i` (to install all the third-party libraries)

`npm run dev` (run the web server)



## Folder structure
- node_modules (where third-party libraries like react and others are installed)
- public (where the public assets of the app exists, like images, video files etc)
- src (where the source code of the app exists)

- index.html (the main html file of the app)
       this contains the root div which is the container for the app
- package.json (where the app details and dependencies are listed)
- tsconfig.json (where the typescript configurations are set, on how to compile the typescript files to javascript)



##
Vite is a tool that provides instant server start, hot module replacement, rich features, optimized build, and many more. It is a modern build tool that is much faster than Create React App (CRA).
Whenever you make changes to the code, the changes are reflected instantly in the browser without the need to refresh the browser. This is called hot module replacement and it is a feature of Vite.



## Install Bootstrap
`npm i bootstrap`

or 

`npm i bootstrap@5.2.3` (to install a specific version)

https://youtu.be/SqcY0GlETPk?si=3GeurUXVQEWXpqYl


##
Use React Dev Tools to inspect the React components and their states. This is a browser extension that helps you to debug the React components and their states. You can see the props, state, and other details of the components using this tool.


## Shortcut to generate component template on creation
Install the ES7 React/Redux/GraphQL/React-Native snippets extension in VS Code. 
Then after creating a component tsx file, use this command:
`rafce` (React Arrow Function Component with export)