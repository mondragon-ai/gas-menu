import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'

function QRReeader() {
    const [data, setData] = useState("")

    return (
        <div>
            <QrReader
                onResult={(r, e) => {
                    if (r) {
                        setData(r.getText());
                        console.log(r)
                    } else {
                        console.log(e)
                    }
                }}
                className="qr-reader" />
            <p>{data}</p>
        </div>
    )
}

export default QRReeader