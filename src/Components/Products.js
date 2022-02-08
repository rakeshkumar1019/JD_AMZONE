import React,{ useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./product.css"

function Products() {
    let [products,setPrdoucts]=useState([])

    useEffect(async ()=>{
        const res=await fetch("https://fakestoreapi.com/products/");
        const data=await res.json()
        setPrdoucts(data)
    },[])

    return (
        <div>
            <h3 className='product__heading'>Our Best Selling Products</h3>
            <div className='products'>
                {products && products.map((product,idx)=>(
                    <Card className="product" sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {product.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">{product.category}</Button>
                                <Button size="small">${product.price}</Button>
                            </CardActions>
                        </Card>   
                ))}
            </div>
        </div>
    )
}

export default Products
