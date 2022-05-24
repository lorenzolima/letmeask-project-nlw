// Imports
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button';
import '../styles/auth.scss';

// Function
export function Home() {
    const navigate = useNavigate();
    const { user, signInWithGoogle, sessionDisconnect } = useContext(AuthContext);
    /* Now we can modify the value throught the context */

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle();
        }
        
        navigate("/rooms/new", { replace: true });
    }
    /*
    async function handleDisconnect() {
        await sessionDisconnect();

    }
    */

    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Questions and Answers" />
                <strong>Create live Q&amp;A rooms</strong>
                <p>Answer the questions of your audience in real time</p>
            </aside>
            
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className='create-room'>
                        <img src={googleIconImg} alt="Google logo" />
                        Create your room with Google
                    </button>
                    <div className='separator'>or Join in</div>
                    <form>
                        <input type="text" placeholder='Type a room code'/>
                        <Button type='submit'>Join in the room</Button>
                    </form>
                    {/*
                    <button onClick={handleDisconnect} className={user ? 'create-room' : 'create-room disabled'}>
                        Disconnect
                    </button>
                    */}
                </div>
            </main>
        </div>

    )
}

//{`create-room ${user ? '' : 'disable'}`}