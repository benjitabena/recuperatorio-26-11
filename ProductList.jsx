import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div>
            {products.length > 0 ? (
                products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.category}</p>
                        <img src={product.image} alt={product.title} style={{ width: '100px' }} />
                    </div>
                ))
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
};

export default ProductList;
