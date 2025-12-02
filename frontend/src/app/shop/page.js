"use client"
import Link from "next/link";
import Image from "next/image";

const categories = [
    { name: "Men", href: "/shop/men", img: "/images/mens.jpg" },
    { name: "Women", href: "/shop/women", img: "/images/womens.jpg" },
    { name: "Kids", href: "/shop/kids", img: "/images/kids.jpg" },
    { name: "Electronics", href: "/shop/electronics", img: "/images/electronics.jpg" },
];

const ShopPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">

            {/* Hero / Banner */}
            <section className="bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Shop the Best Products</h1>
                    <p className="text-gray-600 mb-6">Discover fashion, electronics, and more. Find your perfect style at ShopNexus.</p>
                    <Link href="/shop" className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">Browse All</Link>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 relative w-full h-80 md:h-96">
                    <Image
                        src="https://www.webx.pk/images/Article/how-to-create-ecommerce-banners-40-191022112504.jpg"
                        alt="Shop Banner"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
            </section>

            {/* Categories */}
            <section>
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Shop by Category</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link key={category.name} href={category.href} className="relative group rounded-lg overflow-hidden shadow-lg">
                            <div className="relative w-full h-48">
                                <Image
                                    src={category.img}
                                    alt={category.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center font-semibold">
                                {category.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section>
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Products</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Example Products */}
                    {[1, 2, 3, 4].map((product) => (
                        <div key={product} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                            <div className="relative w-full h-48 mb-4">
                                <Image src={`https://via.placeholder.com/300x300?text=Product+${product}`} alt={`Product ${product}`} fill className="object-cover rounded" />
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">Product {product}</h3>
                            <p className="text-red-500 font-bold">$49.99</p>
                            <Link href={`/shop/product/${product}`} className="block mt-2 text-sm text-gray-600 hover:underline">View Details</Link>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default ShopPage;
