// Imports
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { auth } from './services/firebase';

import { AuthContextProvider } from './contexts/AuthContext'
// Function
// Note that we'll use the context concept of react, which it can be use to pass information to other components from a component
function App() {
    const [user, setUser] = useState<User>();

        useEffect(() => {
            const verifySub = auth.onAuthStateChanged(user => {
                if (user) {
                    const { displayName, photoURL, uid } = user;
                
                    if (!displayName || !photoURL) {
                        throw new Error('Missing information from Google Account')
                    }
                    setUser({
                        id: uid,
                        name: displayName,
                        avatar: photoURL
                    })
                }
            })

            return () => {
                verifySub();
            }
        },[])

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const auth = getAuth()

        const result = await signInWithPopup(auth, provider)
        if (result.user) {
            const { displayName, photoURL, uid } = result.user;
        
            if (!displayName || !photoURL) {
                throw new Error('Missing information from Google Account.');
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        }
    }

    async function sessionDisconnect() {
        setUser(undefined)
    }

    return (
        <BrowserRouter>
        {/* The elements between de Context Provider, can receive and use the value */}
            <AuthContextProvider value={{user, signInWithGoogle}}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/rooms/new' element={<NewRoom/>}/>
                </Routes>
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;