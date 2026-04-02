"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation schema
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  // API call function
  const sendMessageToBackend = async (values) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${API_URL}/api/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to send message");
    }

    return response.json();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Form */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Contact Us
          </h1>

          {/* Status Messages */}
          {submitStatus.message && (
            <div
              className={`mb-4 p-4 rounded ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={ContactSchema}
            onSubmit={async (values, { resetForm, setSubmitting }) => {
              setIsSubmitting(true);
              setSubmitStatus({ type: "", message: "" });

              try {
                const result = await sendMessageToBackend(values);

                // Success
                setSubmitStatus({
                  type: "success",
                  message:
                    result.message ||
                    "Message sent successfully! We'll get back to you soon.",
                });
                resetForm();

                // Clear success message after 5 seconds
                setTimeout(() => {
                  setSubmitStatus({ type: "", message: "" });
                }, 5000);
              } catch (error) {
                // Error
                setSubmitStatus({
                  type: "error",
                  message:
                    error.message ||
                    "Failed to send message. Please try again later.",
                });
              } finally {
                setIsSubmitting(false);
                setSubmitting(false);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-4 bg-white p-8 rounded-lg shadow-md max-w-md">
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={`w-full border ${
                      errors.name && touched.name
                        ? "border-red-500"
                        : "border-gray-300"
                    } px-4 py-2 rounded focus:ring-2 focus:ring-red-500 focus:outline-none`}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`w-full border ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } px-4 py-2 rounded focus:ring-2 focus:ring-red-500 focus:outline-none`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    className={`w-full border ${
                      errors.message && touched.message
                        ? "border-red-500"
                        : "border-gray-300"
                    } px-4 py-2 rounded h-32 focus:ring-2 focus:ring-red-500 focus:outline-none`}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 w-full md:w-auto transition-colors ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Right Side - Quote */}
        <div className="hidden md:flex flex-col justify-center items-start bg-red-100 p-8 rounded-4xl">
          <blockquote className="text-2xl italic text-[crimson] mb-4">
            &quot;Customer satisfaction is our top priority. We are always here
            to help you.&quot;
          </blockquote>
          <p className="text-gray-700">— ShopNexus Team</p>

          {/* Additional Contact Info */}
          <div className="mt-8 pt-6 border-t border-red-200 w-full">
            <h3 className="font-semibold text-gray-800 mb-3">
              Other Ways to Reach Us
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📧 Email: support@shopnexus.com</p>
              <p>📞 Phone: +1 (555) 123-4567</p>
              <p>⏰ Hours: Mon-Fri, 9AM - 6PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
