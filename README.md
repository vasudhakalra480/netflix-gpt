# Netflix GPT

- Create React App  using ngx create-react-app
- Configured TailwindCSS
- Header
- Login Form
- Signup Form


# Features
- Login/Sign Up
    - Sign In/ Sign Up Form
    - redirect to Browse Page
- Browser (after authentication)
 - Header
 - Main Movie
    - Trailer in Background
    - Title & Description
    - Movie Suggestions
        - Movie Lists * N
- Netflix GPT
    - Search Bar
    - Movie Suggestions


- Github
    - create a github repository
        - write a name - netflix-gpt
        - proceed and write commands - git remote....to link to local repo
        - after executing the commands the code is pushed already

- make components folders - and start writing in it (/src/components)
- make utils folder - utilities - constants, shared things etc (src/utils)
- make Login.js -write rafce(react arrow function component export) - hit enter -it will create a comp and export also (make sure it is js or jsx file)
- create Header.js
- Let us setup routing
    -  npm intall react-router-dom
    - go to body and craete rounting using createBrowserRouter - body.js (const app router = createbrowserrouter)
    - wrap component in ROuterProvider - body.js (<routerprovider router = {router}/>)
    - we got an error showing we have router inside router because i have body inside my body we wrote something like 

    const approuter = createBrowserRouter({
        path: "/",
        element: <Body> // this is giving me the error it will go in an infinite loop change it to <Login />
    })
    - change header - import it in body
    - go to tnetwork tab -go to img - preview, right click and open in new tab it will download 
    - for now copy logo as link address
    - bg-gradient-to-b from-black gave some shadow to logo it is now visible
    - bg transparency - bg-opecity-80(for input boxes)
    - can we convert singin form to signup form

# Form Validation
    - form use to have many fields - use formik for validations and error handling (good library)