import React, { useState } from 'react';
import '../components/menu/menu.css';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import HotItem from '../components/menu/HotItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faCannabis, faSearch } from '@fortawesome/free-solid-svg-icons';
import pic from "../assets/img/product/flower/bigs/dry-bud.png";
import edibles from "../assets/img/product/edibles/cherry1.png";
import conc from "../assets/img/product/concentrates/wax.png";
import ProductList from '../components/menu/ProductList';
import { NavLink } from 'react-router-dom';
import Search from '../components/nav/Search';
import ConcentrateHotItem from '../components/product/ConcentrateHotItem';

const prices =
{
    base: 2.31,
    five_lb: 2.29,
    ten_lb: 2.28,
    twenty_lb: 2.26,
    fifty_plus: "CALL TO ASK"
}

const FLOWER = [
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
    },
]

const EDIBLES = [
    {
        id: 6,
        photo: edibles,
        category: "EDIBLES",
        strain_name: "Sour Green Apple",
        strain: "HYBRID",
        mg: 100,
        thc: "29%",
        terps: "1.9%",
        uom: "each",
        qty: 7500,
        prices: prices,
    }
]

const BUNDLES = []

const CONCENTRATES = [
    {
        id: 5,
        photo: conc,
        category: "CONCENTRATES",
        strain_name: "ALIEN OG",
        strain: "HYBRID",
        thc: "29%",
        terps: "1.9%",
        uom: "G",
        qty: 7500,
        prices: prices,
    }
]

function Home() {

    const [category, setCategory] = useState("EDIBLES");

    const data = category == "CONCENTRATES" ? CONCENTRATES : category == "EDIBLES" ? EDIBLES : category == "FLOWER" ? FLOWER : BUNDLES;

    return (
        <div id="MAIN_MENU" className='container'>
            <div className='container'>

                {/* 1. CATEGORY - RESUABLE */}
                <Search handleToggle={setCategory} />

                <div className="" id="HOME">

                    <div className="home-label">
                        <FontAwesomeIcon icon={faFire} style={{ textAlign: "left", margin: "0, 7vw", fontSize: "2vh" }} />
                        <h2 style={{ margin: "0 2vw" }}>Hot Deals</h2>
                    </div>

                    {/* 2. HOT NOW - REUSABLE SLIDE - SUMMARY CARD - SPECIAL*/}
                    <ScrollMenu>
                        {data.map(item => {
                            return (
                                <div key={item.id} className="hot-item-container">
                                    <NavLink to={`/${item.category}/${item.strain_name}`}>
                                        {item.category == "FLOWER" ? <HotItem data={item} /> : <ConcentrateHotItem data={item} />}
                                    </NavLink>
                                </div>
                            )
                        })}
                    </ScrollMenu>

                    <div className="home-label">
                        <FontAwesomeIcon icon={faCannabis} style={{ textAlign: "left", margin: "0, 7vw", fontSize: "2vh" }} />
                        <h2 style={{ margin: "0 2vw" }}>Flower Menu</h2>
                    </div>

                    {/* 3. STRAINS - REUSABLE LIST - SUMMARY*/}
                    <ProductList data={data} />

                </div>

            </div>
        </div >
    );
}

export default Home;
