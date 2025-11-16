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
- GPT search Open api key
- gpt search api call
- fetched gptmoviedsuggestions form tmdb 
- created gpt slice and added data
- reused movie list comp to make movie suggestion conatiner
- memoization
- added .env file
- adding .env to gitignore
- made our site responsive



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
    - on clicking when i click on search it should call gpt api and get the results
    - setup openai by installing openai using npm install --save openai and craete a file and add boilerplate code (check its github repo) and export it - this will give you access to some of the default functions
    - useref for seacrhtext and make an api call to get movie results
    - we will get an error on the page - open ai will warn you that you are calling open ai api from frontend calling from client side not server side because my secret an be leaked/compromised. these things should be done form node/server. to continue from client side there is flag we need to allow in openai in openai.js-dangerouslyAllowBrowser
    - if we type in the the text like funny indian retro movies on chatgpt it will give us many information. we dont want that we only want name of the movies
    - so pass a gpt queries in which we we will have actual text like ------ Act as a movie recommendation system and suggest some movies based on the following query
    - we got the result in the same way. but right now we dont have paid version of open ai key so in our case it is giving us error
    - lets try to search for these movies in Tmdb website using search movie api and we searched for that movies and we got the movie response
    - const searchMovieTmdb = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&page=1`, API_OPTIONS)
        const json = await data?.json()
        return json.results;
    }
    this will take some time to execute as it is an async function
     gptMovies?.map(() => {
            searchMovieTmdb()
        })
        in 
        const handleGptSearchClick = async () => {
        const gptQuery = "Act as a movie recommendation system and suggest some movies based on the following query: " + searchText.current.value + ". only give me names of 5 movies, comma separated like the example given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya";
        const gptResults = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: gptQuery }],
        });
        if (!gptResults?.choices) //TODO: show some error to user
            console.log(gptResults?.choices?.[0]?.message?.content);
        //Andaz Apna Apna, DDLJ, 3 Idiots, Munna Bhai MBBS, PK
        const gptMovies = gptResults?.choices?.[0]?.message?.content.split(','); //this will give array of movie names
        //["Andaz Apna Apna", "DDLJ", "3 Idiots", "Munna Bhai MBBS", "PK"]

        //For each movie i will search TMDB APi
        //search for each movie in tmdb api
        gptMovies?.map(() => {
            searchMovieTmdb()
        })

    }

    will not give us the results as that is an async fucntion and search movie will be called 5 times for 5 movies this is normal js not react. these 5 api calls will not wait for one to finish and then start other it will make 5 api calls so 
    searchMovieTmdb will result promise not the result. it will be an array of 5 promises. now how will i get data from this promise array. tehre is a function called promise.all
    // we got the results after few seconds in array 
    //for amar, akbar,anthony we got 3 results one hindi, malyalam, telugu
    //for padosan we got 4 results-padosan , professor ki padosan, nayee padosan, padosan 1968
    //tmdbMovieResults = [[{},{},{}], [{},{}], [{},{},{},{}], [{},{}], [{}]]// it has given me lot of movies
    //lets show all movies, below the search bar
    now push all teh movies to store
    push it in gptslice, addgptMovies dispatch an action from gptsearchbar
    lets add search results as well
    dispatch(addGptMovieResult({movieName: gptMovies, movieResults: tmdbMovieResults}));
    so we now have movienames and moviesresults in our store in gptslice as movieNames and movieResulyts
    we can extract that in hook the extracting language
    let us now build gptmoviesugggestons
    {movieNames.map((movieName, index) => {
            return (
                <MovieList key={movieName} title = {movieName} movies = {movieResults[index]}/>
            )
    })}
    for wach moviename we will have moviereults at the same place because it is array of promises and to resolve this we have used Promise.all.
    so by using this everything is working fine horizonatla scroll as well and moviename and its results
    Movieslist is MODULAR- we are reusing it
    do error handling in moviecard if posterpath is not present then return from tehre because in some case posterpath was not there and it was breaking means poster was not coming
    we have used reusablility now
    now give some opacity to the background the bakground image is upto the screen only therefore it is looking ugly below so give background image fixed position
    now search for horror romantic indian movies - raaz, bhootnath, talaaash


    one important thing to note here is that when i got to home page and come back to gpt search the results are still there this is because my data is persistent in my redux store
    so if we dont want data to persist clear the slice and set it as null movieNames and movieresults
    we can even expand more on clcking the card we can show description of the movie actors and all

    we will now see how we can hide apikey for exmaple open ai key. we were dangerously setting so the best way to keep is in .env file - it is kind of setting whatever secret information you have we keep in this env file. take openapi_key and apste it in .env file. we have to add REACT_APP in .env it is imp to add react_app in front of key otherwise react wont recognise it.
    let us also store our tmdb key. so whatever sensitive information we have store it in .env file because when we craete  bundle this constant file will bw in bundle and hacker can go to your website and can hack keys. now we will not use these keys directly in constant. how will i use then process.env.key_name like process.env.REACT_APP_TMDB_KEY. now when we craete build process.env.key_name will be visible to hacker
    read on teh internet why do we use this- this is not related to react this is something related to basic hosting, basic deployment , basic security of our keys
    our app is not secure there so many thing we can do it make it secure
    if i check my github all code was going to github hooks, comp even constants file. we should not push .env file to github it should be added in gitignore so it will not be psuhed to github
    this is similar to setting env variables in windows
    we will need this environemnet varia ble in production so every hosting plaform has its own way of setting environment variables sometimes its pais. firebase - its paid
    otehrwise a lot of security things happen from be - best way for security reasons because fe is client side. you psuh all the code to client side and it is not 100% secure when you connect it with be be maintains all securiity keys -that is the best security we can have
    restart the server after making env file changes - everything is working fine
    the last thing is lets make our project responsive

    MEMOIZATION
    when we got to chatgpt page and again come back to homepage it is making api call again then again after comin back. why it is making pai call because everytime my compoennt loads it makes an api call and updates teh store when i go to gpt page and then come back to homepage i see data was already there for movies the why to call apis again by using memoization
    got tohook we are fetching movies and we are adding the trailer video suppose if my store has already trailer video then why to fetch again, if my store already has now playing movies should i refetch it. no
    so this concept is known as memoization. check whether there is already data present on my store then dont make an api call else make an api call. it will save a lot of api calls . suppose a lot of 1000 users are using the platform we can save a lot of api calls
    in case of useNowPlayingMovies
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)
    if nowplayingmovies is there then dont make an api call
    useEffect(() => {
        if(!nowPlayingMovies) getNowPlayingMovies()
        or 
        !nowPlayingMovies &&  getNowPlayingMovies()
    }, [])
    similarly fo otehr hooks
    if you dont want to spend on open ai apis you can ask the user to enter thier api key and use the websote in that case you need to replace the process.env.api_key to thier api key 
    these 3-4 lines would save a lot of api calls - vvvv imp optimization

    we can make folder indise compoennts called gpt and put all gpt related stuff inside it and make sure to change routing also
    inside browse folder we can put browse things, login folder-login things
    similarly fo rutils we can craete store folder and put all redux slices in it
    lets make our website responsive
    bg-black (will take up for phones small) sm:bg-black-900(tab) md:bg-green-900(desktop)
    change react app in index.html, add you own favicon
