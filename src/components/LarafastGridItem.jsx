import { Grid } from '@mui/material'
import React from 'react'

const LarafastGridItem = ({children , ...rest}) => {
  return (
    <Grid item {...rest}> 
      {children}
    </Grid>
  )
}

export default LarafastGridItem