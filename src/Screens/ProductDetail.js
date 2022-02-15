import React from 'react'
import product_pic from '../assets/img/product/flower/bigs/dry-bud.png';
import '../components/product/product.css';
import '../components/menu/menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faCannabis, faSearch } from '@fortawesome/free-solid-svg-icons';

const prices =
{
    base: 2.30,
    five_lb: 2.29,
    ten_lb: 2.28,
    twenty_lb: 2.26,
    fifty_plus: "CALL TO ASK"
}

const data =
{
    id: 1,
    photo: product_pic,
    category: "FLOWER",
    strain_name: "Oreoz",
    strain: "INDICA",
    thc: "30%",
    cbd: "8%%",
    terps: "2.2%",
    uom: "G",
    qty: 4500,
    prices: prices,
}


function ProductDetail() {
    return (
        <div id="PRODUCT_SUMMARY" className='container'>
            {/* 1. HEADER - [[Pic], [strain, stain_name, CBD, THC, TERPS]], [Feeling], [Description] */}
            <header className=''>
                <div className="top-summary-container">
                    <img src={data.photo} alt="" className="summary-pic" />
                    <div className="quick-stats">
                        <div style={{ width: '100%' }}>
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
                        <h1 className='product-summary-name'>{data.strain_name}</h1>
                        <div className="product-testing">
                            <div className="testing-stats">
                                <span>CBD</span>
                                <h3>{data.cbd}</h3>
                            </div>
                            <div className="testing-stats">
                                <span>THC</span>
                                <h3>{data.thc}</h3>
                            </div>
                            <div className="testing-stats">
                                <span>TERPS</span>
                                <h3>{data.terps}</h3>
                            </div>
                        </div>
                        <div className="product-feeling">
                            <p>Happy</p>
                            <p>Energetic</p>
                            <p>Focused</p>
                        </div>
                    </div>
                </div>
                <div className="summary-description-container">
                    <p>Citrus Gelato Cake is a heavy hitting indica dominant hybrid. A complex cross off wedding cake, gelato 33 and orange Sherbert; it has a sweet smell of orange citrus, hops and sugary gasoline. The flowers are light green with dark green accents, wispy orange pistols and have a solid coating of sugary trichomes. There are occasional hues of deep purple, and when broken down bright lavender colors are revealed at the center of the flowers. The flavor is sweet and slinky, smooth and powerful, with an effect that is blissful and euphoric. Immediately loosening tension in the mind and body. A great stress and anxiety reliever. It can help you fall asleep if you need it to but can also bring you into a nice creative flow.</p>
                </div>
            </header>

            {/* 2. DIV - [PRICING], [ADD/SUBTRACt]  */}
            <div className="product-price-container">
                <div className='summary-price-title'>
                    <FontAwesomeIcon icon={faCannabis} style={{ textAlign: "left", margin: "0, 7vw", fontSize: "2vh" }} />
                    <h2>Price Breakdown</h2>
                </div>
                <div className="grid">
                    <div className="grid-item">
                        <h3>$1,800 / lb</h3>
                        <h2>1 - 5 lbs</h2>
                        <h5>NO SAVINGS</h5>
                    </div>
                    <div className="grid-item">
                        <h3>$1,700 / lb</h3>
                        <h2>6 - 15 lbs</h2>
                        <h5>$100 / lb savings</h5>
                    </div>
                    <div className="grid-item">
                        <h3>$1,600 / lb</h3>
                        <h2>16 - 30 lbs</h2>
                        <h5>$200 / lb savings</h5>
                    </div>
                    <div className="grid-item">
                        <h3>$1,500 / lb</h3>
                        <h2>31 - 50 lbs</h2>
                        <h5>$300 / lb savings</h5>
                    </div>
                </div>
                <div className="add-qty">
                    <div className="switch">
                        <span style={{ backgroundColor: 'rgb(235, 235, 235);' }}><h2>-</h2></span>
                        <h2>1</h2>
                        <span><h2>+</h2></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail