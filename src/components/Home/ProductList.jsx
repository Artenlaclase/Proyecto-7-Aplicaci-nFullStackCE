import { useState, useEffect } from 'react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PaypalButton from './PaypalButton';
import Grid from '@mui/material/Grid2';
import CircularProgress from '@mui/material/CircularProgress';




const Products = ({ products, activateEditMode, sendDataToDeleteProduct }) => {
  const [loading, setLoading] = useState(true);

  // Simular una carga de productos desde la base de datos
  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  return (
    <div>
      <h1>Relojes</h1>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={3} sx={{ paddingLeft: 2, paddingRight: 2, marginBottom: 30 }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  maxWidth: 345,
                  margin: 'auto'
                }}>
                <CardMedia
                  sx={{
                    height: 140,
                    width: '100%',
                    objectFit: 'cover'
                  }}
                  image={product.imagen}
                  title={product.nombre}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {product.nombre}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Precio: ${product.precio}
                  </Typography>

                  <CardActions sx={{ justifyContent: 'center', paddingBottom: 2 }}>
                    <PaypalButton valor={product.precio} />
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Products;