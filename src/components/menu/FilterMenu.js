import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import React from 'react'

function FilterMenu({ isOpen, toggleFilter }) {

    console.log(isOpen);

    return (
        <div id="FILTER" className={isOpen}>
            <div className="bkg"></div>
            <div className="front">

                <header>
                    <div style={{ width: "2vh" }}></div>
                    <h3>Product Filter</h3>
                    <FontAwesomeIcon onClick={() => toggleFilter("container filter-close ")} icon={faTimes} style={{ marginRight: "7vw", fontSize: "8vw", }} />
                </header>
                <div className="filter-container">
                    <h4>Strain Type</h4>
                    <form>
                        <div>
                            <label htmlFor="SATIVA"> Sativa </label>
                            <input type="checkbox" name="SATIVA" id="SATIVA" />
                        </div>

                        <div>
                            <label htmlFor="INDICA"> Indica </label>
                            <input type="checkbox" name="INDICA" id="INDICA" />
                        </div>

                        <div>
                            <label htmlFor="HYBRID"> Hybrid </label>
                            <input type="checkbox" name="HYBRID" id="HYBRID" />
                        </div>
                        <div className='hline'></div>
                    </form>
                    <h4>Price Range</h4>
                    <form action="">
                        <div className="price-filter">
                            <div>
                                <input type="checkbox" name="SHAKE" id="SHAKE" />
                                <label htmlFor="SHAKE"> Shake </label>
                            </div>

                            <div>
                                <input type="checkbox" name="VALUE_SHELF" id="VALUE_SHELF" />
                                <label htmlFor="VALUE_SHELF"> Value </label>
                            </div>

                            <div>
                                <input type="checkbox" name="TOP" id="TOP" />
                                <label htmlFor="TOP"> Top Shelf </label>
                            </div>

                            <div>
                                <input type="checkbox" name="EXOTIC" id="EXOTIC" />
                                <label htmlFor="EXOTIC"> Exotic </label>
                            </div>
                        </div>
                        <div className='hline'></div>
                    </form>
                    <h4>Concentrates</h4>
                    <form action="">
                        <div>
                            <label htmlFor="BADDER"> Badder </label>
                            <input type="checkbox" name="BADDER" id="BADDER" />
                        </div>

                        <div>
                            <label htmlFor="DIAMONDS"> Diamonds </label>
                            <input type="checkbox" name="DIAMONDS" id="DIAMONDS" />
                        </div>

                        <div>
                            <label htmlFor="SUGAR"> Sugar </label>
                            <input type="checkbox" name="SUGAR" id="SUGAR" />
                        </div>

                        <div>
                            <label htmlFor="LIVE_ROSIN"> Live Rosin </label>
                            <input type="checkbox" name="LIVE_ROSIN" id="LIVE_ROSIN" />
                        </div>
                        <div className='hline'></div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default FilterMenu