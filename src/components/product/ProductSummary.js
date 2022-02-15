import React from 'react';
import './product.css';
import dots from '../../assets/img/dots.png';

function ProductSummary({ data }) {
    return (
        <div className="product-summary-container">
            <div>
                {data.strain == "SATIVA" ?
                    <span className={`strain-item-list-${data.strain}`}>
                        {data.strain}
                    </span> : data.strain == "HYBRID" ?
                        <span className={`strain-item-list-${data.strain}`}>
                            {data.strain}
                        </span> :
                        <span className={`strain-item-list-${data.strain}`}>
                            {data.strain}
                        </span>
                }
            </div>
            <div className="summary-pic-container">
                <img src={data.photo} className='flower-img-summary' alt="" />
                <img src={dots} className='flower-img-summary-bkg' alt="" />
            </div>
            <div className=''>
                <div className="summary-text">
                    <h3>
                        {data.qty} g
                    </h3>
                </div>
                <div className="summary-text">
                    <h2>
                        {data.strain_name}
                    </h2>
                </div>
                <div className="summary-text">
                    <h5>
                        ${data.prices.base} / g
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default ProductSummary