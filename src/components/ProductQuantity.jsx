import { Box } from '@mui/material';
import React from 'react'
import { useRecoilValue } from 'recoil';
import { CartItemFamily } from '../recoil/cart/CartAtom';

const ProductQuantity = ({ id }) => {
    const cartItem = useRecoilValue(CartItemFamily(id));

    return (
        <Box sx={{position:'absolute', top:'10px', right:'10px', zIndex:999, backgroundColor:'primary.main', padding:'5px', borderRadius:'4px', color:'white'}}>
            {cartItem.quantity}
        </Box>
    )
}

export default ProductQuantity