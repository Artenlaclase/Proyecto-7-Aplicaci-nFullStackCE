import { useReducer } from "react";
import ProductReducer from './ProductReducer';
import ProductContext from "./ProductContext";
import axiosClient from '../../config/axios'


const ProductState =(props) => {
    const initialState = {
        products: []
    }
    const [globalState, dispatch ] = useReducer(ProductReducer, initialState );

    const createProduct= async (dataForm) => {
        const form = {
            nombre: dataForm.nombre,
            precio: dataForm.precio,
            descripción: dataForm.descripcion,
        }
        try {
            await axiosClient.post('/product/create', form);
            getProducts();

        } catch (error) {
            console.log(error);
            
        }
    }

    const getProducts = async () => {
        try {
            const res = await axiosClient.get(`/product/readall`);
            dispatch({
                type: "OBTENER-Productos",
                payload: res.data.products
            });
        } catch (error) {
	        console.log(error);
        }
    };
    
    const updateProduct = async (id, dataForm) => {
        const form = {
            id,
            nombre: dataForm.nombre,
            precio: dataForm.precio,
            descripción: dataForm.descripcion
        };
        try {
            await axiosClient.put(`/product/update/:id`, form);
            getProducts();
        } catch (error) {
            console.log(error);
        }
    };

    const deleteProduct = async (id) => {
        const data = { id };
        try {
            await axiosClient.delete(`/product/delete/:id`, { data });
            getProducts();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ProductContext.Provider value={{
            products: globalState.products,
            createProduct,
            getProducts,
            updateProduct,
            deleteProduct
            }}>
            { props.children }
        </ProductContext.Provider>
    )

};

export default ProductState;
