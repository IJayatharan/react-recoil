import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { GetCartTotal } from '../recoil/cart/CartSelector'
import { SelectedProductsState } from '../recoil/Products/ProductAtoms'

const CartTotal = () => {

    const cartTotal = useRecoilValue(GetCartTotal);
    const resetSelectedProducts = useResetRecoilState(SelectedProductsState);

    return (
        <Box>
            <Typography variant='h5'>Cart Total</Typography>
            <Divider sx={{ marginY: 2 }} />
            <Typography sx={{ fontSize: 15 }} >Total Quantity: {cartTotal.totalItems}</Typography>
            <Typography sx={{ fontSize: 15 }} >Total: {cartTotal.cartTotal}</Typography>
            <Button variant='contained' fullWidth={true} sx={{marginTop:4}} onClick={resetSelectedProducts}>Place order</Button>
        </Box>
    )
}

export default CartTotal