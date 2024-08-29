// src/app/page.js
"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/dashboard');
  };

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-black flex items-center justify-center">
      <div className="w-full max-w-4xl flex rounded-lg shadow-lg bg-white dark:bg-black">
        {/* Left Column */}
        <div className="w-full lg:w-6/12 p-8 flex flex-col justify-center bg-neutral-50 dark:bg-black">
          <div>
            <h2 className="mb-5 text-4xl font-semibold text-neutral-800 dark:text-neutral-200">
              Hello, Digital Fortress
            </h2>
            <p className="mb-10 text-neutral-600 dark:text-neutral-400">
              Log in to platform to start creating magic.
            </p>
          </div>

          <form>
            <div className="relative mb-4">
              <input
                type="text"
                className="block w-full border-2 rounded bg-transparent px-3 py-[0.32rem] dark:border-neutral-600 dark:text-neutral-200"
                id="exampleFormControlInput1"
                placeholder="Username"
              />
            </div>

            <div className="relative mb-8">
              <input
                type="password"
                className="block w-full border-2 rounded bg-transparent px-3 py-[0.32rem] dark:border-neutral-600 dark:text-neutral-200"
                id="exampleFormControlInput11"
                placeholder="Password"
              />
            </div>

            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black dark:bg-neutral-600"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-neutral-800 dark:text-neutral-200">
                  Remember me
                </label>
              </div>
              <a href="#!" className="text-sm text-white hover:underline dark:text-primary-400">
                Forgot Password?
              </a>
            </div>

            <div className="mb-12">
              <button
                className="w-full bg-[#b6f09c] rounded px-6 py-2 text-black font-medium transition duration-150 ease-in-out hover:bg-[#a8e68d]"
                onClick={handleLogin}
                type="button"
              >
                Log in
              </button>
            </div>

            <div className="flex justify-center items-center">
              <p className="mb-0 text-sm text-gray-500">Don't have an account?</p>
              <button
                type="button"
                className="ml-2 text-xs text-white font-medium text-danger hover:text-danger-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        {/* Right Column */}
        <div className="relative w-full lg:w-6/12 h-full flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/assets/img/bg.png"
              width={700}
              height={700}
              objectFit="cover"
              alt="login"
            />
          </div>

          <div className="absolute bottom-0 right-0 p-8">
            <p className="text-base font-light text-neutral-800 dark:text-neutral-200 mb-4">
              Digital Fortress has been a game-changer for our content creation process.
            </p>
            <p className="text-base font-light text-neutral-800 dark:text-neutral-200 mb-4">
              The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.
            </p>
            <p className="text-[13px] font-light text-neutral-800 dark:text-neutral-200 mb-2">
              Lily Alisson
            </p>
            <p className="text-[10px] font-light text-neutral-800 dark:text-neutral-200">
              <span className="text-[#b6f09c]">CMO at Digital Fortress</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
