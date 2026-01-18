import { useState, FormEvent } from 'react';

interface LoginFormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful login
      console.log('Login successful:', formData);
      
      // Here you would typically:
      // 1. Call your authentication API
      // 2. Store auth token
      // 3. Redirect to dashboard
      
    } catch (error) {
      setErrors({
        general: 'Login failed. Please check your credentials and try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="
      login__container
      min-h-screen 
      flex 
      items-center 
      justify-center 
      p-4
    ">
      <div className="
        login__wrapper
        w-full 
        max-w-md
      ">
        <div className="
          login__card
          bg-white 
          dark:bg-[#1a1a1a] 
          rounded-lg 
          shadow-lg 
          p-8
        ">
          
          {/* Header */}
          <div className="
            login__header
            text-center 
            mb-8
          ">
            <h1 className="
              login__title
              text-3xl 
              font-bold 
              mb-2
            ">this is Fei!</h1>
            <p className="
              login__subtitle
              text-gray-600 
              dark:text-gray-400
            ">
              Please sign in to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="
            login__form
            space-y-6
          ">
            
            {/* General Error */}
            {errors.general && (
              <div className="
                login__error
                bg-red-100 
                dark:bg-red-900/30 
                border 
                border-red-400 
                dark:border-red-800 
                text-red-700 
                dark:text-red-400 
                px-4 
                py-3 
                rounded 
                relative
              ">
                <span className="block sm:inline">{errors.general}</span>
              </div>
            )}

            {/* Email Field */}
            <div className="login__field">
              <label 
                htmlFor="email" 
                className="
                  login__label
                  block 
                  text-sm 
                  font-medium 
                  mb-2
                "
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`
                  w-full px-4 py-3 rounded-lg
                  bg-gray-50 dark:bg-[#242424]
                  border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}
                  focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600
                  transition-colors
                `}
                placeholder="Enter your email"
                disabled={isLoading}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="login__field">
              <label 
                htmlFor="password" 
                className="
                  login__label
                  block 
                  text-sm 
                  font-medium 
                  mb-2
                "
              >
                Password
              </label>
              <div className="
                login__input-wrapper
                relative
              ">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`
                    w-full px-4 py-3 rounded-lg pr-12
                    bg-gray-50 dark:bg-[#242424]
                    border ${errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}
                    focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600
                    transition-colors
                  `}
                  placeholder="Enter your password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <span className="text-sm">Hide</span>
                  ) : (
                    <span className="text-sm">Show</span>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="
              login__options
              flex 
              items-center 
              justify-between
            ">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm">Remember me</span>
              </label>
              <a 
                href="#" 
                className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full py-3 px-4 rounded-lg
                font-medium text-white
                ${isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                }
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              `}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg 
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    />
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="
            login__footer
            mt-6 
            text-center
          ">
            <p className="
              text-sm 
              text-gray-600 
              dark:text-gray-400
            ">
              Don't have an account?{' '}
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                Sign up
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;
