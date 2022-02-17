import React from 'react';
import { NavLink } from 'react-router-dom';
import ConcentrateSummar from '../product/ConcentrateSummar';
import ProductSummary from '../product/ProductSummary';

function ProductList({ data }) {

    return (
        <div className="main-product-list-container">
            {
                data && data.map(item => {
                    return (
                        <NavLink key={item.id} to={`/${item.category}/${item.strain_name}`}>
                            {item.category == "FLOWER" ? <ProductSummary data={item} /> : <ConcentrateSummar data={item} />}
                        </NavLink>
                    )
                })}
        </div>
    )
}

export default ProductList