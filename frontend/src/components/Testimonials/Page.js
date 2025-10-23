const reviews = [
    { name: "Alice", text: "Great products and fast delivery!", rating: 5 },
    { name: "Bob", text: "Amazing quality. Highly recommended.", rating: 4 },
    { name: "Clara", text: "Excellent customer service.", rating: 5 },
];

const Testimonials = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div key={review.name} className="bg-white p-6 rounded-lg shadow">
                            <p className="text-gray-600 mb-4">&quot;{review.text}&quot;</p>
                            <h3 className="font-bold text-gray-800">{review.name}</h3>
                            <p className="text-yellow-400">{"★".repeat(review.rating)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
