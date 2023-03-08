import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, Navigate, useNavigate} from "react-router-dom";
import '../App.css'

function AddProducts() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [id, setId] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !image || !category) {
        alert("Please fill in all fields");
        return;
      }

    const newProduct = { id, name, price, image, category };
    await axios.post("http://localhost:5000/products", newProduct);
    setName("");
    setPrice("");
    setImage("");
    setCategory("");
    setId(id +1);
    navigate('/');
  };

  return (
    <div className="container">
      <div className="form">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name :</Form.Label>
          <Form.Control
            className="bordered-input"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price :</Form.Label>
          <Form.Control
            className="bordered-input"
            type="text"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicImage">
          <Form.Label>Image URL :</Form.Label>
          <Form.Control
            className="bordered-input"
            type="text"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicCategory">
          <Form.Label>Category :</Form.Label>
          <Form.Control
            className="bordered-input"
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button onClick={() => navigate('/')}>Cancel</Button>
      </Form>
      </div>
    </div>
  );
}

export default AddProducts;
