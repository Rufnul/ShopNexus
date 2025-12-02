import Image from "next/image";

const offers = [
  {
    title: "50% Off for Fashion Products",
    subtitle: "Limited Time Offer",
    image: "/images/offer-1.jpg",
  },
  {
    title: "Buy 1 Get 1 Free",
    subtitle: "Men's Clothing",
    image: "/images/offer-2.jpg",
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.title}
            className="rounded-lg overflow-hidden shadow hover:shadow-2xl transition-all bg-white"
          >
            {/* Text section */}
            <div className="p-4">
              <h3 className="text-2xl font-bold text-gray-800">{offer.title}</h3>
              <p className="text-gray-600">{offer.subtitle}</p>
            </div>

            {/* Image section */}
            <div className="relative w-full h-64">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
