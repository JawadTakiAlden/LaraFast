import { Button } from '@mui/material'
import React from 'react'

const LarafastButton = ({children , bshColor , bshSize , bColor ,...rest }) => {
  return (
    <Button
      sx={{
        boxShadow : `${bshSize}px ${bshSize}px 0 0 ${bshColor}`,
        borderRadius : '30px',
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default LarafastButton