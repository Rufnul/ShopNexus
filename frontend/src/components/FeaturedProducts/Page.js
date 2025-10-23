"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/products");
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error("Error fetching products:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
                Featured Products
            </h2>

            {loading ? (
                <p className="text-center text-gray-500">Loading products...</p>
            ) : products.length === 0 ? (
                <p className="text-center text-gray-500">No products found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                        >
                            <Link href={`/product/${product._id}`}>
                                <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="font-bold text-gray-800">{product.name}</h3>
                                    <p className="text-red-500 font-semibold">${product.price}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default FeaturedProducts;
