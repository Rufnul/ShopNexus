"use client";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Footer = () => {
  const initialValues = { email: "" };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Subscribed email:", values.email);
    alert(`Thank you for subscribing: ${values.email}`);
    resetForm();
  };

  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="font-bold mb-4">About</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/about" className="hover:text-red-500">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-red-500">Careers</Link></li>
            <li><Link href="/press" className="hover:text-red-500">Press</Link></li>
            <li><Link href="/sustainability" className="hover:text-red-500">Sustainability</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/contact" className="hover:text-red-500">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-red-500">FAQ</Link></li>
            <li><Link href="/shipping-delivery" className="hover:text-red-500">Shipping & Delivery</Link></li>
            <li><Link href="/returns" className="hover:text-red-500">Returns</Link></li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-bold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/shop/men" className="hover:text-red-500">Men</Link></li>
            <li><Link href="/shop/women" className="hover:text-red-500">Women</Link></li>
            <li><Link href="/shop/kids" className="hover:text-red-500">Kids</Link></li>
            <li><Link href="/shop/electronics" className="hover:text-red-500">Electronics</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-bold mb-4">Connect</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col space-y-2">
                <Field
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className={`px-2 py-1 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.email && touched.email ? "border-2 border-yellow-300" : ""
                    }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-yellow-300 text-sm"
                />
                <button
                  type="submit"
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Subscribe
                </button>
              </Form>
            )}
          </Formik>
          <div className="flex space-x-3 mt-4">
            <Link href="https://www.facebook.com/rufnul.afrideen/" target="_blank" className="hover:text-red-500">Facebook</Link>
            <Link href="https://www.instagram.com/rufnul/" target="_blank" className="hover:text-red-500">Instagram</Link>
            <Link href="#" target="_blank" className="hover:text-red-500">Twitter</Link>
            <Link href="https://www.linkedin.com/in/rufnulafrideen/" target="_blank" className="hover:text-red-500">LinkedIn</Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-gray-400 text-sm py-4 text-center">
        <p>
          © 2025 ShopNexus. All rights reserved. &nbsp;|&nbsp;
          <Link href="/privacy-policy" className="hover:text-red-500">Privacy Policy</Link> |
          <Link href="/terms-of-service" className="hover:text-red-500">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
