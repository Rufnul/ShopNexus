"use client";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, message: "", type: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const initialValues = { email: "" };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const onSubmit = async (
    values,
    { resetForm, setSubmitting, setFieldError },
  ) => {
    setLoading(true);
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      // Validate API_URL exists
      if (!API_URL) {
        throw new Error("API URL is not configured");
      }

      const res = await fetch(`${API_URL}/api/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
        }),
      });

      // Check if response is JSON
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        // Handle HTML error response
        const text = await res.text();
        console.error("Non-JSON response:", text.substring(0, 200));
        throw new Error(
          "Server returned an error page. Please check the API endpoint.",
        );
      }

      const data = await res.json();

      if (res.ok) {
        console.log("Subscribed Success", data);
        resetForm();
        // Show success toast
        setToast({
          show: true,
          message:
            "🎉 Successfully subscribed! Thank you for joining ShopNexus!",
          type: "success",
        });
        // Optional: redirect after delay
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        console.error("Subscription Failed:", data.message);
        setToast({
          show: true,
          message: data.message || "Subscription failed. Please try again.",
          type: "error",
        });
        setFieldError("email", data.message || "Subscription failed");
      }
    } catch (err) {
      console.error("Subscription Error:", err);
      setToast({
        show: true,
        message: err.message || "Network error. Please try again.",
        type: "error",
      });
      setFieldError("email", err.message || "Network error. Please try again.");
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white mt-10">
      {/* Custom Toast Notification */}
      {toast.show && (
        <div className="fixed top-5 right-5 z-50 animate-slide-in">
          <div
            className={`rounded-lg shadow-lg p-4 min-w-[300px] max-w-md ${
              toast.type === "success"
                ? "bg-green-500 border-l-4 border-green-700"
                : "bg-red-500 border-l-4 border-red-700"
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                {toast.type === "success" ? (
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">{toast.message}</p>
              </div>
              <button
                onClick={() => setToast({ show: false, message: "", type: "" })}
                className="flex-shrink-0 text-white hover:text-gray-200 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="font-bold mb-4">About</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/about" className="hover:text-red-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-red-500">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/press" className="hover:text-red-500">
                Press
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="hover:text-red-500">
                Sustainability
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/contact" className="hover:text-red-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-red-500">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/shipping-delivery" className="hover:text-red-500">
                Shipping & Delivery
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-red-500">
                Returns
              </Link>
            </li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-bold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/shop/men" className="hover:text-red-500">
                Men
              </Link>
            </li>
            <li>
              <Link href="/shop/women" className="hover:text-red-500">
                Women
              </Link>
            </li>
            <li>
              <Link href="/shop/kids" className="hover:text-red-500">
                Kids
              </Link>
            </li>
            <li>
              <Link href="/shop/electronics" className="hover:text-red-500">
                Electronics
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-bold mb-4">To Connect With ShopNexus</h3>
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
                  disabled={loading}
                  className={`px-2 py-1 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    errors.email && touched.email
                      ? "border-2 border-yellow-300"
                      : ""
                  } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-yellow-300 text-sm"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </Form>
            )}
          </Formik>
          <div className="flex space-x-9 mt-6">
            <Link
              href="https://www.facebook.com/rufnul.afrideen/"
              target="_blank"
              className="hover:text-red-500 transition-colors"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/rufnul/"
              target="_blank"
              className="hover:text-red-500 transition-colors"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="hover:text-red-500 transition-colors"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rufnulafrideen/"
              target="_blank"
              className="hover:text-red-500 transition-colors"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-gray-400 text-sm py-4 text-center">
        <p>
          © 2025 ShopNexus. All rights reserved. &nbsp;|&nbsp;
          <Link href="/privacy-policy" className="hover:text-red-500">
            Privacy Policy
          </Link>{" "}
          |
          <Link href="/terms-of-service" className="hover:text-red-500">
            Terms of Service
          </Link>
        </p>
      </div>

      {/* Add custom CSS for animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
