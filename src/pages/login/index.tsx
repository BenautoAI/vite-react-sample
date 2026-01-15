import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

function LoginPage() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
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
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login successful:', formData);
      // Handle successful login here (e.g., redirect, update auth state)
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login__container flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]">
      <div className="login__card w-full max-w-md p-8 bg-[#242424] rounded-2xl shadow-2xl">
        <div className="login__header mb-8 text-center">
          <h1 className="text__title text-4xl font-bold mb-2 bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text__subtitle text-gray-400">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="login__form space-y-6">
          {/* Email Input */}
          <div className="form__field">
            <label 
              htmlFor="email" 
              className="block text-sm font-medium mb-2 text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`
                w-full 
                px-4 
                py-3 
                bg-[#1a1a1a] 
                border 
                ${errors.email ? 'border-red-500' : 'border-gray-600'} 
                rounded-lg 
                focus:outline-none 
                focus:ring-2 
                ${errors.email ? 'focus:ring-red-500' : 'focus:ring-[#3B82F6]'}
                focus:border-transparent
                text-white
                placeholder-gray-500
                transition-all
              `}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="form__error mt-2 text-sm text-red-500 flex items-center gap-1">
                <span>⚠</span>
                {errors.email}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="form__field">
            <label 
              htmlFor="password" 
              className="block text-sm font-medium mb-2 text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`
                w-full 
                px-4 
                py-3 
                bg-[#1a1a1a] 
                border 
                ${errors.password ? 'border-red-500' : 'border-gray-600'} 
                rounded-lg 
                focus:outline-none 
                focus:ring-2 
                ${errors.password ? 'focus:ring-red-500' : 'focus:ring-[#3B82F6]'}
                focus:border-transparent
                text-white
                placeholder-gray-500
                transition-all
              `}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="form__error mt-2 text-sm text-red-500 flex items-center gap-1">
                <span>⚠</span>
                {errors.password}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              form__submit
              w-full 
              py-3 
              px-4 
              rounded-lg 
              font-medium 
              text-white
              bg-gradient-to-r 
              from-[#3B82F6] 
              to-[#9333EA]
              hover:opacity-90
              focus:outline-none 
              focus:ring-2 
              focus:ring-[#3B82F6]
              focus:ring-offset-2
              focus:ring-offset-[#242424]
              transition-all
              ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span>
                Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Additional Links */}
        <div className="login__links mt-6 text-center">
          <a 
            href="#" 
            className="text-sm text-[#3B82F6] hover:text-[#6EE7B7] transition-colors"
          >
            Forgot your password?
          </a>
        </div>

        <div className="login__signup mt-4 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <a 
              href="#" 
              className="text-[#3B82F6] hover:text-[#6EE7B7] font-medium transition-colors"
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
