import React from 'react'
import FetchApi from "./FetchApi";

const ProductList = () => {
  return (
    <div>
        <h1 className='text-center'>Product List</h1>
      <FetchApi>
        {({ goods }) => (
          <div className="row d-flex flex-wrap gap-3 justify-content-center">
            {goods.map((good) => (
              <div key={good.id} className="card col-12 col-md-3 product-card">
                <img src={good.image} className="card-img-top" alt="product_img" />
                <h2>{good.title}</h2>
                <p>{good.description.split(' ').slice(0, 15).join(' ')}...</p>
                <div className="d-flex justify-content-between">
                <p className='w-50'>Price: {good.price}</p> 
                <button className='btn btn-primary mb-3 w-25'>Buy</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </FetchApi>
    </div>
  )
}

export default ProductList