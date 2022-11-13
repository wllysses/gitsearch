import styled from "styled-components"
import githubLogo from '../../assets/github-logo.webp'
import { Typography } from '@mui/material';

export const Apresentation = () => {
    return (
        <Wrapper className="animate__animated animate__fadeInDown">
            <img src={githubLogo} alt="Github logo" />
            <Typography
            variant="h1"
            color="#bab9f8"
                >Git<span style={{color: '#7C7BFF'}}>Search</span>
            </Typography>
            <Typography variant="body1">Busque pelo seu usuário e tenha acesso as principais informações do seu perfil.</Typography>
        </Wrapper>
    )
}

export const Wrapper = styled.section`
    width: 50%;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0 50px;

    img {
        max-width: 35%;
    }

    p {
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        text-align: center;
        color: #7C7BFF;
    }

    @media(max-width: 875px) {
      width: 100%;
      height: 50vh;
      font-size: 1rem;

      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 1rem;
      }

      h2 {
        font-size: 2rem;
      }
    }
`