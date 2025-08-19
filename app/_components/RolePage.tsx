import { auth } from "../_lib/auth";
import Nav from "./Nav";

export default async function RolePage() {
  const session = await auth();
  return (
    <div className="min-h-screen bg-gradient">
      <Nav user={session?.user} />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-4">
            Welcome back, {session?.user?.name?.split(" ")[0]}!
          </h2>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            Choose your path and start connecting with the perfect match for
            your needs
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Client Card */}
          <div className="group card-modern">
            <div className="relative p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="logo-container w-14 h-14">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient mb-1">
                    I&apos;m a Client
                  </h3>
                  <p className="text-sm text-muted font-medium">HIRE TALENT</p>
                </div>
              </div>

              <p className="text-muted mb-8 leading-relaxed">
                Find skilled freelancers for your projects. From web development
                to graphic design, connect with professionals who can bring your
                vision to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/clients"
                  className="btn-gradient-primary flex-1 text-center group-hover:scale-105 transform"
                >
                  Browse Freelancers
                </a>
                <button className="sm:w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors duration-200">
                  <svg
                    className="w-5 h-5 text-gray-600"
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
              </div>
            </div>
          </div>

          {/* Freelancer Card */}
          <div className="group card-modern">
            <div className="relative p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="logo-container-emerald w-14 h-14">
                  <svg
                    className="w-7 h-7 text-white"
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
                <div>
                  <h3 className="text-2xl font-bold text-gradient mb-1">
                    I&apos;m a Freelancer
                  </h3>
                  <p className="text-sm text-muted font-medium">FIND WORK</p>
                </div>
              </div>

              <p className="text-muted mb-8 leading-relaxed">
                Discover exciting projects that match your skills. Build your
                portfolio, grow your network, and take your freelance career to
                the next level.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/freelancers"
                  className="btn-gradient-secondary flex-1 text-center group-hover:scale-105 transform"
                >
                  Find Projects
                </a>
                <button className="sm:w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors duration-200">
                  <svg
                    className="w-5 h-5 text-gray-600"
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
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20">
          <div className="stats-card">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">
                  10K+
                </div>
                <div className="text-sm text-muted">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">
                  5K+
                </div>
                <div className="text-sm text-muted">Freelancers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">
                  2K+
                </div>
                <div className="text-sm text-muted">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">
                  98%
                </div>
                <div className="text-sm text-muted">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
