import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search({ handleToggle }) {

    console.log(handleToggle);

    // const { setCategory } = handleToggle;

    function toggleCategory(e) {
        e.preventDefault();

        switch (e.target.id) {

            case "EDIBLES":
                handleToggle(e.target.id);
                console.log("EDIBLES");
                break;

            case "FLOWER":
                handleToggle(e.target.id);
                console.log("FLOWER");
                break;

            case "CONCENTRATES":
                handleToggle(e.target.id);
                console.log("CONCENTRATES");
                break;

            case "BUNDLES":
                handleToggle(e.target.id);
                console.log("BUNDLES");
                break;

            default:
                break;
        }
    }

    return (
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
                <h4 onClick={(e) => toggleCategory(e)} id="EDIBLES" style={{ backgroundColor: "#FEBD6F", color: "#FFF" }}>
                    Edibles
                </h4>
                <h4 onClick={(e) => toggleCategory(e)} id="FLOWER">
                    Flower
                </h4>
                <h4 onClick={(e) => toggleCategory(e)} id="CONCENTRATES">
                    Concentrates
                </h4>
                <h4 onClick={(e) => toggleCategory(e)} id="BUNDLES">
                    Bundles
                </h4>
            </div>
        </header>
    )
}

export default Search