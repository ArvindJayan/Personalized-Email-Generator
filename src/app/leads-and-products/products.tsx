"use client";

import { useEffect, useState } from 'react';
import { getProducts } from '../lib/auth/getProducts';

export default function Products() {
    const [products, setProducts] = useState<{ id: string; desc: string; belongsToId: string; }[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            const products = await getProducts();
            setProducts(products);
        }
        fetchProducts();
    }, []);

    return (
        <div className='products text-lg border-2 border-gray-200 rounded-lg shadow m-3 p-3 pb-6 px-4 mb-96 md:max-h-max'>
            <h1 className='title font-semibold'>Product Information</h1>
            <p className='description text-sm text-gray-400'>Your product details email will be displayed here.</p>

            <div className='output-box text-gray-500 bg-gray-200 text-sm mt-11 mx-3 p-4 rounded-lg min-h-96 max-h-max'>
                {products.length === 0 ? (
                    `No products saved yet. Fill in the details and click on "Generate Email" to generate a personalized email and save your product information.`
                ) : (
                    <ul>
                        {products.map((product, index) => (
                            <li key={product.id}>{index + 1}. {product.desc}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}