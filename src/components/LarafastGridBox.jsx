import { Grid } from '@mui/material'
import React from 'react'

const LarafastGridBox = ({children , ...rest}) => {
  return (
    <Grid container {...rest}>
      {children}
    </Grid>
  )
}

export default LarafastGridBox