import * as React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/createpost.css';
import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom";


export default function CreatePost() {
    const [profile, setProfile] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const [exp, setExp] = React.useState('');
    const [techs, setTechs] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!profile || !desc || !exp || !techs) {
            toast.error("Please fill out all fields");
            return;
        }

        const data = {
            profile,
            desc,
            exp: parseInt(exp),
            techs: techs.split(',')
        };

        try {
            await axios.post('http://localhost:8080/postpost', data);
            toast.success("Data submitted successfully!");
        } catch (error) {
            toast.error("Error submitting data");
        }
        navigate('/employee/feed');

    };

    return (
        <div class="background">
            <div class="form">
                <div class="title">Add Post  <button class="button-55"><Link to="/">Home</Link></button></div>
                <div class="subtitle">You are now creating job post.</div>
                {/* <div className="App"> */}
                <div className="line"></div>

                <form onSubmit={handleSubmit} class="innerform" >

                    <div class="form__group field">
                        <input type="text" class="form__field" value={profile} placeholder="Profile" name="Profile" id="Profile"
                            onChange={(e) => setProfile(e.target.value)} />
                        <label for="Profile" class="form__label">Profile</label>
                    </div>
                    <div class="form__group field">
                        <input type="input" class="form__field" value={desc}
                            onChange={(e) => setDesc(e.target.value)} placeholder="Description" name="Description" id='Description' />
                        <label for="Description" class="form__label">Description</label>
                    </div>
                    <div class="form__group field">
                        <input type="number"
                            value={exp}
                            onChange={(e) => setExp(e.target.value)} class="form__field" placeholder="Experience (in years)" name="exp" id='exp' />
                        <label for="exp" class="form__label">Experience (in years)</label>
                    </div>
                    <div class="form__group field">
                        <input type="text"
                            value={techs}
                            onChange={(e) => setTechs(e.target.value)} class="form__field" placeholder="Technologies (comma separated):" name="texhs" id='texhs' />
                        <label for="texhs" class="form__label">Technologies (comma separated)</label>
                    </div>

                    <button type="submit" class="submitbutton">Submit</button>
                </form>
                <ToastContainer />
            </div>
        </div >

        // </div>

    );
};

