import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Seat {
  id: number;
  label: string;
  type: string;
}

import type { Room } from "./RoomsList";

interface RoomDetailDialogProps {
  open: boolean;
  onClose: () => void;
  room: Room;
}

export function RoomDetailDialog({
  open,
  onClose,
  room,
}: RoomDetailDialogProps) {
  // Mock seat data per room
  const [seats, setSeats] = useState<Seat[]>([
    { id: 1, label: "A1", type: "Standard" },
    { id: 2, label: "A2", type: "Standard" },
    { id: 3, label: "B1", type: "VIP" },
  ]);
  const [editingSeat, setEditingSeat] = useState<Seat | null>(null);
  const [newSeatLabel, setNewSeatLabel] = useState("");
  const [newSeatType, setNewSeatType] = useState("");

  const handleAddSeat = () => {
    if (!newSeatLabel || !newSeatType) return;
    setSeats([
      ...seats,
      { id: Date.now(), label: newSeatLabel, type: newSeatType },
    ]);
    setNewSeatLabel("");
    setNewSeatType("");
  };

  const handleEditSeat = (seat: Seat) => {
    setEditingSeat(seat);
    setNewSeatLabel(seat.label);
    setNewSeatType(seat.type);
  };

  const handleSaveEdit = () => {
    if (!editingSeat) return;
    setSeats(
      seats.map((s) =>
        s.id === editingSeat.id
          ? { ...s, label: newSeatLabel, type: newSeatType }
          : s
      )
    );
    setEditingSeat(null);
    setNewSeatLabel("");
    setNewSeatType("");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogTitle>Room Details: {room.name}</DialogTitle>
        <div className="mb-4">
          <div>
            <b>Type:</b> {room.type}
          </div>
          <div>
            <b>Status:</b> {room.status}
          </div>
          <div>
            <b>Capacity:</b> {room.capacity}
          </div>
          <div>
            <b>Screen Size:</b> {room.screenSize}
          </div>
          <div>
            <b>Sound System:</b> {room.soundSystem}
          </div>
          <div>
            <b>Location:</b> {room.location}
          </div>
          <div>
            <b>Description:</b> {room.description}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Seats</h3>
          <ul className="mb-2">
            {seats.map((seat) => (
              <li
                key={seat.id}
                className="flex items-center justify-between mb-1"
              >
                <span>
                  {seat.label} ({seat.type})
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEditSeat(seat)}
                >
                  Edit
                </Button>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 mb-2">
            <Input
              placeholder="Seat Label (e.g. A3)"
              value={newSeatLabel}
              onChange={(e) => setNewSeatLabel(e.target.value)}
            />
            <Input
              placeholder="Seat Type (e.g. Standard)"
              value={newSeatType}
              onChange={(e) => setNewSeatType(e.target.value)}
            />
            {editingSeat ? (
              <Button onClick={handleSaveEdit}>Save</Button>
            ) : (
              <Button onClick={handleAddSeat}>Add</Button>
            )}
            {editingSeat && (
              <Button variant="ghost" onClick={() => setEditingSeat(null)}>
                Cancel
              </Button>
            )}
          </div>
        </div>
        <Button className="mt-2" onClick={onClose}>
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
}
