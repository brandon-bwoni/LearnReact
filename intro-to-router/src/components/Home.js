import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function navHandler() {
    navigate('/products');
  }

  return (
    <>
      <h1>My home page</h1>
      <p><Link to='products'>Go to the link of products</Link></p>
      <button onClick={navHandler}>Products</button>
    </>
  );
}

export default Home;