import { useState, FormEvent } from 'react';

interface LoginFormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
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

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Login successful:', formData);
      // Handle successful login here
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="
      login-page__container
      min-h-screen 
      flex 
      items-center 
      justify-center 
      bg-green-500
    ">
      <div className="
        login-page__content
        w-full 
        max-w-md 
        px-8
      ">
        
        {/* Login Card */}
        <div className="
          login-card
          bg-white 
          rounded-lg 
          shadow-xl 
          p-8
        ">
          
          {/* Header */}
          <div className="
            login-card__header
            text-center 
            mb-8
          ">
            <div className="flex justify-center mb-4">
              <img 
                src="/vite.svg" 
                alt="Logo" 
                className="h-16 w-16"
                style={{ outline: '3px solid red' }}
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="
            login-card__form
            space-y-6
          ">
            
            {/* Email Field */}
            <div className="form__field">
              <label 
                htmlFor="email" 
                className="
                  form__label
                  block 
                  text-sm 
                  font-medium 
                  text-gray-700 
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
                  form__input
                  w-full
                  px-4
                  py-3
                  border
                  rounded-lg
                  text-gray-900
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  transition-all
                  ${errors.email 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  }
                `}
                placeholder="Enter your email"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="
                  form__error
                  mt-2 
                  text-sm 
                  text-red-600 
                  flex 
                  items-center
                ">
                  <span className="mr-1">⚠</span>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="form__field">
              <label 
                htmlFor="password" 
                className="
                  form__label
                  block 
                  text-sm 
                  font-medium 
                  text-gray-700 
                  mb-2
                "
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={`
                  form__input
                  w-full
                  px-4
                  py-3
                  border
                  rounded-lg
                  text-gray-900
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  transition-all
                  ${errors.password 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  }
                `}
                placeholder="Enter your password"
                disabled={isSubmitting}
              />
              {errors.password && (
                <p className="
                  form__error
                  mt-2 
                  text-sm 
                  text-red-600 
                  flex 
                  items-center
                ">
                  <span className="mr-1">⚠</span>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="
              form__options
              flex 
              items-center 
              justify-between
            ">
              <div className="
                form__remember
                flex 
                items-center
              ">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="
                    form__checkbox
                    h-4 
                    w-4 
                    text-blue-600 
                    focus:ring-blue-500 
                    border-gray-300 
                    rounded 
                    cursor-pointer
                  "
                />
                <label htmlFor="remember-me" className="
                  form__checkbox-label
                  ml-2 
                  block 
                  text-sm 
                  text-gray-700 
                  cursor-pointer
                ">
                  Remember me
                </label>
              </div>
              <a href="#" className="
                form__forgot-link
                text-sm 
                font-medium 
                text-blue-600 
                hover:text-blue-500
              ">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                form__submit-button
                w-full
                py-3
                px-4
                border
                border-transparent
                rounded-lg
                text-white
                font-medium
                transition-all
                ${isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                }
              `}
            >
              {isSubmitting ? (
                <span className="
                  button__content
                  flex 
                  items-center 
                  justify-center
                ">
                  <svg className="
                    button__spinner
                    animate-spin 
                    h-5 
                    w-5 
                    mr-3
                  " viewBox="0 0 24 24">
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                      fill="none"
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
            login-card__footer
            mt-6 
            text-center
          ">
            <p className="
              footer__text
              text-sm 
              text-gray-600
            ">
              Don't have an account?{' '}
              <a href="#" className="
                footer__link
                font-medium 
                text-blue-600 
                hover:text-blue-500
              ">
                Sign up
              </a>
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <p className="
          login-page__terms
          mt-8 
          text-center 
          text-sm 
          text-gray-400
        ">
          By signing in, you agree to our{' '}
          <a href="#" className="
            terms__link
            text-gray-300 
            hover:text-white
          ">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="
            terms__link
            text-gray-300 
            hover:text-white
          ">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
