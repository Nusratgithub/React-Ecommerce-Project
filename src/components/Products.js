import React from 'react'
import { store } from "../productsStore/Store";
import OurBestSellers from './OurBestSellers';

const Products = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {store.map(((item) => {
                if (item.type === "ourBestSellers") {
                    return (

                        <OurBestSellers
                            key={item.id}
                            id={item.id}
                            title={item.name}
                            price={item.price}
                            image={item.primaryImage}
                        />
                    )

                }

            }))}
        </div>
    )
}

export default Products