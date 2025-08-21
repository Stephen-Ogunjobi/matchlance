import { Briefcase, MapPin, Clock, DollarSign } from "lucide-react";
export default function RecentJobs() {
  const recentJobs = [
    {
      id: 1,
      title: "Frontend Developer Needed",
      company: "TechCorp Inc.",
      location: "New York, NY",
      type: "Full-time",
      salary: "$80k - $120k",
      posted: "2 days ago",
      status: "Active",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "DesignStudio",
      location: "Remote",
      type: "Contract",
      salary: "$60k - $90k",
      posted: "1 week ago",
      status: "Active",
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "DataFlow Systems",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$100k - $150k",
      posted: "3 days ago",
      status: "Active",
    },
  ];
  return (
    <div className="lg:col-span-2">
      <div className="card-modern">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gradient flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            Recent Job Postings
          </h2>
          <p className="text-sm text-muted mt-1">
            Manage your active job listings
          </p>
        </div>
        <div className="divide-y divide-gray-200">
          {recentJobs.map((job) => (
            <div
              key={job.id}
              className="px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-sm text-muted mt-1">{job.company}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {job.status}
                  </span>
                  <p className="text-xs text-muted mt-1">{job.posted}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <button className="nav-link font-medium text-sm">
            View All Jobs →
          </button>
        </div>
      </div>
    </div>
  );
}
