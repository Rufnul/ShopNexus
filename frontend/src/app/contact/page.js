"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactPage() {
    // Validation schema
    const ContactSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* Left Side - Form */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>

                    <Formik
                        initialValues={{ name: "", email: "", message: "" }}
                        validationSchema={ContactSchema}
                        onSubmit={(values, { resetForm }) => {
                            console.log("Form data", values);
                            alert("Message sent successfully!");
                            resetForm();
                        }}
                    >
                        {() => (
                            <Form className="space-y-4 bg-white p-8 rounded-lg shadow-md max-w-md">

                                <div>
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-red-500 focus:outline-none"
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-red-500 focus:outline-none"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div>
                                    <Field
                                        as="textarea"
                                        name="message"
                                        placeholder="Message"
                                        className="w-full border border-gray-300 px-4 py-2 rounded h-32 focus:ring-2 focus:ring-red-500 focus:outline-none"
                                    />
                                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <button
                                    type="submit"
                                    className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 w-full md:w-auto"
                                >
                                    Send Message
                                </button>

                            </Form>
                        )}
                    </Formik>
                </div>

                {/* Right Side - Quote */}
                <div className="hidden md:flex flex-col justify-center items-start bg-red-50 p-8 rounded-lg">
                    <blockquote className="text-2xl italic text-gray-700 mb-4">
                        "Customer satisfaction is our top priority. We are always here to help you."
                    </blockquote>
                    <p className="text-gray-600">— ShopNexus Team</p>
                </div>

            </div>
        </div>
    );
}
