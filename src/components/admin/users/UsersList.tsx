"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DataTable } from "../DataTable";
import { Edit, Shield, ShieldCheck } from "lucide-react";
import { DialogDeleteButton } from "@/components/ui/dialog-delete-button";
import { DialogCreateUser } from "./DialogCreateUser/DialogCreateUser";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "manager";
  status: "active" | "inactive" | "suspended";
  joinDate: string;
  lastLogin: string;
  avatar: string;
  totalBookings: number;
  totalSpent: number;
}

const sampleUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    status: "active",
    joinDate: "2023-01-15",
    lastLogin: "2024-06-29",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    totalBookings: 25,
    totalSpent: 750.00,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "user",
    status: "active",
    joinDate: "2023-03-20",
    lastLogin: "2024-06-28",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    totalBookings: 12,
    totalSpent: 360.00,
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    role: "manager",
    status: "active",
    joinDate: "2023-02-10",
    lastLogin: "2024-06-30",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    totalBookings: 8,
    totalSpent: 240.00,
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "user",
    status: "inactive",
    joinDate: "2023-04-05",
    lastLogin: "2024-05-15",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    totalBookings: 18,
    totalSpent: 540.00,
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david.wilson@example.com",
    role: "user",
    status: "suspended",
    joinDate: "2023-05-12",
    lastLogin: "2024-06-10",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    totalBookings: 3,
    totalSpent: 90.00,
  },
  {
    id: "6",
    name: "Lisa Anderson",
    email: "lisa.anderson@example.com",
    role: "user",
    status: "active",
    joinDate: "2023-06-18",
    lastLogin: "2024-06-29",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    totalBookings: 15,
    totalSpent: 450.00,
  },
  {
    id: "7",
    name: "James Brown",
    email: "james.brown@example.com",
    role: "user",
    status: "active",
    joinDate: "2023-07-22",
    lastLogin: "2024-06-27",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    totalBookings: 9,
    totalSpent: 270.00,
  },
  {
    id: "8",
    name: "Anna Rodriguez",
    email: "anna.rodriguez@example.com",
    role: "manager",
    status: "active",
    joinDate: "2023-08-30",
    lastLogin: "2024-06-30",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
    totalBookings: 22,
    totalSpent: 660.00,
  },
  {
    id: "9",
    name: "Robert Taylor",
    email: "robert.taylor@example.com",
    role: "user",
    status: "active",
    joinDate: "2023-09-14",
    lastLogin: "2024-06-26",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    totalBookings: 6,
    totalSpent: 180.00,
  },
  {
    id: "10",
    name: "Jessica White",
    email: "jessica.white@example.com",
    role: "user",
    status: "inactive",
    joinDate: "2023-10-08",
    lastLogin: "2024-04-20",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    totalBookings: 11,
    totalSpent: 330.00,
  },
];

export function UsersList() {
  const [users, setUsers] = useState<User[]>(sampleUsers);
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null);

  const handleCreateUser = (newUserData: { name: string; email: string; role: "admin" | "user" | "manager"; avatar?: string }) => {
    const newUser: User = {
      id: (users.length + 1).toString(),
      name: newUserData.name,
      email: newUserData.email,
      role: newUserData.role,
      status: "active",
      joinDate: new Date().toISOString().split('T')[0],
      lastLogin: new Date().toISOString().split('T')[0],
      avatar: newUserData.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      totalBookings: 0,
      totalSpent: 0,
    };
    
    setUsers(prevUsers => [...prevUsers, newUser]);
    console.log("New user added:", newUser);
  };
  const handleDeleteUser = async (userId: string, userName: string) => {
    setDeletingUserId(userId);
    try {
      // Simulate API call - replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Remove user from local state
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
      
      // You can add toast notification here
      console.log(`User "${userName}" deleted successfully`);
    } catch (error) {
      console.error("Failed to delete user:", error);
      // You can add error toast notification here
    } finally {
      setDeletingUserId(null);
    }
  };

  const getStatusBadge = (status: User["status"]) => (
    <span
      className={`px-2 py-1 text-xs rounded-full font-medium ${
        status === "active"
          ? "bg-green-100 text-green-800"
          : status === "inactive"
          ? "bg-gray-100 text-gray-600"
          : "bg-red-100 text-red-800"
      }`}
    >
      {status}
    </span>
  );

  const getRoleBadge = (role: User["role"]) => {
    const config = {
      admin: { 
        color: "bg-purple-100 text-purple-800", 
        icon: Shield 
      },
      manager: { 
        color: "bg-blue-100 text-blue-800", 
        icon: ShieldCheck 
      },
      user: { 
        color: "bg-gray-100 text-gray-600", 
        icon: null 
      },
    };
    
    const { color, icon: Icon } = config[role];
    
    return (
      <span className={`px-2 py-1 text-xs rounded-full font-medium flex items-center gap-1 ${color}`}>
        {Icon && <Icon className="h-3 w-3" />}
        {role}
      </span>
    );
  };

  const columns = [
    {
      key: "avatar" as keyof User,
      header: "Avatar",
      render: (value: User[keyof User], user: User) => (
        <Image
          src={String(value)}
          alt={user.name}
          width={40}
          height={40}
          className="object-cover rounded-full"
        />
      ),
    },
    {
      key: "name" as keyof User,
      header: "Name",
      render: (value: User[keyof User]) => (
        <span className="font-medium text-[#1E201E]">{String(value)}</span>
      ),
    },
    {
      key: "email" as keyof User,
      header: "Email",
      render: (value: User[keyof User]) => (
        <span className="text-[#1E201E]">{String(value)}</span>
      ),
    },
    {
      key: "role" as keyof User,
      header: "Role",
      render: (value: User[keyof User]) => getRoleBadge(value as User["role"]),
    },
    {
      key: "status" as keyof User,
      header: "Status",
      render: (value: User[keyof User]) => getStatusBadge(value as User["status"]),
    },
    {
      key: "totalBookings" as keyof User,
      header: "Bookings",
      render: (value: User[keyof User]) => (
        <span className="text-[#1E201E]">{String(value)}</span>
      ),
    },
    {
      key: "totalSpent" as keyof User,
      header: "Total Spent",
      render: (value: User[keyof User]) => (
        <span className="text-[#1E201E] font-medium">${Number(value).toFixed(2)}</span>
      ),
    },
    {
      key: "joinDate" as keyof User,
      header: "Join Date",
      render: (value: User[keyof User]) => (
        <span className="text-[#1E201E]">
          {new Date(String(value)).toLocaleDateString()}
        </span>
      ),
    },
    {
      key: "lastLogin" as keyof User,
      header: "Last Login",
      render: (value: User[keyof User]) => (
        <span className="text-[#1E201E]">
          {new Date(String(value)).toLocaleDateString()}
        </span>
      ),
    },
    {
      key: "id" as keyof User,
      header: "Actions",
      className: "text-right",
      render: (_value: User[keyof User], user: User) => (
        <div className="flex items-center justify-end space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-[#B6B09F] text-[#1E201E] border-[#B6B09F] hover:bg-[#B6B09F]/80 hover:text-[#1E201E]"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <DialogDeleteButton
            iconOnly
            size="sm"
            title={`Delete "${user.name}"?`}
            description={`Are you sure you want to delete user "${user.name}"? This will permanently remove the user and all associated data from the system.`}
            confirmText="Yes, delete user"
            onConfirm={() => handleDeleteUser(user.id, user.name)}
            isLoading={deletingUserId === user.id}
            disabled={deletingUserId !== null}
            className="bg-[#B6B09F] text-[#1E201E] border-[#B6B09F] hover:bg-[#B6B09F]/80 hover:text-[#1E201E]"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#1E201E]">
            Users Management
          </h2>
          <p className="text-[#1E201E]">
            Manage all users in your cinema system.
          </p>
        </div>
        <DialogCreateUser
          onUserCreated={handleCreateUser}
        />
      </div>

      {/* User Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-gray-300 bg-white p-4">
          <div className="text-2xl font-bold text-[#1E201E]">
            {users.length}
          </div>
          <p className="text-sm text-gray-600">Total Users</p>
        </div>
        <div className="rounded-lg border border-gray-300 bg-white p-4">
          <div className="text-2xl font-bold text-green-600">
            {users.filter(u => u.status === "active").length}
          </div>
          <p className="text-sm text-gray-600">Active Users</p>
        </div>
        <div className="rounded-lg border border-gray-300 bg-white p-4">
          <div className="text-2xl font-bold text-blue-600">
            {users.filter(u => u.role === "admin" || u.role === "manager").length}
          </div>
          <p className="text-sm text-gray-600">Admin/Manager</p>
        </div>
        <div className="rounded-lg border border-gray-300 bg-white p-4">
          <div className="text-2xl font-bold text-[#1E201E]">
            ${users.reduce((sum, user) => sum + user.totalSpent, 0).toFixed(2)}
          </div>
          <p className="text-sm text-gray-600">Total Revenue</p>
        </div>
      </div>

      <DataTable
        data={users}
        columns={columns}
        searchableFields={["name", "email", "role"]}
        itemsPerPage={8}
        searchPlaceholder="Search users by name, email, or role..."
      />
    </div>
  );
}
