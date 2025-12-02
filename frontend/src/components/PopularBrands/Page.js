import Image from "next/image";

const brands = [
    "https://e7.pngegg.com/pngimages/445/767/png-clipart-logo-nike-brand-swoosh-adidas-nike-logo-sneakers.png",
    "https://vectorseek.com/wp-content/uploads/2023/10/Adidas-Originals-red-Logo-Vector.svg-.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1k1YaG_pS3K4cBR0dcN_vsIf2RUIkgUi_fA&s",
    "https://skgusa.com/cdn/shop/files/samsung_2x_222882d1-10bd-4ea6-a8a2-f66ad5ee31eb.png?v=1715711139&width=3000",
];

const PopularBrands = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Popular Brands</h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
                {brands.map((brand, index) => (
                    <div key={index} className="relative w-40 h-16 hover:shadow-2xl hover:transition rounded-b-2xl">
                        <Image
                            src={brand}
                            alt={`Brand ${index + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularBrands;
