"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function SignupPage() {
    const initialValues = { name: "", email: "", password: "", confirmPassword: "" };

    const validationSchema = Yup.object({
        name: Yup.string().required("Full Name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(/[a-z]/, "Password must contain at least 1 lowercase letter")
            .matches(/[A-Z]/, "Password must contain at least 1 uppercase letter")
            .matches(/\d/, "Password must contain at least 1 number")
            .matches(/[@$!%*?&]/, "Password must contain at least 1 special character"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
    });

    const onSubmit = (values) => {
        console.log("Signup Data:", values);
        // Call signup API here
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* Signup Form */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Sign Up</h1>

                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {({ errors, touched }) => (
                            <Form className="space-y-4 bg-white p-8 rounded-lg shadow-md max-w-md">

                                <div>
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        className={`w-full border px-4 py-2 rounded focus:ring-2 focus:outline-none ${errors.name && touched.name ? "border-red-500 ring-red-200" : "border-gray-300"
                                            }`}
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className={`w-full border px-4 py-2 rounded focus:ring-2 focus:outline-none ${errors.email && touched.email ? "border-red-500 ring-red-200" : "border-gray-300"
                                            }`}
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div>
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className={`w-full border px-4 py-2 rounded focus:ring-2 focus:outline-none ${errors.password && touched.password ? "border-red-500 ring-red-200" : "border-gray-300"
                                            }`}
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div>
                                    <Field
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        className={`w-full border px-4 py-2 rounded focus:ring-2 focus:outline-none ${errors.confirmPassword && touched.confirmPassword ? "border-red-500 ring-red-200" : "border-gray-300"
                                            }`}
                                    />
                                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <button
                                    type="submit"
                                    className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 w-full md:w-auto"
                                >
                                    Sign Up
                                </button>
                            </Form>
                        )}
                    </Formik>

                    <p className="text-gray-600 mt-4 text-sm">
                        Already have an account? <a href="/login" className="text-red-500 hover:underline">Login</a>
                    </p>
                </div>

                {/* Quote */}
                <div className="hidden md:flex flex-col justify-center items-start bg-gray-50 p-8 rounded-lg">
                    <blockquote className="text-2xl italic text-gray-700 mb-4">
                        &quot;Join ShopNexus today and enjoy exclusive deals and a personalized shopping experience.&quot;
                    </blockquote>
                    <p className="text-gray-600">— ShopNexus Team</p>
                </div>
            </div>
        </div>
    );
}
