// "use client"
// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Lock, Mail } from "lucide-react";

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <Card className="max-w-md w-full shadow-lg">
//         <CardContent className="p-6">
//           <h2 className="text-2xl font-bold text-center mb-4">Welcome!</h2>
//           <p className="text-center text-gray-500 mb-6">Sign in to your account</p>
//           <form>
//             <div className="mb-4">
//               <Input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full"
//                 icon={<Mail size={16} />}
//               />
//             </div>
//             <div className="mb-4">
//               <Input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full"
//                 icon={<Lock size={16} />}
//               />
//             </div>
//             <div className="flex items-center justify-between mb-6">
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span>Remember me?</span>
//               </label>
//               <a href="#" className="text-sm text-blue-500">Forgot Password?</a>
//             </div>
//             <Button type="submit" className="w-full bg-blue-500 text-white">
//               Login
//             </Button>
//           </form>
//           <div className="text-center mt-4">
//             <p className="text-sm">
//               Don’t have an account? <a href="#" className="text-blue-500">Sign Up</a>
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// // }
// "use client"

// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// // import { FaLock, FaEnvelope } from "react-icons/fa";
// import { FaLock, FaEnvelope } from "react-icons/fa";


// const LoginPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <Card className="w-full max-w-md shadow-xl">
//         <CardContent className="p-6">
//           <div className="text-center mb-6">
//             {/* <img src="image.png" alt="Illustration" className="mx-auto w-20 h-20 rounded-full" /> */}
//             <h1 className="text-2xl font-bold text-gray-800">Welcome!</h1>
//             <p className="text-gray-500">Sign in to your account</p>
//           </div>
//           <form>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-600 font-medium mb-1">
//                 Email
//               </label>
//               <div className="relative">
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   className="pl-10"
//                 />
//                 <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-gray-600 font-medium mb-1">
//                 Password
//               </label>
//               <div className="relative">
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Enter your password"
//                   className="pl-10"
//                 />
//                 <FaLock className="absolute top-3 left-3 text-gray-400" />
//               </div>
//             </div>
//             <div className="flex items-center justify-between mb-4">
//               <Checkbox id="remember-me" className="mr-2" />
//               <label htmlFor="remember-me" className="text-sm text-gray-600">
//                 Remember me?
//               </label>
//               <a href="#" className="text-sm text-blue-600 hover:underline">
//                 Forgot Password?
//               </a>
//             </div>
//             <Button type="submit" className="w-full bg-blue-600 text-white py-2">
//               Login
//             </Button>
//           </form>
//           <p className="text-center text-sm text-gray-500 mt-4">
//             Don’t have an account?{' '}
//             <a href="#" className="text-blue-600 hover:underline">
//               Sign Up
//             </a>
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default LoginPage;

// "use client"

// import React from "react";
// import dynamic from "next/dynamic";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { FaLock, FaEnvelope, FaSignInAlt } from "react-icons/fa";

// const LoginPageComponent = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <Card className="w-full max-w-3xl shadow-xl flex flex-row">
//         <CardContent className="p-6 w-1/2">
//           <div className="text-center mb-6">
//             <FaSignInAlt className="text-3xl text-blue-600 mx-auto mb-2" />
//             <h1 className="text-2xl font-bold text-gray-800">Welcome!</h1>
//             <p className="text-gray-500">Sign in to your account</p>
//           </div>
//           <form>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-600 font-medium mb-1">Email</label>
//               <div className="relative">
//                 <Input id="email" type="email" placeholder="Enter your email" className="pl-10" />
//                 <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-gray-600 font-medium mb-1">Password</label>
//               <div className="relative">
//                 <Input id="password" type="password" placeholder="Enter your password" className="pl-10" />
//                 <FaLock className="absolute top-3 left-3 text-gray-400" />
//               </div>
//             </div>
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <Checkbox id="remember-me" className="mr-2" />
//                 <label htmlFor="remember-me" className="text-sm text-gray-600">Remember me?</label>
//               </div>
//               <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
//             </div>
//             <Button type="submit" className="w-full bg-blue-600 text-white py-2">Login</Button>
//           </form>
//           <p className="text-center text-sm text-gray-500 mt-4">
//             Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
//           </p>
//         </CardContent>
//         <div className="w-1/2 hidden md:flex items-center justify-center bg-gray-200 rounded-r-xl">
//           <img src="/image.png" alt="Illustration" className="max-w-full h-auto" />
//         </div>
        

//       </Card>
//     </div>
//   );
// // };

// "use client";

// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { FaLock, FaEnvelope, FaSignInAlt } from "react-icons/fa";

// const LoginPageComponent = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <Card className="w-full max-w-4xl shadow-2xl flex flex-row h-[500px]">
//         <CardContent className="p-8 w-1/2 flex flex-col justify-center">
//           <div className="text-center mb-6">
//             <FaSignInAlt className="text-4xl text-blue-600 mx-auto mb-2" />
//             <h1 className="text-3xl font-bold text-gray-800">Welcome!</h1>
//             <p className="text-gray-500">Sign in to your account</p>
//           </div>
//           <form>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-600 font-medium mb-1">
//                 Email
//               </label>
//               <div className="relative">
//                 <Input id="email" type="email" placeholder="Enter your email" className="pl-10" />
//                 <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-gray-600 font-medium mb-1">
//                 Password
//               </label>
//               <div className="relative">
//                 <Input id="password" type="password" placeholder="Enter your password" className="pl-10" />
//                 <FaLock className="absolute top-3 left-3 text-gray-400" />
//               </div>
//             </div>
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <Checkbox id="remember-me" className="mr-2" />
//                 <label htmlFor="remember-me" className="text-sm text-gray-600">Remember me?</label>
//               </div>
//               <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
//             </div>
//             <Button type="submit" className="w-full bg-blue-600 text-white py-2">Login</Button>
//           </form>
//           <p className="text-center text-sm text-gray-500 mt-4">
//             Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
//           </p>
//         </CardContent>

//         {/* Right-side Image */}
//         <div className="w-1/2 flex items-center justify-center rounded-r-xl overflow-hidden">
//           <img src="/image.png" alt="Illustration" className="w-full h-full object-cover" />
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default LoginPageComponent;

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
              <Input id={id} type={type} placeholder={placeholder} className="pl-10" />
              <Icon className="absolute top-3 left-3 text-gray-400" />
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
        <img src="/image.png" alt="Illustration" className="w-full h-full object-cover" />
      </div>
    </Card>
  </div>
);

export default LoginPageComponent;
