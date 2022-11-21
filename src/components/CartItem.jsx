import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useRecoilState } from 'recoil';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { CartItemFamily } from '../recoil/cart/CartAtom';
import { SelectedProductsState } from '../recoil/Products/ProductAtoms';

const CartItem = ({ id }) => {

  const [cartItem, setCartItem] = useRecoilState(CartItemFamily(id));
  const [selectedProducts, setSelectedProducts] = useRecoilState(SelectedProductsState);

  const changeQuantity = (action) => {
    const {quantity} = cartItem;

    if(action === 'add') {
      setCartItem({...cartItem, quantity:quantity+1})
    }else if(action === 'minus') {
      if(quantity<2) changeQuantity('remove');
      else setCartItem({...cartItem, quantity:quantity-1});
    }else if(action === 'remove') {
      setSelectedProducts(selectedProducts.filter(pId => pId!==id))
    }
  }

  return (
    <Card sx={{marginBottom:1}}>
      <Box sx={{ padding: 1 }}>
        <Typography sx={{ fontSize: 14 }} >{cartItem.name}</Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>{cartItem.discountPrice}</Typography>
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Typography sx={{ fontSize: 13 }} gutterBottom>Qty: {cartItem.quantity}</Typography>
          <Box sx={{display:'flex'}}>
            <IconButton onClick={() => changeQuantity('add')}><AddCircleOutlineIcon color='primary' /></IconButton>
            <IconButton onClick={() => changeQuantity('minus')}><RemoveCircleOutlineIcon color='warning' /></IconButton>
            <IconButton onClick={() => changeQuantity('remove')}><HighlightOffIcon color='error' /></IconButton>
          </Box>

        </Box>
      </Box>
    </Card>
  )

}

export default CartItem