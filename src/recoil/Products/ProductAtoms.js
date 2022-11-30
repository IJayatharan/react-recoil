import { atom } from "recoil";

const categories = Array.from({length:10}, (_, i) => `Category ${i+1}`)

const products = Array.from({length:40}, (_, i) => ({
    id:i,
    name: `Product ${i}`,
    category: categories[Math.floor(Math.random() * 10)],
    price: Math.round(Math.random() * 1000) + 1,
    discount: Math.random() < 0.5,
    discountPercentage: Math.random()
}))

export const CategoriesState = atom({
    key: 'categoriesState',
    default:categories
})

export const ProductsState = atom({
    key: 'productsState',
    default:products
})

export const ProductsCountState = atom({
    key: 'productsCountState',
    default:40
})

export const ProductsMetaDataState = atom({
    key: 'productsMetaDataState',
    default:{
        page:1,
        limit:8,
        categories:[],
        search:''
    }
})

export const SelectedProductsState = atom({
    key: 'selectedProductsState',
    default:[]
})

