import React from 'react';

function SideScroll(props) {
    return (
        <div className="">
            <div className="hot-now side-scroll container">
                {/* ITEM LIST*/}
                ITEM-TEST

                ITEM-TEST

                ITEM-TEST

                ITEM-TEST

                ITEM-TEST
                {props.children}
            </div>
        </div>
    )
}

export default SideScroll;
