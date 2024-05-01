import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from "../utils/firebase-config";

export default function Signup() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const handleSignIn = async () => {
        try {
            const { email, password } = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
        } catch (err) {
            console.log(err);
        }
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    });

    return (
        <Container showPassword={showPassword}>
            <BackgroundImage />
            <div className="content">
                <Header login />
                <div className="body flex column a-center j-center">
                    <div className="text flex column">
                        <h1>Unlimited Movies, TV shows and more</h1>
                        <h4>Watch anywhere, Cancel  anytime.</h4>
                        <h6>Ready to watch? Enter your email to create  or restart your membership.</h6>
                    </div>
                    <div className="form">
                        <input type="text" placeholder="Email" name='email' value={formValues.email} onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} />
                        {
                            showPassword && (<input type="password" placeholder="Password" name='password' value={formValues.password} onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} />
                            )}
                        {
                            !showPassword && (<button onClick={() => setShowPassword(true)}>Get started</button>
                            )}
                    </div>
                    <button onClick={handleSignIn}>Sign Up</button>
                </div>
            </div>
        </Container>
    )
}
const Container = styled.div`
position:relative;
.content{
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0, 0,0.5);
    width:100vw;
    height:100vh;
    display:grid;
    grid-template-rows:15vh 85vh;
   .body{
        gap:1rem;
       .text{
            gap:1rem;
            text-align:center;
            font-size:2rem;
        }
        h1{
            padding:0. 25rem;
        }
    } 
   .form{
        display:grid;
        grid-template-columns:${({ showPassword }) => showPassword ? "1fr 1fr" : "2fr 1fr"};
        width:60%;
        input{
            color:black;
            border:none;
            padding:1.5rem;
            font-size:1.2rem;
             border:1px solid #e0e0e0 ;
             &:focus{
                outline:none;
             }
        }
        button{
            padding:0.5rem 1rem;
            background-color:#e50914;
            border:none;
            cursor:pointer;
            color:white;
            font-weight:bolder;
            font-size:1.05rem;
        }
    }
    button{
        padding:0.5rem 1rem;
        background-color:#e50914;
        border:none;
        cursor:pointer;
        color:white;
        font-weight:bolder;
        font-size:1.05rem;
        border-radius:0.05rem;
    }
}`;