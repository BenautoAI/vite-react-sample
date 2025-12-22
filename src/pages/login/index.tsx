import { useState } from "react";

interface LoginPageProps {}

function LoginPage(props: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
    // Add login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]">
      <div className="login__container w-full max-w-md p-8 bg-white rounded-lg shadow-2xl">
        <div className="login__header mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="login__form">
          <div className="form__group mb-6">
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full px-4 py-3
                rounded-lg
                border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all
              "
              placeholder="you@example.com"
            />
          </div>

          <div className="form__group mb-6">
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="
                w-full px-4 py-3
                rounded-lg
                border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all
              "
              placeholder="Enter your password"
            />
          </div>

          <div className="form__options flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a 
              href="#" 
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="
              w-full py-3
              rounded-lg
              bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#1D4ED8]
              text-white font-semibold
              hover:shadow-lg hover:scale-[1.02]
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            "
          >
            Sign In
          </button>
        </form>

        <div className="login__footer mt-8 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
