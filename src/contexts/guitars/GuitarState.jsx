import { useReducer } from 'react';
import GuitarContext from './GuitarContext';
import GuitarReducer from './GuitarReducer';
import axiosClient from '../../config/axios';

const GuitarState = (props) => {
    const initialState = {
        guitars: []
    }

    const [ globalState, dispatch ] = useReducer(GuitarReducer, initialState);

    const createGuitar = async (dataForm) => {
        const form = {
            nombre: dataForm.nombre,
            precio: dataForm.precio
        }
        try {
            await axiosClient.post(`/product/crear-guitarra`, form);
            getGuitars();
        } catch (error) {
            console.log(error);
        }
    }

    const getGuitars = async () => {
        try {
            const res = await axiosClient.get(`/product/obtener-guitarras`);
            dispatch({
                type: "OBTENER-GUITARRAS",
                payload: res.data.guitarras
            });
        } catch (error) {
	        console.log(error);
        }
    }

    const updateGuitar = async (id, dataForm) => {
        const form = {
            id,
            nombre: dataForm.nombre,
            precio: dataForm.precio
        };
        try {
            await axiosClient.put(`/product/actualizar-guitarra`, form);
            getGuitars();
        } catch (error) {
            console.log(error);
        }
    }

    const deleteGuitar = async (id) => {
        const data = { id };
        try {
            await axiosClient.delete(`/product/borrar-guitarra`, { data });
            getGuitars();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <GuitarContext.Provider value={{
            guitars: globalState.guitars,
            createGuitar,
            getGuitars,
            updateGuitar,
            deleteGuitar
            }}>
            { props.children }
        </GuitarContext.Provider>
    )
}

export default GuitarState;