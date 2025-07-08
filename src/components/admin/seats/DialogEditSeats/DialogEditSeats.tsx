"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Edit, Plus, Trash2 } from "lucide-react";

interface Seat {
  id: string;
  row: string;
  number: number;
  type: "regular" | "vip" | "disabled";
  isOccupied: boolean;
}

interface SeatFormData {
  theaterName: string;
  rows: number;
  seatsPerRow: number;
}

interface DialogEditSeatsProps {
  theater?: {
    id: string;
    name: string;
    seats: Seat[];
  };
  onSeatsUpdated?: (seats: Seat[]) => void;
}

export function DialogEditSeats({
  theater,
  onSeatsUpdated,
}: DialogEditSeatsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [seats, setSeats] = useState<Seat[]>(theater?.seats || []);
  const [selectedSeatType, setSelectedSeatType] = useState<
    "regular" | "vip" | "disabled"
  >("regular");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<SeatFormData>({
    mode: "onChange",
    defaultValues: {
      theaterName: theater?.name || "",
      rows: Math.max(...seats.map((s) => s.row.charCodeAt(0) - 64), 0) || 10,
      seatsPerRow: Math.max(...seats.map((s) => s.number), 0) || 12,
    },
  });

  const rows = watch("rows");
  const seatsPerRow = watch("seatsPerRow");

  const generateSeats = () => {
    const newSeats: Seat[] = [];
    for (let row = 1; row <= rows; row++) {
      const rowLetter = String.fromCharCode(64 + row);
      for (let seatNum = 1; seatNum <= seatsPerRow; seatNum++) {
        const existingSeat = seats.find(
          (s) => s.row === rowLetter && s.number === seatNum
        );
        newSeats.push({
          id: `${rowLetter}${seatNum}`,
          row: rowLetter,
          number: seatNum,
          type: existingSeat?.type || "regular",
          isOccupied: false,
        });
      }
    }
    setSeats(newSeats);
  };

  const toggleSeatType = (seatId: string) => {
    setSeats((prev) =>
      prev.map((seat) =>
        seat.id === seatId ? { ...seat, type: selectedSeatType } : seat
      )
    );
  };

  const removeSeat = (seatId: string) => {
    setSeats((prev) => prev.filter((seat) => seat.id !== seatId));
  };

  const onSubmit: SubmitHandler<SeatFormData> = async (data) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Updating seats:", { theater: data, seats });

      onSeatsUpdated?.(seats);
      setIsOpen(false);
      toast.success("Seats updated successfully!");
    } catch (error) {
      console.error("Error updating seats:", error);
      toast.error("Failed to update seats. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      reset();
      setSeats(theater?.seats || []);
    }
  };

  const getSeatColor = (seat: Seat) => {
    switch (seat.type) {
      case "vip":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "disabled":
        return "bg-gray-400 cursor-not-allowed";
      default:
        return "bg-blue-500 hover:bg-blue-600";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-[#B6B09F] text-[#1E201E] border-[#B6B09F] hover:bg-[#B6B09F]/80 hover:text-[#1E201E]">
          <Edit className="mr-2 h-4 w-4" />
          Edit Seats
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-gray-300">
        <DialogHeader>
          <DialogTitle className="text-[#1E201E]">
            Edit Theater Seats - {theater?.name || "New Theater"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Theater Configuration */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Theater Name <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("theaterName", {
                  required: "Theater name is required",
                })}
                placeholder="Theater A"
                className={`bg-white text-[#1E201E] border-gray-300 ${
                  errors.theaterName ? "border-red-500" : ""
                }`}
              />
              {errors.theaterName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.theaterName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Number of Rows <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("rows", {
                  required: "Number of rows is required",
                  valueAsNumber: true,
                  min: { value: 1, message: "At least 1 row required" },
                  max: { value: 26, message: "Maximum 26 rows allowed" },
                })}
                type="number"
                placeholder="10"
                className={`bg-white text-[#1E201E] border-gray-300 ${
                  errors.rows ? "border-red-500" : ""
                }`}
              />
              {errors.rows && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.rows.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-[#1E201E]">
                Seats per Row <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("seatsPerRow", {
                  required: "Seats per row is required",
                  valueAsNumber: true,
                  min: {
                    value: 1,
                    message: "At least 1 seat per row required",
                  },
                  max: {
                    value: 30,
                    message: "Maximum 30 seats per row allowed",
                  },
                })}
                type="number"
                placeholder="12"
                className={`bg-white text-[#1E201E] border-gray-300 ${
                  errors.seatsPerRow ? "border-red-500" : ""
                }`}
              />
              {errors.seatsPerRow && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.seatsPerRow.message}
                </p>
              )}
            </div>
          </div>

          {/* Generate Seats Button */}
          <div className="flex justify-between items-center">
            <Button
              type="button"
              onClick={generateSeats}
              className="bg-green-600 text-white hover:bg-green-700"
            >
              <Plus className="mr-2 h-4 w-4" />
              Generate Seats
            </Button>

            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-[#1E201E]">
                Seat Type:
              </label>
              <Select
                value={selectedSeatType}
                onValueChange={(value: "regular" | "vip" | "disabled") =>
                  setSelectedSeatType(value)
                }
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="regular">Regular</SelectItem>
                  <SelectItem value="vip">VIP</SelectItem>
                  <SelectItem value="disabled">Disabled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Seat Legend */}
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span>Regular</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span>VIP</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-gray-400 rounded"></div>
              <span>Disabled</span>
            </div>
          </div>

          {/* Seat Grid */}
          {seats.length > 0 && (
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
              <div className="text-center mb-4 text-sm font-medium text-gray-600">
                SCREEN
              </div>
              <div className="space-y-2">
                {Array.from({ length: rows }, (_, rowIndex) => {
                  const rowLetter = String.fromCharCode(65 + rowIndex);
                  const rowSeats = seats.filter(
                    (seat) => seat.row === rowLetter
                  );

                  return (
                    <div key={rowLetter} className="flex items-center gap-2">
                      <div className="w-8 text-center font-medium text-sm">
                        {rowLetter}
                      </div>
                      <div className="flex gap-1 flex-wrap">
                        {rowSeats.map((seat) => (
                          <div key={seat.id} className="relative group">
                            <button
                              type="button"
                              onClick={() => toggleSeatType(seat.id)}
                              className={`w-8 h-8 rounded text-white text-xs font-medium transition-colors ${getSeatColor(
                                seat
                              )}`}
                              disabled={seat.type === "disabled"}
                            >
                              {seat.number}
                            </button>
                            <button
                              type="button"
                              onClick={() => removeSeat(seat.id)}
                              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Trash2 className="w-2 h-2 mx-auto" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="text-center mt-4 text-xs text-gray-500">
                Click seats to change type • Hover and click X to remove
              </div>
            </div>
          )}

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
              disabled={isLoading || seats.length === 0}
              className="bg-gray-800 text-white hover:bg-gray-700 hover:text-white"
            >
              {isLoading ? "Saving..." : "Save Seats"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
