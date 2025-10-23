import Image from "next/image";

const offers = [
    { title: "50% Off for Fashion Products", subtitle: "Limited Time Offer", image: "/images/offer-1.jpg" },
    { title: "Buy 1 Get 1 Free", subtitle: "Men's Clothing", image: "/images/offer-2.jpg" },
];

const SpecialOffers = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {offers.map((offer) => (
                    <div
                        key={offer.title}
                        className="relative rounded-lg overflow-hidden group shadow hover:shadow-lg transition-all"
                    >
                        {/* Image wrapper */}
                        <div className="relative w-full h-64">
                            <Image
                                src={offer.image}
                                alt={offer.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Overlay text */}
                        <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-start p-6">
                            <h3 className="text-black text-2xl font-bold">{offer.title}</h3>
                            <p className="text-black">{offer.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SpecialOffers;
