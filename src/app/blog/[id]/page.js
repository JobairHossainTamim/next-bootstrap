import Image from 'next/image';
import React from 'react'



const fetchProductDetail = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return response.json();
}


const Details = async ({ params }) => {

    const { id } = params

    const dataObj = await fetchProductDetail(id);

    return (
        <div className='mt-5 container d-flex flex-column justify-content-center align-items-center'>
            <div className="card">
                <div className="card-body">
                    {dataObj && dataObj.images && dataObj.images.length > 0 && (
                        <Image src={dataObj.images[0]} width={200} height={100} alt="image" />
                    )}
                    <h2>{dataObj.title}</h2>
                    <p>{dataObj.description}</p>
                </div>
            </div>

        </div>
    )
}

export default Details
