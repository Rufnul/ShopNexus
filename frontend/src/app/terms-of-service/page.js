export default function TermsOfServicePage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Terms of Service</h1>
            <p className="text-gray-600 mb-4">
                By using ShopNexus, you agree to our terms and conditions outlined below.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Users must be 18 years or older</li>
                <li>All sales are final unless otherwise stated</li>
                <li>We reserve the right to modify terms at any time</li>
            </ul>
        </div>
    );
}
