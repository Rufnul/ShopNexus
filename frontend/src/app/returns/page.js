export default function ReturnsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Returns</h1>
            <p className="text-gray-600 mb-4">
                If you are not satisfied with your purchase, you can return it within 30 days in original condition.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Ensure product is unused and in original packaging</li>
                <li>Include your receipt or order number</li>
                <li>Refunds are processed within 5 business days</li>
            </ul>
        </div>
    );
}
