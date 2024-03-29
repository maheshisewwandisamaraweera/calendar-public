import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import  {ThemeProvider,  createTheme} from "@mui/material/styles";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useState} from "react";
import Stack from "@mui/material/Stack";
import {useNavigate} from "react-router-dom";
import LockOutlined from '@mui/icons-material/LockOutlined';
import div from '../src/picture/div.jpg';



const darkTheme= createTheme({
    palette:{
        mode:"dark",
    },
});

const boxstyle={
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    width:"75%",
    height:"70%",
    bgcolor:"background.paper",
    boxshadow:24,
};

const center={
    position:"relative",
    top:"50%",
    left:"37%",
};


export default function Dlogin(){
    const[remember,setRemember]=useState(false);
    const navigate= useNavigate();
    return(
        <>
        <div
            style={{
                backgroundImage:'./bg.jpg',
                backgroundSize:"cover",
                height:"100vh",
                color:"#f5f5f5",
            }}
            >
                <Box sx={boxstyle}>
                <Grid container>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Box style={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            backgroundSize:"cover",
                            height:"70vh",
                            minHeight:"500px",
                            backgroundColor:"#05043E"

                        }}
                        >

                         <img src={div}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          backgroundSize="cover"
                          width="500px"
                          minHeight="500px"
                         height="500vh"
                          alt=""/>
                           
                            
                        </Box>
                        </Grid>    
                    <Grid item xs={12} sm={12} lg={6}>
                        <Box 
                        style={{
                            backgroundSize:"cover",
                            height:"70vh",
                            minHeight:"500px",
                            backgroundColor:"#000000",
                            border:"2px"
                        }}>
                            <ThemeProvider theme={darkTheme}>
                            <Container>
                    <Box height={35}/>
                    <Box sx={center}>
                        
                        
                    </Box>
                    <Box height={35}/>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sx={{ml:"3em",mr:"3em" }}>
                        
                            <TextField
                            style={{backgroundColor:"#05043E", borderRadius:"27px"}}   
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="email"
                            autoComplete="email"
                            
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ml:"3em",mr:"3em"}}>
                            <TextField
                            style={{backgroundColor:"#05043E", borderRadius:"27px"}}
                            
                            required
                            fullWidth
                            id="password"
                            label="password"
                            name="password"
                            autoComplete="new-password"
                            sx={{color:"#000000"}}
                            
                            />
                        </Grid>
                        
                                
                        <Grid item xs={12} sx={{ml:"5em",mr:"5em"}}>
                            <Button
                            type="submit"
                            variant="contained"
                            fullWidth="true"
                            size="large"
                            sx={{
                                mt:"10px",
                                mr:"20px",
                                borderRadius:28,
                                color:"#000000",
                                minWidth:"170px",
                                backgroundColor:"#ffffff",
                            }}
                            >
                                Log in
                            </Button>
                        </Grid>
                        

                    </Grid>
                </Container>

                            </ThemeProvider>
                        
                        </Box>
                    </Grid>
                </Grid> 
                

                </Box> 
            </div>
    
    </>
    );
}