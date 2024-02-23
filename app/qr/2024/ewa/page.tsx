import React from 'react';
import {PDFCanvas} from "@/app/_components/PDFCanvas";

const Ewa = () => {
    return (
        <>
            {/*<embed src="http://localhost:3000/static/2394_Voucher.pdf" width="100%" height="1980px"/>*/}
            <PDFCanvas file="2394_Voucher.pdf" />
        </>
    );
};

export default Ewa;