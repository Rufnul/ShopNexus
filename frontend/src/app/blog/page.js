import BlogSection from "@/components/BlogSection/Page";

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* Left Side - Blog Posts */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Blog</h1>
          <BlogSection />
        </div>

        {/* Right Side - Quote / Info */}
        <div className="hidden md:flex flex-col justify-start items-start bg-gray-50 p-8 rounded-lg space-y-4">
          <blockquote className="text-2xl italic text-gray-700">
            &quot;Stay updated with the latest trends, shopping guides, and exclusive tips from ShopNexus.&quot;
          </blockquote>
          <p className="text-gray-600">
            Explore our curated articles to make the most out of your shopping experience.
          </p>
        </div>

      </div>
    </div>
  );
}
