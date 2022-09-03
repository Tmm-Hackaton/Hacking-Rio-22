import * as React from 'react';
import Button from '@mui/material/Button';
import "./MainButton.css"

export const MainButton =() => {
  return (
    <Button className='btn' variant="contained" disableElevation>
      Entrar
    </Button>
  );
}
