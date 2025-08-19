import { signOut } from "../_lib/auth";
import Image from "next/image";

interface NavProps {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null;
}

export default function Nav({ user }: NavProps) {
  return (
    <header className="glass-nav sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="flex justify-center">
              <Image
                src="/logo.png"
                alt="MatchLance Logo"
                width={130}
                height={80}
                priority
              />
            </div>
          </div>

          {/* User Section */}
          {user && (
            <div className="flex items-center gap-3">
              {/* User Avatar & Name */}
              <div className="flex items-center gap-2 sm:gap-3">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "User"}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <div className="avatar">
                    <span>{user.name?.charAt(0)?.toUpperCase()}</span>
                  </div>
                )}
                <span className="text-muted font-medium text-sm sm:text-base max-w-[100px] sm:max-w-none truncate">
                  {user.name?.split(" ")[0]}
                </span>
              </div>

              {/* Sign Out Button */}
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit" className="btn-glass text-xs sm:text-sm">
                  Sign Out
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
