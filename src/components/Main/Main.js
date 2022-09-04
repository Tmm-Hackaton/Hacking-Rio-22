import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Main.css"
import { useState } from 'react';
import { MainButton } from '../MainButton/MainButton';

export const Main = () => {
  const [Email, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (<>
    <Box
    className='box'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        className='input'
        id="outlined-name"
        label="E-mail"
        value={Email}
        onChange={handleChange}
      />
      <TextField
        id="outlined-uncontrolled"
        label="Senha"
       
      />
      <MainButton/>
    </Box>
    <hr className='hr'/>
    <div className='footer'>
    <p>Ao continuar, você concorda com os <span> 
        Termos de Uso</span> e que está ciente da nossa
         <span> Política de Privacidade</span></p>
    </div>
    
    </>
   
    
  );
}

