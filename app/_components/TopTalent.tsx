import { Star } from "lucide-react";

export default function TopTalent() {
  const topTalent = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Frontend Developer",
      experience: "8 years",
      skills: ["React", "TypeScript", "Node.js"],
      rating: 4.9,
      location: "New York, NY",
      hourlyRate: "$85",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Full Stack Developer",
      experience: "6 years",
      skills: ["Python", "Django", "React", "AWS"],
      rating: 4.8,
      location: "San Francisco, CA",
      hourlyRate: "$75",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      experience: "5 years",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping"],
      rating: 4.9,
      location: "Austin, TX",
      hourlyRate: "$70",
    },
    {
      id: 4,
      name: "David Kim",
      role: "DevOps Engineer",
      experience: "7 years",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
      rating: 4.7,
      location: "Seattle, WA",
      hourlyRate: "$90",
    },
  ];
  return (
    <div className="card-modern">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gradient flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500" />
          Top Talent
        </h2>
        <p className="text-sm text-muted mt-1">Recommended for you</p>
      </div>
      <div className="divide-y divide-gray-200">
        {topTalent.map((talent) => (
          <div
            key={talent.id}
            className="px-6 py-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="avatar">
                <span className="text-blue-600 font-semibold text-sm">
                  {talent.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {talent.name}
                </h3>
                <p className="text-xs text-muted truncate">{talent.role}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    {talent.rating}
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">
                    {talent.experience}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {talent.skills.slice(0, 2).map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                  {talent.skills.length > 2 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                      +{talent.skills.length - 2}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted">{talent.location}</span>
                  <span className="text-sm font-medium text-blue-600">
                    {talent.hourlyRate}/hr
                  </span>
                </div>
              </div>
            </div>
            <button className="btn-glass w-full mt-3">Contact</button>
          </div>
        ))}
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <button className="nav-link font-medium text-sm">
          View All Talent →
        </button>
      </div>
    </div>
  );
}
