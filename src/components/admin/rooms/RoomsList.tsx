"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { DialogCreateRoom } from "./DialogCreateRoom/DialogCreateRoom";
import { DialogUpdateRoom } from "./DialogUpdateRoom/DialogUpdateRoom";
import { RoomDetailDialog } from "./RoomDetailDialog";
import { DialogDeleteButton } from "@/components/ui/dialog-delete-button";

export interface Room {
  id: number;
  name: string;
  capacity: number;
  type: "Standard" | "IMAX" | "4DX" | "VIP" | "Premium";
  status: "active" | "maintenance" | "inactive";
  screenSize: string;
  soundSystem: string;
  features: string[];
  location: string;
  description: string;
}

const sampleRooms: Room[] = [
  {
    id: 1,
    name: "Theater 1 - IMAX",
    capacity: 300,
    type: "IMAX",
    status: "active",
    screenSize: "22m x 16m",
    soundSystem: "Dolby Atmos",
    features: ["IMAX", "Dolby Vision", "Reclining Seats", "Reserved Seating"],
    location: "Ground Floor - East Wing",
    description:
      "Premium IMAX theater with state-of-the-art projection and sound systems.",
  },
  {
    id: 2,
    name: "Theater 2 - Standard",
    capacity: 180,
    type: "Standard",
    status: "active",
    screenSize: "15m x 8m",
    soundSystem: "DTS",
    features: ["Digital Projection", "Air Conditioning"],
    location: "Ground Floor - West Wing",
    description: "Standard theater suitable for regular movie screenings.",
  },
  {
    id: 3,
    name: "Theater 3 - VIP",
    capacity: 50,
    type: "VIP",
    status: "active",
    screenSize: "12m x 7m",
    soundSystem: "Dolby Atmos",
    features: [
      "VIP Seating",
      "In-seat Service",
      "Private Bar",
      "Luxury Recliners",
    ],
    location: "Second Floor - VIP Section",
    description:
      "Exclusive VIP theater with luxury amenities and personalized service.",
  },
  {
    id: 4,
    name: "Theater 4 - 4DX",
    capacity: 120,
    type: "4DX",
    status: "maintenance",
    screenSize: "14m x 8m",
    soundSystem: "7.1 Surround",
    features: [
      "4DX Motion Seats",
      "Environmental Effects",
      "Wind",
      "Water",
      "Scents",
    ],
    location: "First Floor - Center",
    description:
      "4DX theater with motion seats and environmental effects for immersive experience.",
  },
  {
    id: 5,
    name: "Theater 5 - Premium",
    capacity: 200,
    type: "Premium",
    status: "active",
    screenSize: "16m x 9m",
    soundSystem: "Dolby Atmos",
    features: ["Premium Seating", "Laser Projection", "Enhanced Sound"],
    location: "First Floor - East Wing",
    description:
      "Premium theater with enhanced comfort and superior audio-visual experience.",
  },
  {
    id: 6,
    name: "Theater 6 - Standard",
    capacity: 150,
    type: "Standard",
    status: "inactive",
    screenSize: "14m x 8m",
    soundSystem: "5.1 Surround",
    features: ["Digital Projection", "Standard Seating"],
    location: "Second Floor - West Wing",
    description: "Standard theater currently out of service for renovation.",
  },
];

export function RoomsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage] = useState(5);
  const [rooms, setRooms] = useState<Room[]>(sampleRooms);
  const [deletingRoomId, setDeletingRoomId] = useState<number | null>(null);

  // Handle room deletion
  const handleDeleteRoom = async (roomId: number, roomName: string) => {
    setDeletingRoomId(roomId);
    try {
      // Simulate API call - replace with your actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Remove room from local state
      setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));

      // You can add toast notification here
      console.log(`Room "${roomName}" deleted successfully`);
    } catch (error) {
      console.error("Failed to delete room:", error);
      // You can add error toast notification here
    } finally {
      setDeletingRoomId(null);
    }
  };

  // Filter rooms based on search term
  const filteredRooms = rooms.filter(
    (room) =>
      room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.soundSystem.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredRooms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRooms = filteredRooms.slice(startIndex, endIndex);
  const [detailRoom, setDetailRoom] = useState<Room | null>(null);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getStatusBadge = (status: Room["status"]) => (
    <span
      className={`px-2 py-1 text-xs rounded-full ${
        status === "active"
          ? "bg-green-100 text-green-800"
          : status === "maintenance"
          ? "bg-yellow-100 text-yellow-800"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );

  const getTypeBadge = (type: Room["type"]) => (
    <span
      className={`px-2 py-1 text-xs rounded-full ${
        type === "IMAX"
          ? "bg-blue-100 text-blue-800"
          : type === "VIP"
          ? "bg-purple-100 text-purple-800"
          : type === "4DX"
          ? "bg-orange-100 text-orange-800"
          : type === "Premium"
          ? "bg-indigo-100 text-indigo-800"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      {type}
    </span>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#1E201E]">
            Rooms Management
          </h2>
          <p className="text-[#1E201E]">
            Manage all theater rooms in your cinema.
          </p>
        </div>
        <DialogCreateRoom
          onRoomCreated={(room) => {
            console.log("New room created:", room);
            // Here you can add the logic to update the rooms list
            // For example, refetch data or add to local state
            const newRoom: Room = {
              id: Math.max(...rooms.map((r) => r.id)) + 1,
              ...room,
              features:
                typeof room.features === "string"
                  ? room.features.split(",").map((f) => f.trim())
                  : room.features,
            };
            setRooms((prevRooms) => [...prevRooms, newRoom]);
          }}
        />
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search rooms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white text-[#1E201E] border-gray-300"
          />
        </div>
        <div className="text-sm text-[#1E201E]">
          {filteredRooms.length} room(s) found
        </div>
      </div>

      {/* Data Table */}
      <div className="rounded-lg border border-gray-300 bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[#1E201E]">Name</TableHead>
              <TableHead className="text-[#1E201E]">Type</TableHead>
              <TableHead className="text-[#1E201E]">Capacity</TableHead>
              <TableHead className="text-[#1E201E]">Screen Size</TableHead>
              <TableHead className="text-[#1E201E]">Sound System</TableHead>
              <TableHead className="text-[#1E201E]">Location</TableHead>
              <TableHead className="text-[#1E201E]">Status</TableHead>
              <TableHead className="text-right text-[#1E201E]">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentRooms.length > 0 ? (
              currentRooms.map((room) => (
                <TableRow key={room.id} className="border-gray-200">
                  <TableCell className="font-medium text-[#1E201E]">
                    <button
                      className="underline text-blue-600 hover:text-blue-800"
                      onClick={() => setDetailRoom(room)}
                    >
                      {room.name}
                    </button>
                  </TableCell>
                  <TableCell>{getTypeBadge(room.type)}</TableCell>
                  <TableCell className="text-[#1E201E]">
                    {room.capacity} seats
                  </TableCell>
                  <TableCell className="text-[#1E201E]">
                    {room.screenSize}
                  </TableCell>
                  <TableCell className="text-[#1E201E]">
                    {room.soundSystem}
                  </TableCell>
                  <TableCell className="text-[#1E201E]">
                    {room.location}
                  </TableCell>
                  <TableCell>{getStatusBadge(room.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <DialogUpdateRoom
                        room={room}
                        onRoomUpdated={(updatedRoom) => {
                          setRooms((prevRooms) =>
                            prevRooms.map((r) =>
                              r.id === room.id
                                ? {
                                    ...room,
                                    ...updatedRoom,
                                    features:
                                      typeof updatedRoom.features === "string"
                                        ? updatedRoom.features
                                            .split(",")
                                            .map((f: string) => f.trim())
                                        : updatedRoom.features,
                                  }
                                : r
                            )
                          );
                        }}
                      />
                      <DialogDeleteButton
                        iconOnly
                        size="sm"
                        title={`Delete "${room.name}"?`}
                        description={`Are you sure you want to delete "${room.name}"? This will permanently remove the room and all associated data from the system.`}
                        confirmText="Yes, delete room"
                        onConfirm={() => handleDeleteRoom(room.id, room.name)}
                        isLoading={deletingRoomId === room.id}
                        disabled={deletingRoomId !== null}
                        className="bg-[#B6B09F] text-[#1E201E] border-[#B6B09F] hover:bg-[#B6B09F]/80 hover:text-[#1E201E]"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="h-24 text-center text-[#1E201E]"
                >
                  No rooms found.
                </TableCell>
              </TableRow>
            )}
            {/* Room Detail Dialog */}
            {detailRoom && (
              <RoomDetailDialog
                open={!!detailRoom}
                onClose={() => setDetailRoom(null)}
                room={detailRoom}
              />
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-[#1E201E]">
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredRooms.length)} of {filteredRooms.length}{" "}
            entries
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="bg-[#B6B09F] text-[#1E201E] border-[#B6B09F] hover:bg-[#B6B09F]/80 hover:text-[#1E201E]"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 p-0 ${
                      currentPage === page
                        ? "bg-gray-800 text-white"
                        : "bg-[#B6B09F] text-[#1E201E] border-[#B6B09F] hover:bg-[#B6B09F]/80 hover:text-[#1E201E]"
                    }`}
                  >
                    {page}
                  </Button>
                )
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="bg-[#B6B09F] text-[#1E201E] border-[#B6B09F] hover:bg-[#B6B09F]/80 hover:text-[#1E201E]"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
