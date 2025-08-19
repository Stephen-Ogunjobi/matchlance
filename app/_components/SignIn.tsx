import Image from "next/image";
import { signIn } from "../_lib/auth";

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-gradient">
      <div className="flex justify-center mb-3">
        <Image
          src="/logo.png"
          alt="MatchLance Logo"
          width={168}
          height={120}
          priority
        />
      </div>
      <div className=" p-4">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-bg floating-bg-1"></div>
          <div className="floating-bg floating-bg-2"></div>
          <div className="floating-bg floating-bg-3"></div>
        </div>

        <div className="relative w-full max-w-md">
          {/* Main Card */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            {/* Logo/Brand Section */}
            <div className="text-center mb-6">
              <h1 className="text-xl sm:text-xl font-bold text-gradient mb-2">
                Welcome to MatchLance
              </h1>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Connect with talented freelancers worldwide
              </p>
            </div>

            {/* Features Preview */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-muted">
                  Verified professionals
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-muted">
                  Secure payments
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-muted">
                  Fast matching
                </span>
              </div>
            </div>

            {/* Sign In Form */}
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button
                type="submit"
                className="btn-glass w-full rounded-xl px-4 py-3 font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-md group"
              >
                <div className="relative">
                  <svg
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </div>
                <span className="text-base">Continue with Google</span>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </form>

            {/* Footer Text */}
            <div className="mt-6 text-center">
              <p className="text-xs text-muted">
                By continuing, you agree to our{" "}
                <a href="#" className="nav-link font-medium">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="nav-link font-medium">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-6 stats-card compact">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-gradient">10K+</div>
                <div className="text-xs text-muted">Projects</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gradient">5K+</div>
                <div className="text-xs text-muted">Freelancers</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gradient">98%</div>
                <div className="text-xs text-muted">Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
