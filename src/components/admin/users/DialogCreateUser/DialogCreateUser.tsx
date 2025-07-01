"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserPlus } from "lucide-react";

interface UserFormData {
  name: string;
  email: string;
  role: "admin" | "user" | "manager";
  avatar?: string;
}

interface DialogCreateUserProps {
  onUserCreated?: (user: UserFormData) => void;
}

export function DialogCreateUser({ onUserCreated }: DialogCreateUserProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    setIsLoading(true);
    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Call the callback function if provided
      if (onUserCreated) {
        onUserCreated(data);
      }

      // Reset form and close dialog
      reset();
      setIsOpen(false);
      console.log("User created successfully:", data);
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    reset();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#B6B09F] text-[#1E201E] border-[#B6B09F] hover:bg-[#B6B09F]/80 hover:text-[#1E201E]">
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            Create New User
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-[#1E201E]">
                Full Name *
              </label>
              <Input
                id="name"
                placeholder="Enter user's full name"
                {...register("name", {
                  required: "Full name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                className={`text-[#1E201E] ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[#1E201E]">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="user@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`text-[#1E201E] ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Role Field */}
            <div className="space-y-2">
              <label htmlFor="role" className="text-sm font-medium text-[#1E201E]">
                Role *
              </label>
              <select
                id="role"
                {...register("role", {
                  required: "Role is required",
                })}
                className={`w-full rounded-md border border-gray-300 px-3 py-2 text-[#1E201E] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  errors.role ? "border-red-500" : ""
                }`}
              >
                <option value="">Select a role</option>
                <option value="user">User</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
              </select>
              {errors.role && (
                <p className="text-sm text-red-600">{errors.role.message}</p>
              )}
            </div>

            {/* Avatar URL Field (Optional) */}
            <div className="space-y-2">
              <label htmlFor="avatar" className="text-sm font-medium text-[#1E201E]">
                Avatar URL (Optional)
              </label>
              <Input
                id="avatar"
                type="url"
                placeholder="https://example.com/avatar.jpg"
                {...register("avatar")}
                className="text-[#1E201E]"
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-[#B6B09F] text-[#1E201E] hover:bg-[#B6B09F]/80"
            >
              {isLoading ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
                  Creating...
                </>
              ) : (
                <>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Create User
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
