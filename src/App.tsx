import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/hooks/use-auth";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import EmployeeList from "@/pages/employees/EmployeeList";
import AddEmployee from "@/pages/employees/AddEmployee";
import QRScanner from "@/pages/attendance/QRScanner";
import AttendanceHistory from "@/pages/attendance/History";
import LeaveRequest from "@/pages/leave/LeaveRequest";
import Reports from "@/pages/Reports";
import { Toaster } from "@/components/ui/sonner";

// Simple Profile component for now (will be polished in Phase 6)
const Profile = () => (
  <div className="space-y-4">
    <h1 className="text-2xl font-bold">My Profile</h1>
    <div className="p-6 border rounded-lg bg-card">
       <p className="text-muted-foreground">Profile management features are coming soon.</p>
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/scan" element={<QRScanner />} />
            <Route path="/attendance" element={<AttendanceHistory />} />
            <Route path="/leave" element={<LeaveRequest />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employees/add" element={<AddEmployee />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </AuthProvider>
  );
}

export default App;
