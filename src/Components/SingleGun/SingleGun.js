import React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
    const { gun, increaseCart } = props;

    console.log(gun)
    const { action, bullet, capacity, img, name, price } = gun;
    const [modalData, setModalData] = useState({});
    return (
        <div>
            <div className=" card w-full h-full bg-base-100 shadow-xl">
                <figure><img className='w-96 h-44' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <div className="badge badge-outline">{action}</div>
                        <div className="badge badge-outline">{bullet}</div>
                        <div className='mt-4'>
                            <button onClick={() => increaseCart()} className="btn btn-sm btn-secondary mr-2">Cart</button>
                            {/* <button className="btn btn-sm btn-success">Details</button> */}
                            <label onClick={() => setModalData(gun)} htmlFor="my-modal-3" className="btn modal-button btn-sm btn-success">open modal</label>
                        </div>

                    </div>

                </div>
                {modalData && (<Modal data={modalData} setModalData={setModalData}></Modal>)}
            </div>

        </div>
    );
};

export default SingleGun;