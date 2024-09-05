import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PaypalButton from "./PayPalButton";

const Products = ({ products, activateEditMode, sendDataToDeleteProduct }) => {
  return (
    <div>
      <h1>Relojes</h1>

      {products.map((product) => (
        <Card key={product._id} sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={product.imagen}
            title={product.nombre}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.nombre}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Precio: ${product.precio}
            </Typography>
          </CardContent>
          <CardActions>
            <PaypalButton valor={product.precio} />
        
            {/* <Button size="small" onClick={() => activateEditMode(product)}>Editar</Button>
            <Button size="small" onClick={() => sendDataToDeleteProduct(product)}>Borrar</Button> */}
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Products;