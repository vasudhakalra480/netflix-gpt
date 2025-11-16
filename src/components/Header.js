import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../images/logo.svg';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const selectdLang = useSelector((store) => store.config.language);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      navigate('/error');
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate('/browse');
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate('/');
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscibe();
  }, [dispatch, navigate])

  const handleGptSearchClcik = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between w-screen'>
      <Logo className='w-28 fill-red-700' />
      {user &&
        <div className='flex p-2'>
          {showGptSearch &&
            <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange} value={selectdLang}>
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>{language.name}</option>
              ))}
            </select>
          }
          <button className='py-2 px-4 mx-4 my-2 bg-purple-800 rounded-lg text-white' onClick={handleGptSearchClcik}>
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img className="w-10" src={user?.photoURL} alt="usericon" />
          <button className='font-bold text-white ml-2' onClick={handleSignOut}>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header