import React, { useState } from 'react';
import '../components/menu/menu.css';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import HotItem from '../components/menu/HotItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faCannabis, faSearch } from '@fortawesome/free-solid-svg-icons';
import pic from "../assets/img/product/flower/bigs/dry-bud.png";
import ProductList from '../components/menu/ProductList';

const prices =
{
    base: 2.31,
    five_lb: 2.29,
    ten_lb: 2.28,
    twenty_lb: 2.26,
    fifty_plus: "CALL TO ASK"
}

const sampleItems = [
    {
        id: 1,
        photo: pic,
        category: "FLOWER",
        strain_name: "Oreoz",
        strain: "INDICA",
        thc: "30%",
        terps: "2.2%",
        uom: "G",
        qty: 4500,
        prices: prices,
    },
    {
        id: 2,
        photo: pic,
        category: "FLOWER",
        strain_name: "Wedding Cake",
        strain: "INDICA",
        thc: "27%",
        terps: "2.0%",
        uom: "G",
        qty: 5500,
        prices: prices,
    },
    {
        id: 3,
        photo: pic,
        category: "FLOWER",
        strain_name: "215 Memories",
        strain: "SATIVA",
        thc: "30%",
        terps: "1.8%",
        uom: "G",
        qty: 9500,
        prices: prices,
    },
    {
        id: 4,
        photo: pic,
        category: "FLOWER",
        strain_name: "SFV OG",
        strain: "HYBRID",
        thc: "29%",
        terps: "1.9%",
        uom: "G",
        qty: 7500,
        prices: prices,
    }
]

function Home() {

    return (
        <div id="MAIN_MENU" className='container'>
            <div className='container'>

                {/* 1. CATEGORY - RESUABLE */}
                <header className="">

                    {/* SEARCH BAR */}
                    <div className="search-bar">
                        <input type="text" name="search" id="search" placeholder='Get some gas . . .' />
                        <div style={{ marginRight: '2vw' }}>
                            <FontAwesomeIcon icon={faSearch} style={{ textAlign: "left", margin: "0, 7vw", fontSize: "2vh" }} />
                        </div>
                    </div>

                    {/* CATEGORY SELECT  */}
                    <div className="category">
                        <h4 style={{ backgroundColor: "#FEBD6F", color: "#FFF" }}>Edibles</h4>
                        <h4>Flower</h4>
                        <h4>Concentrates</h4>
                        <h4>Bundles</h4>
                    </div>
                </header>

                <div className="" id="HOME">

                    <div className="home-label">
                        <FontAwesomeIcon icon={faFire} style={{ textAlign: "left", margin: "0, 7vw", fontSize: "2vh" }} />
                        <h2 style={{ margin: "0 2vw" }}>Hot Deals</h2>
                    </div>

                    {/* 2. HOT NOW - REUSABLE SLIDE - SUMMARY CARD - SPECIAL*/}
                    <ScrollMenu>
                        {sampleItems.map(item => {
                            return (
                                <div key={item.id} className="hot-item-container">
                                    <HotItem data={item} />
                                </div>
                            )
                        })}
                    </ScrollMenu>

                    <div className="home-label">
                        <FontAwesomeIcon icon={faCannabis} style={{ textAlign: "left", margin: "0, 7vw", fontSize: "2vh" }} />
                        <h2 style={{ margin: "0 2vw" }}>Flower Menu</h2>
                    </div>

                    {/* 3. STRAINS - REUSABLE LIST - SUMMARY*/}
                    <ProductList data={sampleItems} />

                </div>

            </div>
        </div>
    );
}

export default Home;
