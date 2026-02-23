import { useState } from "react";
import { Bell, Clock, LogOut, Loader2 } from "lucide-react";
import { useLogout } from "../../hooks/use-logout";
import { Button } from "../../components/ui/button";
import { SidebarTrigger } from "../../components/ui/sidebar";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";

export function TopHeader() {
  const [open, setOpen] = useState(false);
  const { mutate: logout, isPending } = useLogout();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-50 bg-white/80 backdrop-blur-md px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-slate-400 hover:text-slate-600" />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-400 rounded-full"
          >
            <Clock className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="relative text-slate-400 rounded-full"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
          </Button>
        </div>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center focus:outline-none transition-transform active:scale-95"
          >
            <Avatar className="h-9 w-9 border border-gray-100 shadow-sm">
              <AvatarFallback className="bg-orange-100 text-orange-700 text-xs font-bold">
                AD
              </AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500"></span>
          </button>

          {open && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setOpen(false)}
              />

              <div className="absolute right-0 mt-3 w-48 z-20 rounded-xl bg-white shadow-xl border border-gray-100 p-1.5 animate-in fade-in zoom-in duration-200">
                <div className="px-3 py-2 mb-1 border-b border-gray-50">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Account
                  </p>
                </div>

                <button
                  onClick={() => logout()}
                  disabled={isPending}
                  className="w-full flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50"
                >
                  {isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <LogOut className="h-4 w-4" />
                  )}
                  {isPending ? "Logging out..." : "Sign out"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
