import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import {useSelector} from 'react-redux'

function Products() {
  

    const products = useSelector((state) => state.products)

  

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const checkCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
<div style={{ width: "100%" }}>
      <br />
      <Container>
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
              <Card style={{textAlign:"center" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: {product.price} DH</Card.Text>

                  <div >
                    {/* <Button
                      onClick={() => {
                        const newProducts = [...products];
                        const index = newProducts.findIndex(
                          (p) => p.id === product.id
                        );
                        newProducts[index].value =
                          (newProducts[index].value || 0) - 1;
                        setProducts(newProducts);
                      }}
                    >
                      -
                    </Button> */}
                    <input style={{width:'30px'}}
                      type="text"
                      value={product.value || 0}
                      onChange={(event) => {
                        const newProducts = [...products];
                        const index = newProducts.findIndex(
                          (p) => p.id === product.id
                        );
                        newProducts[index].value = parseInt(event.target.value);
                        // setProducts(newProducts);
                      }}
                    />
                    {/* <Button
                      onClick={() => {
                        const newProducts = [...products];
                        const index = newProducts.findIndex(
                          (p) => p.id === product.id
                        );
                        newProducts[index].value =
                          (newProducts[index].value || 0) + 1;
                        setProducts(newProducts);
                      }}
                    >
                      +
                    </Button> */}
                  </div>

                  <div className="product-action">
                    <Button
                      className='btn btn-success'
                      type="button"
                      onClick={() => handleAddToCart(product)}
                    >
                      {checkCart(product.id) ? "✔ ADDED" : "ADD TO CART"}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
