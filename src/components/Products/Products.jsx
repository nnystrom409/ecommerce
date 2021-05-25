import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

/*
const products = [
  { id: 1, name: 'Shoes', description: 'Running shoes', price: "$5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblZhde109nGnyvvP_1mdw5s9eZP1OST4O5C-nDP5cc_CEOmMr69f9jrRRHxMysQBu5bit2gCO&usqp=CAc" },
  { id: 2, name: 'Macbook', description: 'Apple macbook', price: "$10", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCPTBN2iL7QK8PnVIcifaB_RJhfQfKq77wJIQJpEud1Ar-lccRSMgBzbA9SM&usqp=CAc" },
];
*/

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <div className={classes.toolbar}/>
      <div className={classes.toolbar}/>
      <div className={classes.toolbar}/>

      <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart}/>
            </Grid>
          ))}
      </Grid>
    </main>
  )
}

export default Products;
