import { useParams } from 'react-router-dom';
import PaypalButton from './PaypalButton';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useContext } from 'react';
import ProductContext from '../../contexts/product/ProductContext';

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useContext(ProductContext);

    if (!products || products.length === 0) {
        return <h2>Loading productos...</h2>;
    }
    const product = products.find((p) => p._id === id);

    if (!product) {
        return <h2>Producto no encontrado</h2>;
    }

    return (
        <Box sx={{ paddingTop: '80px',paddingBottom: '100px', display: 'flex', justifyContent: 'center',alignItems: 'center' }}>
            <Card sx={{ maxWidth: 400, margin: 'auto', boxShadow: 3 }}>
                <CardMedia
                    sx={{ height: 200, objectFit: 'contain' }}
                    image={product.imagen}
                    title={product.nombre}
                />
                <CardContent>
                    <Typography variant="h4" component="div" gutterBottom>
                        {product.nombre}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" gutterBottom>
                        Descripción: {product.descripcion}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Precio: ${product.precio}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <PaypalButton valor={product.precio} />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ProductDetails;