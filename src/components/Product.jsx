import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useRecoilCallback, useRecoilState } from 'recoil'
import { CartItemFamily } from '../recoil/cart/CartAtom'
import { SelectedProductsState } from '../recoil/Products/ProductAtoms'
import ProductQuantity from './ProductQuantity'

const Product = ({product}) => {

  const [selectedProducts, setSelectedProducts] = useRecoilState(SelectedProductsState);

  const insertIntoCartItemFamily = useRecoilCallback(
    ({set}) => (id, defaultValue) => {
      set(CartItemFamily(id), defaultValue)
    }
  )

  const toggleSelection = () => {
    const {id} = product;
    if(selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter(pId => pId !== id))
    }
    else {
      setSelectedProducts([...selectedProducts, id])
      insertIntoCartItemFamily(id, {...product, quantity:1})
    }
  }

  return (
    <Card sx={{ border: selectedProducts.includes(product.id)?'1px solid blue':undefined, position:'relative' }} onClick={toggleSelection}>
        {selectedProducts.includes(product.id)&&(
          <ProductQuantity id={product.id} />
        )}
        <Box sx={{padding:1}}>
            <Typography sx={{ fontSize: 14 }} >{product.name}</Typography>
            <Box sx={{display:'flex', gap:1}}>
              <Typography sx={{ fontSize: 12, textDecoration: product.discount?"line-through":undefined, color: product.discount?"red":undefined }} gutterBottom>{product.formattedPrice}</Typography>
              {product.discount&&(
                <Typography sx={{ fontSize: 12, color:'green' }} gutterBottom>{product.discountPrice}</Typography>
              )}
            </Box>
        </Box>
    </Card>
  )
}

export default Product