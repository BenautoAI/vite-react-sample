import { useState, FormEvent } from 'react';

function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate authentication (replace with actual API call)
    setTimeout(() => {
      console.log('Login attempt:', { email, password });
      setIsLoading(false);
      // Handle successful login here
    }, 1500);
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login__container flex items-center justify-center min-h-screen">
      <div className="
        login__card 
        w-full 
        max-w-md 
        p-8 
        rounded-lg 
        bg-gradient-to-br 
        from-gray-800 
        to-gray-900 
        shadow-2xl
      ">
        
        <div className="login__header text-center mb-8">
          <h1 className="header__title text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="header__subtitle text-gray-400">Please login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="login__form flex flex-col space-y-6">
          
          {error && (
            <div className="
              error__message 
              p-3 
              rounded 
              bg-red-500 
              bg-opacity-20 
              border 
              border-red-500 
              text-red-400 
              text-sm
            ">
              {error}
            </div>
          )}

          <div className="form__group">
            <label htmlFor="email" className="form__label block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="
                w-full 
                px-4 
                py-3 
                rounded-lg 
                bg-gray-700 
                border 
                border-gray-600 
                text-white 
                placeholder-gray-400
                focus:outline-none 
                focus:border-blue-500 
                focus:ring-2 
                focus:ring-blue-500 
                focus:ring-opacity-50
                transition-all
              "
              disabled={isLoading}
            />
          </div>

          <div className="form__group">
            <label htmlFor="password" className="form__label block text-sm font-medium mb-2">
              Password
            </label>
            <div className="form__input-wrapper relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="
                  w-full 
                  px-4 
                  py-3 
                  rounded-lg 
                  bg-gray-700 
                  border 
                  border-gray-600 
                  text-white 
                  placeholder-gray-400
                  focus:outline-none 
                  focus:border-blue-500 
                  focus:ring-2 
                  focus:ring-blue-500 
                  focus:ring-opacity-50
                  transition-all
                "
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="
                  form__toggle-button 
                  absolute 
                  right-3 
                  top-1/2 
                  transform 
                  -translate-y-1/2 
                  text-gray-400 
                  hover:text-white 
                  focus:outline-none
                  transition-colors
                "
                disabled={isLoading}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon__eye-off w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon__eye w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="form__actions flex flex-row items-center justify-between text-sm">
            <label className="form__remember flex flex-row items-center cursor-pointer">
              <input
                type="checkbox"
                className="
                  form__checkbox 
                  w-4 
                  h-4 
                  rounded 
                  border-gray-600 
                  bg-gray-700 
                  text-blue-500 
                  focus:ring-blue-500 
                  focus:ring-2 
                  focus:ring-opacity-50
                "
              />
              <span className="form__remember-text ml-2 text-gray-400">Remember me</span>
            </label>
            <a href="#" className="form__forgot-link text-blue-400 hover:text-blue-300 transition-colors">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="
              form__submit 
              w-full 
              py-3 
              rounded-lg 
              font-semibold 
              bg-gradient-to-r 
              from-blue-500 
              to-purple-600 
              hover:from-blue-600 
              hover:to-purple-700 
              disabled:opacity-50 
              disabled:cursor-not-allowed
              transition-all
              duration-300
              flex
              flex-row
              items-center
              justify-center
            "
          >
            {isLoading ? (
              <>
                <svg className="icon__spinner animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <div className="login__footer text-center mt-6 text-sm text-gray-400">
          Don't have an account?{' '}
          <a href="#" className="footer__signup-link text-blue-400 hover:text-blue-300 transition-colors font-medium">
            Sign up
          </a>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;
