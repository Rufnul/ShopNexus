const reviews = [
    { name: "Alice", text: "Great products and fast delivery!", rating: 5 },
    { name: "Bob", text: "Amazing quality. Highly recommended.", rating: 4 },
    { name: "Clara", text: "Excellent customer service.", rating: 5 },
    { name: "Clark", text: "Excellent service by ShopNexus.", rating: 4 },
    { name: "Kent", text: "Amazing Service from ShopNexus.", rating: 5 },
    { name: "Barry", text: "Excellent Shopping Experience on ShopNexus.", rating: 4 },
];

const Testimonials = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div key={review.name} className="bg-gray-700 p-6 shadow rounded-br-3xl rounded-tl-3xl rounded-bl-xl rounded-tr-xl hover:shadow-[4px_4px_40px_crimson] transition-all">
                            <p className="text-gray-600 mb-4 text-white">&quot;{review.text}&quot;</p>
                            <h3 className="font-bold text-[goldenrod]">{review.name}</h3>
                            <p className="text-yellow-400">{"★".repeat(review.rating)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
