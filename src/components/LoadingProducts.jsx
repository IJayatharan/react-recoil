import { Box, Divider, Skeleton, Typography } from '@mui/material'
import React from 'react'

const LoadingProducts = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '90vh' }}>
            <Box>
                <Typography variant='h5'><Skeleton /></Typography>
                <Divider sx={{ marginY: 2 }} />
            </Box>
        </Box>
    )
}

export default LoadingProducts