"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

interface RoomFormData {
  name: string;
  capacity: number;
  type: "Standard" | "IMAX" | "4DX" | "VIP" | "Premium";
  status: "active" | "maintenance" | "inactive";
  screenSize: string;
  soundSystem: string;
  features: string;
  location: string;
  description: string;
}

interface DialogCreateRoomProps {
  onRoomCreated?: (room: RoomFormData) => void;
}

export function DialogCreateRoom({ onRoomCreated }: DialogCreateRoomProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RoomFormData>({
    mode: "onChange",
    defaultValues: {
      type: "Standard",
      status: "active",
    },
  });

  const onSubmit: SubmitHandler<RoomFormData> = async (data) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Creating room:", data);

      // Call the callback if provided
      onRoomCreated?.(data);

      // Reset form and close dialog
      reset();
      setIsOpen(false);

      // Show success notification
      toast.success("Room created successfully!");
    } catch (error) {
      console.error("Error creating room:", error);
      toast.error("Failed to create room. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      reset(); // Reset form when dialog closes
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-[#B6B09F] text-[#1E201E] border-[#B6B09F] hover:bg-[#B6B09F]/80 hover:text-[#1E201E]">
          <Plus className="mr-2 h-4 w-4" />
          Add Room
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-gray-300">
        <DialogHeader>
          <DialogTitle className="text-[#1E201E]">Create New Room</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Room Name <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("name", { required: "Room name is required" })}
                placeholder="Enter room name (e.g., Theater 1 - IMAX)"
                className={`bg-white text-[#1E201E] border-gray-300 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Type */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Room Type <span className="text-red-500">*</span>
              </label>
              <select
                {...register("type", { required: "Room type is required" })}
                className={`w-full p-2 border rounded-md bg-white text-[#1E201E] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.type ? "border-red-500" : ""
                }`}
              >
                <option value="Standard">Standard</option>
                <option value="IMAX">IMAX</option>
                <option value="4DX">4DX</option>
                <option value="VIP">VIP</option>
                <option value="Premium">Premium</option>
              </select>
              {errors.type && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.type.message}
                </p>
              )}
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                {...register("status", { required: "Status is required" })}
                className={`w-full p-2 border rounded-md bg-white text-[#1E201E] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.status ? "border-red-500" : ""
                }`}
              >
                <option value="active">Active</option>
                <option value="maintenance">Maintenance</option>
                <option value="inactive">Inactive</option>
              </select>
              {errors.status && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.status.message}
                </p>
              )}
            </div>

            {/* Capacity */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Capacity (seats) <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("capacity", {
                  required: "Capacity is required",
                  valueAsNumber: true,
                  min: {
                    value: 1,
                    message: "Capacity must be at least 1 seat",
                  },
                  max: {
                    value: 1000,
                    message: "Capacity cannot exceed 1000 seats",
                  },
                })}
                type="number"
                placeholder="200"
                className={`bg-white text-[#1E201E] border-gray-300 ${
                  errors.capacity ? "border-red-500" : ""
                }`}
              />
              {errors.capacity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.capacity.message}
                </p>
              )}
            </div>

            {/* Screen Size */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Screen Size <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("screenSize", { required: "Screen size is required" })}
                placeholder="15m x 8m"
                className={`bg-white text-[#1E201E] border-gray-300 ${
                  errors.screenSize ? "border-red-500" : ""
                }`}
              />
              {errors.screenSize && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.screenSize.message}
                </p>
              )}
            </div>

            {/* Sound System */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Sound System <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("soundSystem", { required: "Sound system is required" })}
                placeholder="Dolby Atmos"
                className={`bg-white text-[#1E201E] border-gray-300 ${
                  errors.soundSystem ? "border-red-500" : ""
                }`}
              />
              {errors.soundSystem && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.soundSystem.message}
                </p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Location <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("location", { required: "Location is required" })}
                placeholder="Ground Floor - East Wing"
                className={`bg-white text-[#1E201E] border-gray-300 ${
                  errors.location ? "border-red-500" : ""
                }`}
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Features */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Features <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("features", { required: "Features are required" })}
                placeholder="Digital Projection, Air Conditioning, Reclining Seats (comma separated)"
                className={`bg-white text-[#1E201E] border-gray-300 ${
                  errors.features ? "border-red-500" : ""
                }`}
              />
              {errors.features && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.features.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Description <span className="text-red-500">*</span>
              </label>
              <Textarea
                {...register("description", {
                  required: "Description is required",
                })}
                className={`w-full p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-[#1E201E] border-gray-300 ${
                  errors.description ? "border-red-500" : ""
                }`}
                placeholder="Enter room description and details"
                rows={3}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              disabled={isLoading}
              className="bg-[#B6B09F] text-[#1E201E] border-[#B6B09F] hover:bg-[#B6B09F]/80 hover:text-[#1E201E]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-gray-800 text-white hover:bg-gray-700 hover:text-white"
            >
              {isLoading ? "Creating..." : "Create Room"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
