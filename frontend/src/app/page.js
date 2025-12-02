import BlogSection from "@/components/BlogSection/Page";
import FeaturedCategories from "@/components/FeaturedCategories/Page";
import FeaturedProducts from "@/components/FeaturedProducts/Page";
import Hero from "@/components/Hero/Page";
import NewArrivals from "@/components/NewArrivals/Page";
import PopularBrands from "@/components/PopularBrands/Page";
import SpecialOffers from "@/components/SpecialOffers/Page";
import Testimonials from "@/components/Testimonials/Page";


export default function Home() {
  return (
    <div>
      <Hero />  {/* bg-gray-100 */}
      <FeaturedCategories />
      <FeaturedProducts />  {/* bg-gray-100 */}
      <SpecialOffers />
      <NewArrivals /> {/* bg-gray-100 */}
      <PopularBrands />
      <Testimonials />  {/* bg-gray-100 */}
      <BlogSection />
    </div>
  );
}
