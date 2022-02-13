import React from 'react';
import ProductSummary from '../product/ProductSummary';

function ProductList({ data }) {

    return (
        <div className="main-product-list-container">
            {
                data && data.map(item => {
                    return (
                        <ProductSummary key={item.id} data={item} />
                    )
                })}
        </div>
    )
}

export default ProductList