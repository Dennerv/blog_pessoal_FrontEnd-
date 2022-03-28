import React from "react";
import { Grid, Paper, Box, Button, Typography } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
<Grid container className="cor caixa"direction="row" justifyContent="center" alignItems="center" >
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px"/>
                </Grid>
                <Grid xs={12} className="postagem">
                    
                </Grid>
            </Grid>
        </>
    );
}

export default Home;