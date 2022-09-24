import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({ increaseCart }) => {

    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    return (
        <div className='mt-4'>
            <h1 className='text-6xl text-center text-cyan-600 font-bold mt-4 '>Welcome to Fake Gun Store</h1>
            <div className=' mt-4 w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                {
                    guns.map(gun => (<SingleGun gun={gun} increaseCart={increaseCart} />))
                }
            </div>
        </div>

    );
};

export default AllGun;