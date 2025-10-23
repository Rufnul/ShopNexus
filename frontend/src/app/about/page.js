export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
            {/* Left - Content */}
            <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">About Us</h1>
                <p className="text-gray-600 mb-4">
                    ShopNexus is dedicated to providing the best shopping experience with quality products across fashion, electronics, and more.
                </p>
                <p className="text-gray-600">
                    Our mission is to make online shopping seamless, enjoyable, and trustworthy for all our customers.
                </p>
            </div>
            {/* Right - Quote */}
            <div className="hidden md:flex flex-col justify-center items-start bg-red-50 p-8 rounded-lg">
                <blockquote className="text-2xl italic text-gray-700 mb-4">
                    &quot;We are committed to delivering happiness with every order.&quot;
                </blockquote>
                <p className="text-gray-600">— ShopNexus Team</p>
            </div>
        </div>
    );
}
