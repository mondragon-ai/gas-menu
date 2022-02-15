import React from 'react';
import './menu.css'
import dots from '../../assets/img/dots.png';


function HotItem({ data }) {
    // const { item } = data;

    return (

        <div className="hot-item">

            <div className="hi-text-container">
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
                <div style={{ margin: "0 0 5vh 0" }}>
                    <div className="hi-text">
                        <h3>
                            {data.strain_name}
                        </h3>
                    </div>
                    <div className="hi-text">
                        <h5>
                            ${data.prices.base} / g
                        </h5>
                    </div>
                </div>
                <img src={dots} className='flower-img-bkg' alt="" />
            </div>
            <img src={data.photo} className='flower-img' alt="" />
        </div>
    );
}

export default HotItem;
