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
- fetch from TMBD movies
- BugFix: Signup user display name and profile picture update
- BugFix: If the user is not logged in redirect /browse to login page and vice versa
- Unsubscibed to the onauthstatechanged callback
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing list
- Custom Hook for Now Playing Movies
- Create Movieslice
- Upadte Store With Movies Data
- Planning for main container and secondary container
- Fetch data for trailer video
- update store with trailer video data
- embed the youtube video and make it autoplay and mute
- added tialwind classes to make maincontainer look good
- build secondary component
- build movielist, movied card
- tmdb image cdn url
- made brosepage amazing with tailwind css
- usepopularmovies custom hook
- GPT Search Page
- Gpt Search Bar
- (BONUS) Multi language feature in our app


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



    Episode 2 of Netflix GPT
    - Now when i am signed out i am still able to access /browse page
    - similarly if i am logged in i should not go to the login page
    - why this is happening is we are not chcking auth on browse page that if the user is present or not(user accesstoken is not there)
    - we already have onauthstatechange - kind of event listner which checks on very render of the page. can use this to check auth state and setting up our store. 
    - if the user is logs in or logs out we should update the store, ideally we should naviagte here but we will get error because naviagte should be used inside routerprovider
    - so lets refactor our code, i should add my that useffect where i can get accesss to routerprovider
    - i should keep that in place where i can get access easily i can put in HEader component because header will always be there so put that useeffect from body .js to header,js - another bug fix
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            } else {
                // User is signed out
                // ...
                dispatch(removeUser())
            }
        });
    }, [])
    - my header is now inside routerprovider so now it will work
    - now navigation i dont need to do it from login page now i can do that from header.js so now i can put all my routing logic in header.js
    - it will handle if the user is logged in redirect the user to /browse else redirect back to login page
    - so out navigate is only in header,js now
    - now i dont need to do explicit redirection froms ign out as well because onauthstatechange will automatically be called and redirect accrodingly
    - this will solve my issue also
    - one more thing now in header.js we have useeffect onauthstatechanged-whenever my header loads it will keep attaching event listeners so unsubscribe to this when the component unmounts so how will i unsubscribe - onauthstatechangereturns us an unsubscribe function - read firebase documentation
    return () => unsubscibe()
    - for string always use constants like photourl. i should not haardcode url suppose i want toc hange logo i can do that form 1 place
    - constanfiles-all hardcoded strings, all hardcoded values, all hardcoded urls
    - start building browse page
    - use TMDB for apis - need tmdb access token to authorize. we need to everytime pass this options   
    - get nowplaying movies using fetch in browse page. make that function ana async function because we will be doing a fetch request inside it
    - how will i call the api. i will call the api in useeffect with empty dependency array - so that i can call it only once
    - now i will be able to see 2 console.logs inside my console. everything happens 2 time why.api call is made 2 times , events are called 2 times. this basically happens because of react strict mode
    - in index.js we wrapped our project in React.StrictMode. If i remove this react.strict mode it will my api only once
    - it just happens in our local, in case of production it will not called twice
    - the reason why it happens twice because react does extra rendering of your components to check for some inconsistencies in your calls. I tonly happens in development mode - it will throw an error if there is any inconsitency in your rendering cycle
    - since we got the data we need to add them in store
    - create one more slice movie slice
    - check if movies has been added to store. we can see movies slice in store this means we have successfully added slice in our store
    - our browse component is looking ugly now it should only have rendering logic so extract this code outside
    - lets us create a hook to get the data and return it to a compoennt
    - make a afolder clled hooks - hooks always start from use - what is a ahook at the end of the day it is normal js function. now my browse component looks more clean
    - lets start building our browse page - background video then movies
    - lets make a plan - 2 parts -one is playing, second-movie recommendation where movies are shown
    - let us create 2 containers now - MainCOntainer, secondarycontainer
    - now what do i need in mainconatienr - movie, title, description- lets get data from selector
    - i need only one movie to render in maincontainer
    - so if i take first movie from movies comp my code will break because first time my code is executed my nowplaying movies is null and we are trying to fetch its fisrt elem.so check if movies === null the return from that comp do not render anything
    - now we have made videotitle component i need to make now videobackground component for that i need to have traileer for the movie and we dont have that in nowplaying movies detail. SO in TMDB Movies we have movies -  we can get trailor using movie_id. it will give all videos related to that movie
    - i can use tmdb platform to call api - we got videos related to that movies(basically it will container songs of the movie, treasure of the movie). we are only concerned about movie trailer so the respponse has type: clip, trailer, teasure so i am concerned about trailer that key is basically you tube key and this will help to fetch the video form youtube. make an api call this comp will need movie id
    - filter data basis the trailer. now if the filtered results has many movies then take the first trailer else take video first video
    - now render the video it has you tube key
    - get the video from youtube by using share option which gives option of iframe. it is giving error of frameborder which is not accptable in jsx camel case is allwed so do it in camel case
    - there are 2 ways to embed you tube video into our porject 
    - make a state
        const [trailerId, setTrailerId] = useState(null)
        and settrailerid in getmovievideos  and change trailerId dynamic
        src={"https://www.youtube.com/embed/"+ trailerId}
    - but i can keep this information in my redux store
    - let us put trailer in our store- add trailer in movies lsice
    - now i will make a custom hook because it is lookin very ugly comp should have only rendering logic
    - this is known as MODULAR CODING -SEPARATION OF CONCERNS, help in testing
    - now i wnat to make width of video to full width
    - have given full w-screen to iframe and its parent div but to maintian its expect ratio we need to give aspect-video
    - now i want to have title above the video so make title as absolute. give w-screen and aspect-video to videotitle as well it will cover whole background/whole screen
    - now i want to autoplay the youtube video -  add autoplay =1 and mute=1 in iframe src
    - now lets make the seocnd container
    - let us build movie list - now for each entry i need to make a moviecard for that i have image path but where it is hoisted ineed to check that on tmdb website from guides-images - basics
    - keep in constant file
    - similar to now playing we can add trending and all as well
    - for secondary container there are 2 divs 
    - given black bg to parent div to match deisgn and child div negative margin to move things up a little 
    - now fetch movies for playing, trending - get api from tmdb
    - similary make hooks for others as well
    - next we will be using gpt apis we will make the website responsive as well
    - Introduction to GPT - sometime i dont know wich movie to watch i type in the search bar and gpt apis give me suggestions  
    - chatgpt is an interface which is using gpt apis to give you suggestions and apis are built by open ai/gpt apis
    - we will toggle the component on click of gpt button 
    - we will store this information in store
    - what should a gpt search have - it should have saerchbar and moviesuggestions
    - ideally every text should come from constant file
    - because in akshay says in paytm we have diff languages english, hindi and so on 
    - language based websites are used widely 
    - lets store language as well
    - let build a dropdown for language, so now when our language change our page should change
    - let us store language- we can store it in user or app slice
    - user has info about firebase so lets not use that lets make another slice for this app based configuration
    - never push console.logs to production
    - so we have made our website multilingual