import styled from "styled-components"
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material';

export const User = (props) => {
    return (
        <Link style={{textDecoration: 'none'}} to={`/Detals/${props.userData.login}`}>
            <UserWrapper>
                <img src={props.userData.avatar_url} alt={props.userData.name} id="userAvatar"/>
                <div>
                    <Typography variant="h2" style={{fontSize: 30, maxWidth: '300px'}}>{props.userData.name ?? 'O usuário não possuo nome cadastrado.'}</Typography>
                    <Typography variant="h5" style={{fontSize: 16, maxWidth: '300px'}}>{props.userData.bio ?? 'O usuário não possui bio cadastrada.'}</Typography>
                </div>
            </UserWrapper>
        </Link>
    )
}

const UserWrapper = styled.div`
    max-width: 500px;
    width: 100%;
    min-height: 150px;
    border: 2px solid white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    color: white;
    gap: 20px;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    @media(max-width: 950px) {
        flex-direction: column;
        text-align: center;
    }

    #userAvatar {
        max-width: 20%;
        border-radius: 50%;
        border: 2px solid white;
    }

    &:hover {
        background-color: white;
        color: #7C7BFF
    }
`