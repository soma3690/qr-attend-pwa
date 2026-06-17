import { CheckCircle2, Clock, Users, Calendar, AlertCircle } from "lucide-react";

export type UserRole = "admin" | "employee" | "hr";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  department?: string;
  position?: string;
  joinDate?: string;
}

export interface Attendance {
  id: string;
  userId: string;
  userName: string;
  date: string;
  checkIn: string;
  checkOut?: string;
  status: "present" | "late" | "absent" | "on-leave";
  location?: string;
}

export interface LeaveRequest {
  id: string;
  userId: string;
  userName: string;
  type: "sick" | "vacation" | "personal" | "emergency";
  startDate: string;
  endDate: string;
  reason: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}

export const MOCK_USERS: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@adeegtrack.com",
    role: "admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
    department: "Management",
    position: "System Administrator",
  },
  {
    id: "2",
    name: "John Doe",
    email: "john@adeegtrack.com",
    role: "employee",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    department: "Engineering",
    position: "Software Engineer",
    joinDate: "2023-01-15",
  },
  {
    id: "3",
    name: "Jane Smith",
    email: "jane@adeegtrack.com",
    role: "hr",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    department: "Human Resources",
    position: "HR Manager",
  },
];

export const MOCK_ATTENDANCE: Attendance[] = [
  {
    id: "1",
    userId: "2",
    userName: "John Doe",
    date: "2024-05-20",
    checkIn: "08:45 AM",
    checkOut: "05:30 PM",
    status: "present",
  },
  {
    id: "2",
    userId: "2",
    userName: "John Doe",
    date: "2024-05-21",
    checkIn: "09:15 AM",
    checkOut: "05:45 PM",
    status: "late",
  },
  {
    id: "3",
    userId: "1",
    userName: "Admin User",
    date: "2024-05-21",
    checkIn: "08:30 AM",
    checkOut: "06:00 PM",
    status: "present",
  },
];

export const MOCK_LEAVE_REQUESTS: LeaveRequest[] = [
  {
    id: "1",
    userId: "2",
    userName: "John Doe",
    type: "vacation",
    startDate: "2024-06-01",
    endDate: "2024-06-05",
    reason: "Family trip",
    status: "pending",
    createdAt: "2024-05-15",
  },
  {
    id: "2",
    userId: "2",
    userName: "John Doe",
    type: "sick",
    startDate: "2024-05-10",
    endDate: "2024-05-11",
    reason: "Flu",
    status: "approved",
    createdAt: "2024-05-09",
  },
];

export const DASHBOARD_STATS = [
  { label: "Total Employees", value: "124", icon: Users, color: "text-blue-600" },
  { label: "Present Today", value: "112", icon: CheckCircle2, color: "text-green-600" },
  { label: "Late Arrivals", value: "8", icon: Clock, color: "text-amber-600" },
  { label: "On Leave", value: "4", icon: Calendar, color: "text-purple-600" },
];
