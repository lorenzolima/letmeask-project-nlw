// Imports
import { useContext } from 'react'
import { Link } from "react-router-dom";

import { AuthContext } from "../App";
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button';
import '../styles/auth.scss';

// Function
export function NewRoom() {
    const { user } = useContext(AuthContext);
    
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
                    <h1>{ user?.name }</h1>
                    <h2>Create a new room</h2>
                    <form>
                        <input type="text" placeholder='Room Name'/>
                        <Button type='submit'>Create a room</Button>
                    </form>
                    <p>Want to enter in a existent room? <Link to="/">Click Here</Link></p>
                </div>
            </main>
        </div>
    )
}