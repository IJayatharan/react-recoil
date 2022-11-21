import { Box, Divider, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Product from './Product'
import Pagination from '@mui/material/Pagination';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CategoriesState, ProductsCountState, ProductsMetaDataState } from '../recoil/Products/ProductAtoms';
import { GetProducts, GetProductsAsync } from '../recoil/Products/ProductSelector';

const Products = () => {

    const [productsMetaData, setProductsMetaData] = useRecoilState(ProductsMetaDataState);
    const [productsCount, setProductsCount] = useRecoilState(ProductsCountState);
    const categories = useRecoilValue(CategoriesState);
    const products = useRecoilValue(GetProducts);

    const handlePageChange = (e, value) => {
        setProductsMetaData({...productsMetaData, page:value})
    }

    useEffect(()=>{
        setProductsCount(products.count)
    },[products])

    const handleCategoriesChange = (event) => {
        const {
            target: {value}
        } = event;
        const selectedCategories = typeof value === 'string' ? value.split(',') : value
        setProductsMetaData({...productsMetaData, page:1,categories:selectedCategories});
    }

    const handleSearchChange = (event) => {
        const {
            target: {value}
        } = event;
        setProductsMetaData({...productsMetaData, search:value, page:1})
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '90vh' }}>
            <Box>
                <Typography variant='h5'>Products</Typography>
                <Divider sx={{ marginY: 2 }} />
                <FormControl size='small' fullWidth sx={{marginBottom:1}}>
                    <InputLabel id="categories-label">Categories</InputLabel>
                    <Select
                        size='small'
                        labelId="categories-label"
                        id="categories"
                        multiple
                        onChange={handleCategoriesChange}
                        value={productsMetaData.categories}
                        input={<OutlinedInput label="Categories" />}
                    >
                        {categories.map((category) => (
                            <MenuItem
                                key={category}
                                value={category}
                            >
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField fullWidth={true} placeholder="Search" size='small' sx={{marginBottom:1}} value={productsMetaData.search} onChange={handleSearchChange} />
                <Grid container spacing={1}>
                    {products && products.products.map((p,i) => (
                        <Grid key={i} item xs={6}>
                            <Product product={p} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
            <Typography sx={{fontSize:'16px', fontWeight:'500'}}>Total Count: {products.count}</Typography>
                <Pagination page={productsMetaData.page} count={Math.ceil(productsCount/productsMetaData.limit)} color="primary" onChange={handlePageChange} />
            </Box>
        </Box>
    )
}

export default Products