"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FaLock, FaEnvelope, FaSignInAlt } from "react-icons/fa";

const LoginPageComponent = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <Card className="w-full max-w-4xl shadow-2xl flex flex-col md:flex-row h-auto md:h-[500px]">
      <CardContent className="p-6 md:p-8 w-full md:w-1/2 flex flex-col justify-center">
        <div className="text-center mb-6">
          <FaSignInAlt className="text-4xl text-blue-600 mx-auto mb-2" />
          <h1 className="text-3xl font-bold text-gray-800">Welcome!</h1>
          <p className="text-gray-500">Sign in to your account</p>
        </div>
        <form>
          {[
            { id: "email", type: "email", placeholder: "Enter your email", Icon: FaEnvelope },
            { id: "password", type: "password", placeholder: "Enter your password", Icon: FaLock },
          ].map(({ id, type, placeholder, Icon }) => (
            <div key={id} className="mb-4 relative">
              <label htmlFor={id} className="block text-gray-600 font-medium mb-1">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </label>
              <div className="relative">
                <Input id={id} type={type} placeholder={placeholder} className="pl-10" />
                <Icon className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Checkbox id="remember-me" className="mr-2" />
              <label htmlFor="remember-me">Remember me?</label>
            </div>
            <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
          </div>
          <Button type="submit" className="w-full bg-blue-600 text-white py-2">Login</Button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
        </p>
      </CardContent>

      <div className="w-full md:w-1/2 hidden md:flex items-center justify-center rounded-b-lg md:rounded-r-xl overflow-hidden">
        <img src="/login.avif" alt="Illustration" className="w-full h-full object-cover" />
      </div>
    </Card>
  </div>
);

export default LoginPageComponent;
