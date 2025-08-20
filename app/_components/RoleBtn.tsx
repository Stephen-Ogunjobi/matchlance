"use client";

import { setUserRole } from "../_lib/action";

interface RoleBtnProps {
  role: "client" | "freelancer";
}

export default function RoleBtn({ role }: RoleBtnProps) {
  const isClient = role === "client";

  const handleRole = async () => {
    await setUserRole(role);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        onClick={handleRole}
        className={`${
          isClient ? "btn-gradient-primary" : "btn-gradient-secondary"
        } flex-1 text-center group-hover:scale-105 transform`}
      >
        {isClient ? "Browse Freelancers" : "Find Projects"}
      </button>
    </div>
  );
}
