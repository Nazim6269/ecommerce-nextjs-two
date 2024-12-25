"use client";

import Link from "next/link";
import SocialLogin from "../login/SocialLogin";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { doRegisterAction } from "@/app/actions";

const Register: React.FC<{}> = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(e.currentTarget);

      const res = await doRegisterAction(formData);

      if (res.success === false) {
        router.push("/login");
      } else {
        setError("Something went wrong ");
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
      <form className="mt-6" onSubmit={handleRegister}>
        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="cfpassword"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Re-enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 my-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
        >
          Register
        </button>

        <SocialLogin />

        {/* Additional Options */}
        <div className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link
            aria-label="go to login"
            href="/login"
            className="text-blue-500 hover:underline"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
