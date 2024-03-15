import './LendingPage.css';
import { Link } from 'react-router-dom'

// img import
// import forbes from "../../assets/LendingPage_Img/forbes.avif";
// import inc from "../../assets/LendingPage_Img/inc.avif";
// import ENTREPRENEUR from "../../assets/LendingPage_Img/ENTREPRENEUR.avif";
// import Verge from "../../assets/LendingPage_Img/The Verge.avif";
// import Well from "../../assets/LendingPage_Img/WELL.avif";

import letter from "../../assets/LendingPage_Img/letter.png";
import update from "../../assets/LendingPage_Img/update.png";
import clipboard from "../../assets/LendingPage_Img/clipboard.png";
// import content from "../../assets/LendingPage_Img/content.avif"

export default function LendingPage() {
    return (
        <div>
            <div className='main_con'>
                <div className='con'>
                    <h1>Tame your work<br/>organize your life</h1>
                    <p>Remember everything and tackle any project with your notes,<br/>tasks, and schedule all in one place.</p>
                    <div>
                        <button><a href='/sign-in'>Sign In</a></button>
                        <button><a href='/sign-up'>Sign Up</a></button>
                    </div>
                    <br/>
                    
                </div>
            </div>
            <div className='main-card'>
                {/* <div className='card_title'>
                    <h1>What we function</h1>
                </div> */}
                <div className='main_fun'>
                    <div className='fun'>
                        <img src={letter} className='fun_img'></img>
                        <h4>Flexible Editing</h4>
                        <p>Edit, format, and customize your notes for precision and clarity. Collaborate with others on notes and see changes in real time. Edit and access your notes seamlessly across all your devices.</p>
                    </div>
                    <div className='fun'>
                        <img src={update} className='fun_img'></img>
                        <h4>Manage Passwords </h4>
                        <p>NoteVault's password manager feature simplifies access to a multitude of platforms with a single, secure password. Users can securely store and manage their login credentials, enhancing security and accessibility.</p>
                    </div>
                    <div className='fun'>
                        <img src={clipboard} className='fun_img'></img>
                        <h4>Sync Across Devices</h4>
                        <p>Edit and access your notes seamlessly across all your devices.</p>
                    </div>

                </div>
            </div>

            <div className='main_content'>
                <div className='content'>
                    <div className='copyright'>
                        <p>© 2024 NoteVault Corporation. All rights reserved.</p>
                    </div>
                    {/* <div className='info'>
                        <p>Cookie Preferences</p>
                        <p>Security</p>
                        <p>Legal</p>
                        <p>privacy</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}