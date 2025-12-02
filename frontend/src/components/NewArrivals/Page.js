import Link from "next/link";
import Image from "next/image";

const arrivals = [
    { name: "Summer Dress", price: "$70", image: "/images/arrival-1.jpg", link: "/shop/women" },
    { name: "Wireless Earbuds", price: "$50", image: "/images/arrival-2.jpg", link: "/shop/electronics" },
    { name: "Running Shoes", price: "$65", image: "/images/arrival-3.jpg", link: "/shop/men" },
    { name: "Backpack", price: "$40", image: "/images/arrival-4.jpg", link: "/shop/kids" },
];

const NewArrivals = () => {
    return (
       <div className="bg-gray-100">
         <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">New Arrivals</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {arrivals.map((item) => (
                    <div
                        key={item.name}
                        className="bg-white rounded-lg shadow hover:shadow-2xl transition-shadow"
                    >
                        <Link href={item.link}>
                            {/* Image Wrapper */}
                            <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="p-4 text-center">
                                <h3 className="font-bold text-gray-800">{item.name}</h3>
                                <p className="text-red-500 font-semibold">{item.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
       </div>
    );
};

export default NewArrivals;
