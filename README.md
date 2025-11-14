#github profile on vasudhakalra123@gmail.com
#firebase on vasudhakalra84@gmail.com   

# Netflix GPT

- Create React App  using ngx create-react-app
- Configured TailwindCSS - run comnds for tailwind css and create config file for tailwind css. import in index.css
- Header
- Routing of App
- Login Form
- Signup Form
- Form Validation
- useRef Hook
- firebase setup
- deploying our app to production
- create sign up user account
- implement sign up user api
- created redux store with user slice
- implemented signout
- update profile


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
        - proceed and write commands given on github - git remote....to link to local repo
        - after executing the commands the code is pushed already

- make components folders - and start writing in it (/src/components)
- make utils folder - utilities - constants, shared things etc (src/utils)
- make Login.js -write rafce(react arrow function component export) - hit enter -it will create a comp and export also (make sure it is js or jsx file)
- create Header.js
- create Body.js
- create Browse.js
- remove app.css from folder tructure as well as from App.js
- Let us setup routing
    -  npm i -D react-router-dom
    - go to body and craete rounting using createBrowserRouter - body.js (const app router = createbrowserrouter) to work -'/' then go to BodyComponent, /browse got to browse component
    - wrap component in ROuterProvider - body.js (<routerprovider router = {router}/>)
    - we got an error showing we have router inside router because i have body inside my body we wrote something like 

    const approuter = createBrowserRouter({
        path: "/",
        element: <Body> // this is giving me the error it will go in an infinite loop change it to <Login />
    })
    - change header - import it in body
    - go to tnetwork tab to download the netflix logo -go to img - preview, right click and open in new tab it will download 
    - for now copy logo as link address
    - bg-gradient-to-b from-black gave some shadow to logo it is now visible
    - bg transparency - bg-opecity-80(for input boxes)
    - can we convert singin form to signup form
    - usestate to toggel sign in sign up state for button, sing in/sign up text and extra fields inc ase sign up form

# Form Validation
    - form use to have many fields - use formik for validations and error handling (good library)
    - how to show error messagea and input fields

# useRef - lets you refrence a value that is not needed for rendering
    - create a separate file to validate
    - how will i get values of email and password
    - either you can create state variables and bind those state variables with the inputs or 
    - useRef for those input boxes - useRef() comes into picture - this ref is created by react, how to write now
        const email = useRef(null) - initial values, similarly for password - see login page
    - gives ref to the input in the form of an object (useRef) - gives value in (email.current.value)
    - clicking on sign in buttton is refreshing the page. why? because when you click on this button it is trying to submit the form trying to call onSubmit method of form button
     - <form onSubmit>
     - use e.preventDefualt() to avoid submitting the form
     - useref is used to ref a field 
     - usestate - to store error message
     - create validate.js for validation in utils folder- add validation for email and password

# Let us build Authentication
    - we will use google firebase for authentication
    - go to firebase - create a project, continue, create google analytics for project - select default account fro firebase - create  - we will use this for authentication
    - create a web project because we are building web app
    - there is an option of also set firebase hoisting for this app - this is very important - we can deploy our appication on firebase - register
    - npm install firebase
    - we will need config to connect to our database to connect to firebase application
    - create firebase.js in utils
    - enable authentication in firebase - search for authentication in firebase project
    - find where authentication - click on get started- it will give you sing in method - select emailid/password
    - now i can register users in my app - it will ocme in users tab
    - lets deploy our app
    - to deploy we need to run comnd - npm install -g firebase-tools
    - firebase login will login into the firebase, if it is already logged in on browser it will say already logged in
    - do firebase init - initialising firebase - will create a firebase config for us
    - be careful for hoisiting  
    - there are 2 types of hoisting - as soon as you push it will automatically deploy
        - manual - firebas edeploy whenever yourun it
    - select and it will ask new project or exsiting project select existing project and select Netflix-gpt
    - What do you want to use as your public directory? - build folder (when we used parcel all the bundled files used to go to dist foldder, similarly for produccction we have build folder)
    - Configure as a single-page app (rewrite all urls to /index.html) - select No
    - Set up automatic builds and deploys with GitHub - No
    - it created my firebase config

    - run npm run build (create-react-app already gave) - created a prod ready build 
    we already told firebase to deploy using build folder index.html of build folder will have all code of our react app
    - use firbease deploy to deploy -just 3 cmnds and we have deployed our app  - firebase login, firebase init, firebase deploy
    - we can also map our domain to this auto genrated domain name for that we need to purchase a domain name fot that go to hoisitng on firebase and add custom domain name for your proeject and complete the steps

# Authentication reading documentation is a superpower of a developer
    - go to firebase authentication. web - password authentication there is an api called createuserwithemailandpassword use web modular api
    - https://firebase.google.com/docs/auth/web/password-auth#web
    - so const auth = getAuth() is used everywhere in firebase apis so lets do it in central place - firebase.js
    - call api createuserwithemailandpassword and we will be signed up to our app, it gave you the accesstoken , email  uid and so on
    - lets see if the user is registered on firebase or not - you will be able to see user in authentication
    - so when we are signed up we should redirect it to dashboard 
    - lets do login  - it will give you auth token to be set in cookies and browser
    - now once the user signs in or signs up i will be needing the object across my project so i will store it in th eredux store and navigate the user to the browse page
    - try entering a diffrent emial id it will give you error user-not-found

# Let us setup redux store (redux toolkit) now to store user object
    - create store
    - add user slice - name, initialstate, reducers - adduser, removeuser
    - now import userReducer to store
    - provide store to main component i.e Body.js
    - now to store the user detials to the redux store - we need to dispatch an action from sign in with createuserwithemailand password and sign in as well and in cas eof logout as wll, so instead of dispatching action again and again we will use a utility given to us by firebasewhich is known as onAuthStateChange - go to firebas eand see manage users -whenever there is some state change of user logins logouts or signsup use this api - kind of eventlistener will be called autoatically in the above 3 cases
    - in body.js you can write in app.js as well-want to add event only once so use it inside useeffect
    - can get all the details from the user object - uid, email, displayName
    - if i want to do some things on login logout 
    - always use hook on top of the component - hooks should be on top
    - why useffect because i wanted to setup this kind of eventlistner for once - if user signs in if block is executed else othe rpart is executed - handling everything from single place
    - navigate user to browse page when logged in
    - navigate to main page when user signs out
    - you will se an error of using naviagte hook outside <Provider>
    - so i need to take the routing logic outside the body and put it at app level
    - another option is that we can use window.location.href but that is not  a good way so we need to use navigate only
    - second option is move router provider in app
    - third option is that dont navigate it in body, navigate it from some hwre else - do it in login page - we have done this because we have already implemented alot of logic
    - now login using vasudha@gmail.com/Vasudha@1234 - there is already an entry in firebase for this
    - to update displayname refernce it with name and find updateuserprofile api and update the user
    - for signout find signout api on firebase pass auth
    - we will see that phtotourl and dispalyname is not updating we need to diaptch an action after update user as well
    - we will not have updated values in usercredential(not the updated value), so updated value is in auth.currentUser(updated value)
    - we will build movies