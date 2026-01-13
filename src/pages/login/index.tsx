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
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Handle successful login here
      console.log('Login successful:', formData);
      
    } catch (error) {
      setErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="
      login__container
      flex 
      items-center 
      justify-center 
      min-h-screen 
      w-full
      bg-red-500
    ">
      <div className="
        login__card
        w-full 
        max-w-md 
        p-8 
        bg-[#1a1a1a] 
        rounded-2xl 
        shadow-2xl
        border
        border-[#333]
      ">
        <div className="login__header text-center mb-8">
          <h1 className="
            text-4xl 
            font-bold 
            mb-2
            bg-gradient-to-r 
            from-[#6EE7B7] 
            via-[#3B82F6] 
            to-[#9333EA]
            bg-clip-text
            text-transparent
          ">
            Welcome Back
          </h1>
          <p className="text-gray-400 text-sm">
            Sign in to continue to your account
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="login__form space-y-6">
          {errors.general && (
            <div className="
              login__error
              p-3 
              bg-red-500/10 
              border 
              border-red-500/50 
              rounded-lg 
              text-red-400 
              text-sm
            ">
              {errors.general}
            </div>
          )}

          <div className="login__field">
            <label 
              htmlFor="email" 
              className="
                block 
                text-sm 
                font-medium 
                text-gray-300 
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
                w-full 
                px-4 
                py-3 
                bg-[#2d2d2d] 
                border 
                ${errors.email ? 'border-red-500' : 'border-[#444]'}
                rounded-lg 
                text-white 
                placeholder-gray-500
                focus:outline-none 
                focus:border-[#3B82F6]
                focus:ring-2
                focus:ring-[#3B82F6]/20
                transition-all
              `}
              placeholder="you@example.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="login__field-error mt-1 text-sm text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div className="login__field">
            <label 
              htmlFor="password" 
              className="
                block 
                text-sm 
                font-medium 
                text-gray-300 
                mb-2
              "
            >
              Password
            </label>
            <div className="login__password-wrapper relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={`
                  w-full 
                  px-4 
                  py-3 
                  bg-[#2d2d2d] 
                  border 
                  ${errors.password ? 'border-red-500' : 'border-[#444]'}
                  rounded-lg 
                  text-white 
                  placeholder-gray-500
                  focus:outline-none 
                  focus:border-[#3B82F6]
                  focus:ring-2
                  focus:ring-[#3B82F6]/20
                  transition-all
                  pr-12
                `}
                placeholder="Enter your password"
                disabled={isSubmitting}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  login__password-toggle
                  absolute 
                  right-3 
                  top-1/2 
                  transform 
                  -translate-y-1/2
                  text-gray-400
                  hover:text-gray-300
                  focus:outline-none
                  transition-colors
                "
                disabled={isSubmitting}
              >
                {showPassword ? (
                  <span className="text-xl">👁️</span>
                ) : (
                  <span className="text-xl">👁️‍🗨️</span>
                )}
              </button>
            </div>
            {errors.password && (
              <p className="login__field-error mt-1 text-sm text-red-400">
                {errors.password}
              </p>
            )}
          </div>

          <div className="login__options flex items-center justify-between">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="
                  w-4 
                  h-4 
                  bg-[#2d2d2d] 
                  border-[#444] 
                  rounded
                  focus:ring-2
                  focus:ring-[#3B82F6]/20
                "
              />
              <span className="ml-2 text-sm text-gray-400">
                Remember me
              </span>
            </label>
            <a 
              href="#" 
              className="
                text-sm 
                text-[#3B82F6] 
                hover:text-[#2563EB]
                transition-colors
              "
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="
              login__submit
              w-full 
              py-3 
              px-4
              bg-gradient-to-r 
              from-[#3B82F6] 
              to-[#9333EA]
              text-white 
              font-semibold
              rounded-lg
              hover:opacity-90
              focus:outline-none
              focus:ring-4
              focus:ring-[#3B82F6]/30
              transition-all
              disabled:opacity-50
              disabled:cursor-not-allowed
              flex
              items-center
              justify-center
            "
          >
            {isSubmitting ? (
              <>
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
              </>
            ) : (
              'Sign In'
            )}
          </button>

          <div className="login__footer text-center mt-6">
            <p className="text-sm text-gray-400">
              Don't have an account?{' '}
              <a 
                href="#" 
                className="
                  text-[#3B82F6] 
                  hover:text-[#2563EB]
                  font-medium
                  transition-colors
                "
              >
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
