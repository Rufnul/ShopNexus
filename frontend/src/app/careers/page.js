export default function CareersPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Careers</h1>
                <p className="text-gray-600 mb-4">
                    Join our team and be part of a dynamic company focused on innovation and customer satisfaction.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Software Development</li>
                    <li>Marketing</li>
                    <li>Customer Support</li>
                    <li>Logistics</li>
                </ul>
                <p className="text-gray-600 mt-4">Apply today and help us make a difference!</p>
            </div>
            <div className="hidden md:flex flex-col justify-center items-start bg-red-50 p-8 rounded-lg">
                <blockquote className="text-2xl italic text-gray-700 mb-4">
                    &quot;We grow together as a team.&quot;
                </blockquote>
                <p className="text-gray-600">— ShopNexus HR</p>
            </div>
        </div>
    );
}
