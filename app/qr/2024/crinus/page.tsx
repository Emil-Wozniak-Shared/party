import React from 'react';
import Image from "next/image";
import Logo from '@/public/static/images/steam-icon.png'

const Page = () => {
    return (
        <div className="flex justify-center m-auto p-24">
            <div className="content-center">
                <Image src={Logo} alt="steam icon" width={100} height={100}/>
                <h2 className="text-2xl p-4 text-center">Kod:</h2>
                <p className="text-base p-4 text-center" >003GI-502GB-E5AD2</p>
            </div>
        </div>
    );
};

export default Page;