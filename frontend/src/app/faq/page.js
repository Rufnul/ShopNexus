export default function FAQPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">FAQ</h1>
            <ul className="space-y-4 text-gray-600">
                <li>
                    <strong>Q:</strong> How do I track my order?<br />
                    <strong>A:</strong> You can track your order in your account dashboard under "Orders".
                </li>
                <li>
                    <strong>Q:</strong> What is the return policy?<br />
                    <strong>A:</strong> Returns are accepted within 30 days of delivery in original condition.
                </li>
                <li>
                    <strong>Q:</strong> How can I contact support?<br />
                    <strong>A:</strong> Reach out via our <a href="/contact" className="text-red-500 hover:underline">Contact page</a>.
                </li>
            </ul>
        </div>
    );
}
