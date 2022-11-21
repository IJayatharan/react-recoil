import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { useRecoilValue } from 'recoil';
import { SelectedProductsState } from '../recoil/Products/ProductAtoms';
import CartItem from './CartItem';


const Cart = () => {
  const selectedProducts = useRecoilValue(SelectedProductsState);

  return (
    <>
        <Typography variant='h5'>Cart</Typography>
        <Divider sx={{ marginY: 2 }} />
        <Box>
          {selectedProducts.map(pId => (
            <CartItem key={pId} id={pId} />
          ))}
        </Box>
    </>
  )
}

export default Cart