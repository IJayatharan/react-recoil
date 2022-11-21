import { Box, Container, Grid } from '@mui/material'
import React, { Suspense } from 'react'
import Cart from './components/Cart'
import CartTotal from './components/CartTotal'
import LoadingProducts from './components/LoadingProducts'
import Products from './components/Products'

const App = () => {
  return (
    <Container maxWidth='xl' sx={{marginTop:2}}>
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <Box sx={{border:'5px solid transparent;', padding:1, minHeight:'90vh', borderImage:'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)', borderImageSlice:1}}>
            <Suspense fallback={<LoadingProducts />}>
              <Products />
            </Suspense>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{border:'5px solid transparent;', padding:1, minHeight:'90vh', borderImage:'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)', borderImageSlice:1}}>
            <Cart />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{border:'5px solid transparent;', padding:1, minHeight:'90vh', borderImage:'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)', borderImageSlice:1}}>
            <CartTotal />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App