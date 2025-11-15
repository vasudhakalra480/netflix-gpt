import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../images/logo.svg';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

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

  return (
    <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between w-screen'>
      <Logo className='w-28 fill-red-700' />
      {user &&
        <div className='flex p-2'>
          <img className="w-10" src={user?.photoURL} alt="usericon" />
          {/* <img className="w-10" src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/c4/logout-31dva2zl3l9ao92pwnmgnt.png/logout-6bjs3s3fnciv7c0ye52y3l.png?_a=DATAg1AAZAA0" alt="usericon"/>  */}
          <button className='font-bold text-white ml-2' onClick={handleSignOut}>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header