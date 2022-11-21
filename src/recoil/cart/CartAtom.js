import { atomFamily, useRecoilCallback } from "recoil";

export const CartItemFamily = atomFamily({
    key:'cartItemsFamily',
    default:{}
})
