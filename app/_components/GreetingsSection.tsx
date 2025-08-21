"use client";

import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import { useModal } from "../_context/ModalContext";

export default function GreetingsSection() {
  const { handleOpen } = useModal();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="glass-nav border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gradient">
              Welcome back,{" "}
              {user?.name
                ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
                : "User"}
              !
            </h1>
            <p className="mt-2 text-lg text-muted">
              Ready to find the perfect talent for your next project?
            </p>
          </div>
          <button
            onClick={handleOpen}
            className="btn-gradient-primary flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Post a Job
          </button>
        </div>
      </div>
    </div>
  );
}
