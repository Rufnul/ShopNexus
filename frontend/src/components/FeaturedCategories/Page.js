import Link from "next/link";
import Image from "next/image";

const categories = [
    { name: "Men", image: "/images/category-1.jpg", link: "/shop/men" },
    { name: "Women", image: "/images/category-2.jpg", link: "/shop/women" },
    { name: "Kids", image: "/images/category-3.jpg", link: "/shop/kids" },
    { name: "Electronics", image: "/images/category-4.jpg", link: "/shop/electronics" },
];

const FeaturedCategories = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Shop by Category</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((cat) => (
                    <Link
                        key={cat.name}
                        href={cat.link}
                        className="relative group overflow-hidden rounded-lg"
                    >
                        {/* Image container */}
                        <div className="relative w-full h-48">
                            <Image
                                src={cat.image}
                                alt={cat.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-500">
                            <h3 className="text-white text-xl font-bold">{cat.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default FeaturedCategories;
