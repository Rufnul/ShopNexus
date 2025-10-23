"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function LoginPage() {
    const initialValues = { email: "", password: "" };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(/[a-z]/, "Password must contain at least 1 lowercase letter")
            .matches(/[A-Z]/, "Password must contain at least 1 uppercase letter")
            .matches(/\d/, "Password must contain at least 1 number")
            .matches(/[@$!%*?&]/, "Password must contain at least 1 special character"),
    });

    const onSubmit = (values) => {
        console.log("Login Data:", values);
        // Call login API here
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* Login Form */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Login</h1>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className="space-y-4 bg-white p-8 rounded-lg shadow-md max-w-md">

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

                                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
                                    <button
                                        type="submit"
                                        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 w-full md:w-auto"
                                    >
                                        Login
                                    </button>
                                    <a
                                        href="/signup"
                                        className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 text-center w-full md:w-auto"
                                    >
                                        Sign Up
                                    </a>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <p className="text-gray-600 mt-4 text-sm">
                        Don’t have an account? <a href="/signup" className="text-red-500 hover:underline">Sign up here</a>
                    </p>
                </div>

                {/* Quote */}
                <div className="hidden md:flex flex-col justify-center items-start bg-gray-50 p-8 rounded-lg">
                    <blockquote className="text-2xl italic text-gray-700 mb-4">
                        &quot;Sign in to access exclusive deals and your personalized shopping experience.&quot;
                    </blockquote>
                    <p className="text-gray-600">— ShopNexus Team</p>
                </div>
            </div>
        </div>
    );
}
