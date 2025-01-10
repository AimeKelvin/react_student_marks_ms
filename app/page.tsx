import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Main Section */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 lg:px-24">
        <header className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 sm:px-12 lg:px-24">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">AcademiaPro</div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
            <a href="#about" className="hover:text-gray-900 transition">About</a>
            
          </nav>

          {/* Call to Action */}
          <button className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
            Get Started
          </button>
        </header>

        {/* Hero Section */}
        <main className="flex flex-col items-center text-center mt-20 sm:mt-32 lg:mt-40">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 max-w-3xl">
           School Management made simple with Academia<span className="text-orange-600">Pro</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl">
            The ultimate platform for management, .
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 flex space-x-4">
            <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 transition">
              Learn More
            </button>
          </div>
        </main>

      </div>

      {/* Footer */}
      <footer className="relative mt-16 sm:mt-24 py-8 bg-gray-100 text-center">
        <p className="text-sm text-gray-500">
          © 2024 AcademiaPro. A project in dev by Aime Kelvin.
        </p>
      </footer>
    </>
  );
}