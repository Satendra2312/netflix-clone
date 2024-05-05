import React from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import vid from '../assets/vid.mp4';
import { useNavigate } from 'react-router-dom';


export default function Player() {
    const navigate = useNavigate();
    return (
        <Container>
            <div className="player">
                <div className="back">
                    <BsArrowLeft onClick={() => navigate(-1)} />
                </div>
                <video src={vid} autoPlay loop controls muted></video>
            </div>
        </Container>
    )
}
const Container = styled.div`
.player{
    width:100vw;
    height:100vh;
    video{
        width:100vw;
        height:100vh;
        object-fit:cover;
    }
    .back{
        position:absolute;
        top:2rem;
        z-index:1;
        svg{
            font-size:2rem;
            cursor:pointer;
        }
    }
}
`;