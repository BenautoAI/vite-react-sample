import { useState, FormEvent } from 'react';

function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted', { email, password, rememberMe });
  };

  return (
    <div 
      className="
        login__container
        min-h-screen 
        bg-[#1a1a1a] 
        flex 
        items-center 
        justify-center 
        px-4
      "
    >
      <div className="login__content w-full max-w-md">
        {/* Header */}
        <div className="login__header text-center mb-12">
          <h1 
            className="
              login__title
              text-6xl 
              font-bold 
              mb-4 
              bg-gradient-to-r 
              from-[#6EE7B7] 
              via-[#3B82F6] 
              to-[#9333EA] 
              bg-clip-text 
              text-transparent
            "
          >
            Welcome Back
          </h1>
          <p className="login__subtitle text-gray-400 text-xl">
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="login__form space-y-6">
          {/* Email Field */}
          <div className="form__field">
            <label 
              htmlFor="email" 
              className="form__label block text-white text-lg mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="
                form__input
                w-full 
                px-6 
                py-4 
                bg-[#2a2a2a] 
                text-white 
                text-lg 
                rounded-xl 
                border 
                border-[#3a3a3a] 
                placeholder-gray-500 
                focus:outline-none 
                focus:border-[#3B82F6] 
                transition-colors
              "
              required
            />
          </div>

          {/* Password Field */}
          <div className="form__field">
            <label 
              htmlFor="password" 
              className="form__label block text-white text-lg mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="
                form__input
                w-full 
                px-6 
                py-4 
                bg-[#2a2a2a] 
                text-white 
                text-lg 
                rounded-xl 
                border 
                border-[#3a3a3a] 
                placeholder-gray-500 
                focus:outline-none 
                focus:border-[#3B82F6] 
                transition-colors
              "
              required
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div 
            className="
              form__options 
              flex 
              items-center 
              justify-between
            "
          >
            <label className="form__checkbox flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="
                  w-5 
                  h-5 
                  bg-[#2a2a2a] 
                  border 
                  border-[#3a3a3a] 
                  rounded 
                  cursor-pointer 
                  accent-[#3B82F6]
                "
              />
              <span className="ml-3 text-gray-400 text-base">Remember me</span>
            </label>
            <a 
              href="#forgot-password" 
              className="
                form__link
                text-[#3B82F6] 
                text-base 
                hover:text-[#60A5FA] 
                transition-colors
              "
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              form__submit
              w-full 
              py-4 
              text-white 
              text-xl 
              font-semibold 
              rounded-xl 
              bg-gradient-to-r 
              from-[#6EE7B7] 
              via-[#3B82F6] 
              to-[#9333EA] 
              hover:opacity-90 
              transition-opacity
            "
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="login__footer text-center mt-8">
          <p className="text-gray-400 text-base">
            Don't have an account?{' '}
            <a 
              href="#signup" 
              className="
                text-[#3B82F6] 
                hover:text-[#60A5FA] 
                transition-colors
              "
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
