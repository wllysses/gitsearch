import { Wrapper } from "../Apresentation/Apresentation"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LoadingButton from '@mui/lab/LoadingButton'
import { useState } from 'react'
import { User } from '../User/User'
import { users } from "../../services/api";


export const Search = () => {

    const [input, setInput] = useState('')
    const [user, setUser] = useState({})

    function getUser(e) {
        e.preventDefault()

        if(input == '') {
            alert('Preenchimento obrigatório do campo.')
            return
        }
        
        setTimeout(() => {
            users(input).then(response => {
                if(response.message == 'Not Found') {
                    alert('Este usuário não existe. Tente novamente.')
                    return
                }
    
                setUser(response)
            })
            .catch(err => {
                console.log('error: ' + err)
            })

            setLoading(false)
        }, 1000)
        
        handleClick()
    }

    const [loading, setLoading] = useState(false);
    function handleClick() {
        setLoading(!loading);
    }

    return (
        <Wrapper 
        style={{
        backgroundColor: "#7C7BFF"
        }}
        className="animate__animated animate__fadeInUp"
        >
            <Typography variant="h2" color="white">Encontre o seu perfil</Typography>
            <Box
            component="form"
            onSubmit={getUser}
            sx={{
                    width: 500,
                    maxWidth: '100%'
            }}
            >
                <TextField 
                id="filled-basic" 
                label="Pesquisar perfil" 
                variant="filled"
                fullWidth={true}
                color="info"
                style={{marginBottom: 15, backgroundColor:'#fff'}} 
                onChange={(e) => {setInput(e.target.value)}}
                />

                <LoadingButton
                onClick={getUser}
                endIcon={<SearchIcon />}
                loading={loading}
                loadingPosition="end"
                variant="contained"
                fullWidth={true}
                color="inherit"
                >
                    Buscar
                </LoadingButton>
            </Box>

            {
                Object.keys(user).length > 0 ? <User userData={user}/> : <></>
            }
        </Wrapper>
    )
}