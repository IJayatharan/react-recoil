import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { GetCartTotal } from '../recoil/cart/CartSelector'

const CartTotal = () => {

    const cartTotal = useRecoilValue(GetCartTotal);

    return (
        <Box>
            <Typography variant='h5'>Cart Total</Typography>
            <Divider sx={{ marginY: 2 }} />
            <Typography sx={{ fontSize: 15 }} >Total Quantity: {cartTotal.totalItems}</Typography>
            <Typography sx={{ fontSize: 15 }} >Total: {cartTotal.cartTotal}</Typography>
        </Box>
    )
}

export default CartTotal