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

interface MovieFormData {
  title: string;
  description: string;
  releaseDate: string;
  duration: number;
  genre: string;
  director: string;
  rating: number;
  posterUrl: string;
  trailerUrl?: string;
}

interface DialogCreateMovieProps {
  onMovieCreated?: (movie: MovieFormData) => void;
}

export function DialogCreateMovie({ onMovieCreated }: DialogCreateMovieProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MovieFormData>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<MovieFormData> = async (data) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Creating movie:", data);

      // Call the callback if provided
      onMovieCreated?.(data);

      // Reset form and close dialog
      reset();
      setIsOpen(false);

      // Show success notification
      toast.success("Movie created successfully!");
    } catch (error) {
      console.error("Error creating movie:", error);
      toast.error("Failed to create movie. Please try again.");
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
          Add Movie
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-gray-300">
        <DialogHeader>
          <DialogTitle className="text-[#1E201E]">Create New Movie</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Title */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Title <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("title", { required: "Title is required" })}
                placeholder="Enter movie title"
                className={`bg-white text-[#1E201E] border-gray-300 ${
                  errors.title ? "border-red-500" : ""
                }`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Director */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Director <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("director", { required: "Director is required" })}
                placeholder="Director name"
                className={`bg-white text-[#1E201E] border-gray-300 ${
                  errors.director ? "border-red-500" : ""
                }`}
              />
              {errors.director && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.director.message}
                </p>
              )}
            </div>

            {/* Genre */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Genre <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("genre", { required: "Genre is required" })}
                placeholder="e.g., Action, Drama"
                className={`bg-white text-[#1E201E] border-gray-300 ${
                  errors.genre ? "border-red-500" : ""
                }`}
              />
              {errors.genre && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.genre.message}
                </p>
              )}
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Duration (minutes) <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("duration", {
                  required: "Duration is required",
                  valueAsNumber: true,
                  min: {
                    value: 1,
                    message: "Duration must be at least 1 minute",
                  },
                })}
                type="number"
                placeholder="120"
                className={`bg-white text-[#1E201E] border-gray-300 ${
                  errors.duration ? "border-red-500" : ""
                }`}
              />
              {errors.duration && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.duration.message}
                </p>
              )}
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Rating (0-10) <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("rating", {
                  required: "Rating is required",
                  valueAsNumber: true,
                  min: { value: 0, message: "Rating must be at least 0" },
                  max: { value: 10, message: "Rating must be at most 10" },
                })}
                type="number"
                step="0.1"
                placeholder="8.5"
                className={`bg-white text-[#1E201E] border-gray-300 ${
                  errors.rating ? "border-red-500" : ""
                }`}
              />
              {errors.rating && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.rating.message}
                </p>
              )}
            </div>

            {/* Release Date */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Release Date <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("releaseDate", {
                  required: "Release date is required",
                })}
                type="date"
                className={`bg-white text-[#1E201E] border-gray-300 ${
                  errors.releaseDate ? "border-red-500" : ""
                }`}
              />
              {errors.releaseDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.releaseDate.message}
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
                placeholder="Enter movie description"
                rows={3}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Poster URL */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Poster URL <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("posterUrl", {
                  required: "Poster URL is required",
                })}
                placeholder="https://example.com/poster.jpg"
                className={`bg-white text-[#1E201E] border-gray-300 ${
                  errors.posterUrl ? "border-red-500" : ""
                }`}
              />
              {errors.posterUrl && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.posterUrl.message}
                </p>
              )}
            </div>

            {/* Trailer URL */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Trailer URL
              </label>
              <Input
                {...register("trailerUrl")}
                placeholder="https://youtube.com/watch?v=xxxx (optional)"
                className="bg-white text-[#1E201E] border-gray-300"
              />
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
              {isLoading ? "Creating..." : "Create Movie"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
