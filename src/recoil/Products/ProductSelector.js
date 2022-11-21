import { selector } from "recoil";
import { ProductsState, ProductsMetaDataState } from "./ProductAtoms";

export const CurrencyFormatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'LKR' })

const formatProduct = (product) => {
    return ({
        ...product,
        formattedPrice:CurrencyFormatter.format(product.price),
        discountPrice:CurrencyFormatter.format(product.discount ? product.price * (1 - product.discountPercentage) : product.price)
    })
}

export const GetProducts = selector({
    key: 'getProducts',
    get: ({get}) => {
        const products = get(ProductsState);
        const productsMetaData = get(ProductsMetaDataState);
        
        let productList = [...products]

        if(productsMetaData.categories.length > 0){
            productList = products.filter(p => productsMetaData.categories.includes(p.category))
        }

        if(productsMetaData.search){
            const searchTextLowercase = productsMetaData.search.toLocaleLowerCase();
            productList = productList.filter( p => p.name.toLocaleLowerCase().indexOf(searchTextLowercase) !== -1);
        }

        const start = (productsMetaData.page-1) * productsMetaData.limit
        const end = start + productsMetaData.limit

        return {products:productList.slice(start, end).map((p) => (formatProduct(p))), count:productList.length};
    }
})

export const GetProductsAsync = selector({
    key: 'getProductsAsync',
    get: async ({get}) => {
        const productsMetaData = get(ProductsMetaDataState);
        
        let products = []
        let count = 0
        let error = false

        const categories = productsMetaData.categories.join(",")

        const queryParams = {
            page:productsMetaData.page,
            limit:productsMetaData.limit,
            search:productsMetaData.search,
            categories
        }

        const query = new URLSearchParams(queryParams).toString()
        try{
            const response = await fetch(`http://localhost:5000/products?${query}`)
            const data = await response.json();
            products = data.rows;
            count = data.count;
        }catch(error){
            error = true;
        }

        return {products:products.map((p) => (formatProduct(p))), count:count, error};
    }
})