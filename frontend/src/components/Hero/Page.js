import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center">

                {/* Text */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                        Discover Your Style
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Shop the latest trends in fashion and electronics at ShopNexus.
                    </p>
                    <Link
                        href="/shop"
                        className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600"
                    >
                        Shop Now
                    </Link>
                </div>

                {/* Image */}
                <div className="md:w-1/2 mt-8 md:mt-0 relative w-full h-80 md:h-96">
                    <Image
                        src="https://www.webx.pk/images/Article/how-to-create-ecommerce-banners-40-191022112504.jpg"
                        alt="ShopNexus Banner"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
