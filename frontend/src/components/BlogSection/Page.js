import Link from "next/link";
import Image from "next/image";

const posts = [
  { title: "Top 10 Summer Trends", link: "#", image: "/images/blog-1.jpg" },
  { title: "How to Style Sneakers", link: "#", image: "/images/blog-2.jpg" },
  { title: "Electronics Buying Guide", link: "#", image: "/images/blog-3.jpg" },
];

const BlogSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">From Our Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.title}
            href={post.link}
            className="block rounded-lg overflow-hidden shadow hover:shadow-lg"
          >
            <div className="relative w-full h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800">{post.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
