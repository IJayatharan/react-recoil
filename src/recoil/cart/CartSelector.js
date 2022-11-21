import { atom, selector } from "recoil";
import { SelectedProductsState } from "../Products/ProductAtoms";
import { CurrencyFormatter, GetAllProducts } from "../Products/ProductSelector";
import { CartItemFamily } from "./CartAtom";

export const GetCartTotal = selector({
    key: 'getCartTotal',
    get: ({get}) => {
        const selectedProducts = get(SelectedProductsState);
        const cartItems = selectedProducts.map((pId) => get(CartItemFamily(pId)))
    
        let totalItems = 0
        let cartTotal = 0

        cartItems.forEach(i => {
            totalItems+=i.quantity;
            cartTotal+=i.quantity*(i.discount ? i.price * (1 - i.discountPercentage) : i.price);
        })
        
        return {totalItems,  cartTotal:CurrencyFormatter.format(cartTotal)  };
    }
})