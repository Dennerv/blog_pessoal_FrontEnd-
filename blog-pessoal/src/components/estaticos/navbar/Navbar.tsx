import React from "react";
/*import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'*/
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import { color } from "@mui/system";
import { useHistory } from 'react-router-dom';
import useLocalStorage from "react-use-localstorage";

import './Navbar.css'


function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        history.push('/login')

    }

    return (
        <>

            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            Rafael                         </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to= "/formularioTema" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                        </Link>
                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                    </Box>

                </Toolbar>
            </AppBar>

        </>
    );
}
export default Navbar;

/*import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';*/




