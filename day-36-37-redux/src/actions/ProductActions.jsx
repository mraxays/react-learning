import axios from "axios";
import { getProducts } from "../store/reducers/productReducer";

export const asyncgetProducts =() => async (dispatch, getState) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch(getProducts(response.data));
    } catch (error) {
        console.log(error);
    }
}

