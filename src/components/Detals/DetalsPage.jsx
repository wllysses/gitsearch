import styled from "styled-components"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { users, repositories } from "../../services/api"
import Loading from "../Loading/Loading"
import ScrollToTop from "react-scroll-to-top";
import Fab from '@mui/material/Fab';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const DetalsPage = () => {

    const { login } = useParams()
    const [data, setData] = useState({})
    const [repos, setRepos] = useState([])

    useEffect(() => {
        async function fetchData() {
            const getUser = await users(login)
            const getRepositories = await repositories(login)
            setData(getUser)
            setRepos(getRepositories)
        }
        
        setTimeout(fetchData, 1000)
    }, [])

    return (
        <Container>
            {
                Object.keys(data).length == 0 ? <Loading /> :
            <>
                <Header className="animate__animated animate__fadeInDown">
                    <div className="userPersonalData">
                        <Link to="/">
                            <Fab color="danger" aria-label="add" title="Go back">
                                <ArrowBackIosNewIcon />
                            </Fab>
                        </Link>
                        <img src={data.avatar_url} alt={data.login} className="userAvatar" />
                        <div>
                            <h2>{data.name ?? 'O usuário não possui nome cadastrado.'}</h2>
                            <span>{data.bio ?? 'O usuário não possui bio cadastrada.'}</span>
                        </div>
                    </div>
                    <div className="userSocialInfo">
                        <div className="followers">
                            <h2>👥Seguidores</h2>
                            <span>{data.followers}</span>
                        </div>
                        <div className="following">
                            <h2>👥Seguindo</h2>
                            <span>{data.following}</span>
                        </div>
                        <div className="repositories">
                            <h2>📂Repositórios</h2>
                            <span>{data.public_repos}</span>
                        </div>
                    </div>
                </Header>
                <List>
                        {
                            repos.map((repo, index) => {
                                return (
                                    <ListItem key={index} className="animate__animated animate__fadeInUp">
                                        <a href={repo.html_url} target="_blank">{repo.name}</a>
                                            <div className="repositories-stats">
                                                <div>
                                                    <i className="fa-solid fa-code-fork"></i> {repo.forks_count}
                                                </div>
                                                <div>
                                                    <i className="fa-solid fa-star"></i> {repo.stargazers_count}
                                                </div>
                                                <div>
                                                    <i className="fa-solid fa-eye"></i> {repo.watchers_count}
                                                </div>
                                                <div>
                                                    <i className="fa-solid fa-code"></i> {repo.language}
                                                </div>
                                            </div>
                                    </ListItem>
                                )
                            })
                        }
                </List>
            </>
            }
            <ScrollToTop smooth />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`

const Header = styled.header`
    width: 100%;
    min-height: 200px;
    background-color: #7c7bff;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 50px;
    padding: 50px;
    font-family: 'Roboto', sans-serif;
    color: white;
    box-shadow: 0 3px 6px #0000004e;

    @media(max-width: 850px) {
        flex-direction: column;
        text-align: center;
    }

    .userPersonalData {
        display: flex;
        align-items: center;
        gap: 20px;

        @media(max-width: 485px) {
            flex-direction: column;
        }
    }

    .userAvatar {
        max-width: 20%;
        border-radius: 50%;
        border: 3px solid white;
    }

    .userSocialInfo {
        display: flex;
        gap: 30px;
        text-align: center;

        h2 {
            font-weight: 700;
        }

        span {
            font-size: 2rem;
        }

        @media(max-width: 485px) {
            flex-direction: column;
        }
    }
`

const List = styled.ul`
    max-width: 80%;
    width: 100%;
    min-height: 600px;
    margin: 1rem auto;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`

const ListItem = styled.li`
    max-width: 300px;
    border: 3px solid #7c7bff;
    border-radius: 5px;
    width: 100%;
    min-height: 150px;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;

    &:hover {
        transform: scale(1.05) !important;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .206);
    }

    a {
        font-size: 1.2rem;
        color: #7c7bff;
        font-weight: 700;
    }

    .repositories-stats {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 10px;
        color: #7c7bff;
    }
`