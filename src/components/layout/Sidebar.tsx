import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  QrCode, 
  History, 
  CalendarDays, 
  FileText, 
  Settings, 
  LogOut,
  UserCircle
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/", roles: ["admin", "employee", "hr"] },
    { icon: QrCode, label: "Scan QR", path: "/scan", roles: ["admin", "employee"] },
    { icon: History, label: "Attendance", path: "/attendance", roles: ["admin", "employee", "hr"] },
    { icon: CalendarDays, label: "Leave Requests", path: "/leave", roles: ["admin", "employee", "hr"] },
    { icon: Users, label: "Employees", path: "/employees", roles: ["admin", "hr"] },
    { icon: FileText, label: "Reports", path: "/reports", roles: ["admin", "hr"] },
    { icon: UserCircle, label: "My Profile", path: "/profile", roles: ["admin", "employee", "hr"] },
  ];

  const filteredMenu = menuItems.filter(item => 
    user && item.roles.includes(user.role)
  );

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-screen sticky top-0 hidden md:flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
          <QrCode className="w-8 h-8" />
          <span>AdeegTrack AI</span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {filteredMenu.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2 w-full rounded-md text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
