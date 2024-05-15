
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
