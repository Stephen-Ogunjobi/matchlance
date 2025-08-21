"use client";

import { Briefcase, Star, MapPin, Clock } from "lucide-react";
import RecentJobs from "../_components/RecentJobs";
import TopTalent from "../_components/TopTalent";
import GreetingsSection from "../_components/GreetingsSection";

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-gradient pt-0">
      <GreetingsSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="stats-card">
            <div className="flex items-center gap-3">
              <div className="logo-container">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted">Active Jobs</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>

          <div className="stats-card">
            <div className="flex items-center gap-3">
              <div className="logo-container-emerald">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted">Top Talent</p>
                <p className="text-2xl font-bold text-gray-900">48</p>
              </div>
            </div>
          </div>

          <div className="stats-card">
            <div className="flex items-center gap-3">
              <div className="logo-container">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted">Locations</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>

          <div className="stats-card">
            <div className="flex items-center gap-3">
              <div className="logo-container-emerald">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted">Response Time</p>
                <p className="text-2xl font-bold text-gray-900">2.4h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Jobs Section */}
          <RecentJobs />

          {/* Top Talent Section */}
          <div className="lg:col-span-1">
            <TopTalent />
          </div>
        </div>
      </div>
    </div>
  );
}
