export default function ShippingDeliveryPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Shipping & Delivery</h1>
            <p className="text-gray-600 mb-4">
                We offer fast and reliable shipping options across the globe. Delivery times vary depending on your location.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Standard Shipping: 5-7 business days</li>
                <li>Express Shipping: 2-3 business days</li>
                <li>Free Shipping on orders above $100</li>
            </ul>
        </div>
    );
}
