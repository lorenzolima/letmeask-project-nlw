import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Questions and Answers" />
                <strong>Create live Q&amp;A rooms</strong>
                <p>Answer the questions of your audience in real time</p>
            </aside>
            
            <main>
                <div>
                    <img src={logoImg} alt="Letmeask" />
                    <button>
                        <img src={googleIconImg} alt="Google logo" />
                        Create your room with Google
                    </button>
                    <div>or join</div>
                    <form>
                        <input type="text" placeholder='Type a room code'/>
                        <button type='submit'>Join in the room</button>
                    </form>
                </div>
            </main>
        </div>

    )
}