"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { cinemaData } from "../../Mocdata/cinemaData";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

interface Showtime {
  id: string;
  time: string;
  price: number;
  availableSeats: number;
}

interface BookingData {
  movieId: number | null;
  date: string;
  showtime: Showtime | null;
  selectedSeats: string[];
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
}

// Mock showtimes (moved outside component to avoid re-rendering issues)
const showtimes: Showtime[] = [
  { id: "1", time: "10:00", price: 12, availableSeats: 25 },
  { id: "2", time: "13:30", price: 15, availableSeats: 18 },
  { id: "3", time: "16:45", price: 15, availableSeats: 30 },
  { id: "4", time: "19:30", price: 18, availableSeats: 12 },
  { id: "5", time: "22:15", price: 18, availableSeats: 8 },
];

export default function TicketsPage() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1); // 1: Movie & Time, 2: Seats, 3: Customer Info, 4: Payment
  const [bookingData, setBookingData] = useState<BookingData>({
    movieId: null,
    date: "",
    showtime: null,
    selectedSeats: [],
    customerInfo: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // Generate dates for the next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toISOString().split("T")[0];
  });

  // Handle URL parameters for pre-filling movie and showtime
  useEffect(() => {
    const movieIdParam = searchParams.get("movieId");
    const showtimeParam = searchParams.get("showtime");

    if (movieIdParam) {
      const movieId = parseInt(movieIdParam);
      setBookingData((prev) => ({ ...prev, movieId }));
    }

    if (showtimeParam) {
      // Convert showtime format from "10:00 AM" to "10:00"
      const timeMatch = showtimeParam.match(/(\d{1,2}:\d{2})/);
      const time = timeMatch ? timeMatch[1] : showtimeParam;

      // Find matching showtime from our mock data
      const matchingShowtime = showtimes.find((st) => st.time === time);
      if (matchingShowtime) {
        setBookingData((prev) => ({ ...prev, showtime: matchingShowtime }));
      }
    }

    // Auto-set today's date if coming from movie page
    if (movieIdParam && !searchParams.get("date")) {
      const today = new Date().toISOString().split("T")[0];
      setBookingData((prev) => ({ ...prev, date: today }));
    }
  }, [searchParams]);

  // Generate seat layout (8 rows, 12 seats per row)
  const generateSeats = () => {
    const seats = [];
    const rows = "ABCDEFGH";
    for (const row of rows) {
      for (let seat = 1; seat <= 12; seat++) {
        const seatId = `${row}${seat}`;
        // Randomly make some seats occupied for demo
        const isOccupied = Math.random() < 0.3;
        seats.push({
          id: seatId,
          row,
          number: seat,
          isOccupied,
          isSelected: bookingData.selectedSeats.includes(seatId),
        });
      }
    }
    return seats;
  };

  const selectedMovie = bookingData.movieId
    ? cinemaData.allMovies.find((movie) => movie.id === bookingData.movieId)
    : null;

  const handleSeatClick = (seatId: string) => {
    setBookingData((prev) => ({
      ...prev,
      selectedSeats: prev.selectedSeats.includes(seatId)
        ? prev.selectedSeats.filter((id) => id !== seatId)
        : [...prev.selectedSeats, seatId],
    }));
  };

  const calculateTotal = () => {
    if (!bookingData.showtime) return 0;
    return bookingData.selectedSeats.length * bookingData.showtime.price;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return bookingData.movieId && bookingData.date && bookingData.showtime;
      case 2:
        return bookingData.selectedSeats.length > 0;
      case 3:
        return (
          bookingData.customerInfo.name &&
          bookingData.customerInfo.email &&
          bookingData.customerInfo.phone
        );
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Book Your Tickets
          </h1>

          {/* Progress Bar */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= stepNumber
                        ? "bg-red-600 text-white"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 4 && (
                    <div
                      className={`w-16 h-1 ${
                        step > stepNumber ? "bg-red-600" : "bg-gray-700"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Labels */}
          <div className="flex justify-center mt-4">
            <div className="flex space-x-16 text-sm">
              <span className={step >= 1 ? "text-white" : "text-gray-400"}>
                Select Movie
              </span>
              <span className={step >= 2 ? "text-white" : "text-gray-400"}>
                Choose Seats
              </span>
              <span className={step >= 3 ? "text-white" : "text-gray-400"}>
                Your Info
              </span>
              <span className={step >= 4 ? "text-white" : "text-gray-400"}>
                Payment
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Step 1: Movie & Time Selection */}
        {step === 1 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">Select Movie & Showtime</h2>

            {/* Movie Selection */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Choose a Movie</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {cinemaData.allMovies.slice(0, 12).map((movie) => (
                  <div
                    key={movie.id}
                    className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                      bookingData.movieId === movie.id
                        ? "ring-4 ring-red-500 scale-105"
                        : "hover:scale-105"
                    }`}
                    onClick={() =>
                      setBookingData((prev) => ({ ...prev, movieId: movie.id }))
                    }
                  >
                    <Image
                      src={movie.poster}
                      alt={movie.title}
                      width={200}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 bg-gray-800">
                      <h4 className="font-semibold text-sm line-clamp-2">
                        {movie.title}
                      </h4>
                      <p className="text-gray-400 text-xs">{movie.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            {bookingData.movieId && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Select Date</h3>
                <div className="flex space-x-3 overflow-x-auto pb-2">
                  {dates.map((date) => (
                    <button
                      key={date}
                      className={`flex-shrink-0 px-4 py-3 rounded-lg font-semibold transition-all ${
                        bookingData.date === date
                          ? "bg-red-600 text-white"
                          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      }`}
                      onClick={() =>
                        setBookingData((prev) => ({ ...prev, date }))
                      }
                    >
                      {formatDate(date)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Showtime Selection */}
            {bookingData.date && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Select Showtime</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {showtimes.map((showtime) => (
                    <button
                      key={showtime.id}
                      className={`p-4 rounded-lg border transition-all ${
                        bookingData.showtime?.id === showtime.id
                          ? "border-red-500 bg-red-600/20 text-white"
                          : "border-gray-700 bg-gray-800 hover:border-gray-600"
                      }`}
                      onClick={() =>
                        setBookingData((prev) => ({ ...prev, showtime }))
                      }
                    >
                      <div className="text-lg font-bold">{showtime.time}</div>
                      <div className="text-sm text-gray-400">
                        ${showtime.price}
                      </div>
                      <div className="text-xs text-gray-500">
                        {showtime.availableSeats} seats left
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Seat Selection */}
        {step === 2 && selectedMovie && (
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <Image
                src={selectedMovie.poster}
                alt={selectedMovie.title}
                width={100}
                height={150}
                className="rounded-lg"
              />
              <div>
                <h2 className="text-2xl font-bold">{selectedMovie.title}</h2>
                <p className="text-gray-400">
                  {formatDate(bookingData.date)} at {bookingData.showtime?.time}
                </p>
                <p className="text-yellow-400">★ {selectedMovie.rating}/10</p>
              </div>
            </div>

            {/* Screen */}
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-gray-700 to-gray-600 px-20 py-2 rounded-t-3xl mb-8">
                <span className="text-gray-300 font-semibold">SCREEN</span>
              </div>
            </div>

            {/* Seat Layout */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-12 gap-2">
                {generateSeats().map((seat) => (
                  <div key={seat.id} className="flex justify-center">
                    {seat.number === 1 && (
                      <div className="absolute -ml-8 mt-2 text-gray-400 font-semibold">
                        {seat.row}
                      </div>
                    )}
                    <button
                      className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all ${
                        seat.isOccupied
                          ? "bg-red-800 text-red-400 cursor-not-allowed"
                          : seat.isSelected
                          ? "bg-green-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                      onClick={() =>
                        !seat.isOccupied && handleSeatClick(seat.id)
                      }
                      disabled={seat.isOccupied}
                    >
                      {seat.number}
                    </button>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex justify-center space-x-8 mt-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-700 rounded"></div>
                  <span className="text-sm text-gray-400">Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-600 rounded"></div>
                  <span className="text-sm text-gray-400">Selected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-800 rounded"></div>
                  <span className="text-sm text-gray-400">Occupied</span>
                </div>
              </div>

              {/* Selected Seats Summary */}
              {bookingData.selectedSeats.length > 0 && (
                <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold mb-2">Selected Seats:</h4>
                  <p className="text-gray-300">
                    {bookingData.selectedSeats.join(", ")}
                  </p>
                  <p className="text-xl font-bold text-green-400 mt-2">
                    Total: ${calculateTotal()}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Customer Information */}
        {step === 3 && (
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold mb-6">Your Information</h2>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="text-gray-400">Movie:</span>{" "}
                  {selectedMovie?.title}
                </p>
                <p>
                  <span className="text-gray-400">Date:</span>{" "}
                  {formatDate(bookingData.date)}
                </p>
                <p>
                  <span className="text-gray-400">Time:</span>{" "}
                  {bookingData.showtime?.time}
                </p>
                <p>
                  <span className="text-gray-400">Seats:</span>{" "}
                  {bookingData.selectedSeats.join(", ")}
                </p>
                <p className="text-xl font-bold text-green-400">
                  <span className="text-gray-400">Total:</span> $
                  {calculateTotal()}
                </p>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none"
                  value={bookingData.customerInfo.name}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      customerInfo: {
                        ...prev.customerInfo,
                        name: e.target.value,
                      },
                    }))
                  }
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none"
                  value={bookingData.customerInfo.email}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      customerInfo: {
                        ...prev.customerInfo,
                        email: e.target.value,
                      },
                    }))
                  }
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none"
                  value={bookingData.customerInfo.phone}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      customerInfo: {
                        ...prev.customerInfo,
                        phone: e.target.value,
                      },
                    }))
                  }
                  placeholder="Enter your phone number"
                />
              </div>
            </form>
          </div>
        )}

        {/* Step 4: Payment */}
        {step === 4 && (
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold mb-6">Payment</h2>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">
                Final Booking Summary
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="text-gray-400">Movie:</span>{" "}
                  {selectedMovie?.title}
                </p>
                <p>
                  <span className="text-gray-400">Date:</span>{" "}
                  {formatDate(bookingData.date)}
                </p>
                <p>
                  <span className="text-gray-400">Time:</span>{" "}
                  {bookingData.showtime?.time}
                </p>
                <p>
                  <span className="text-gray-400">Seats:</span>{" "}
                  {bookingData.selectedSeats.join(", ")}
                </p>
                <p>
                  <span className="text-gray-400">Customer:</span>{" "}
                  {bookingData.customerInfo.name}
                </p>
                <hr className="border-gray-700 my-4" />
                <p className="text-2xl font-bold text-green-400">
                  Total: ${calculateTotal()}
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    id="card"
                    defaultChecked
                    className="text-red-600"
                  />
                  <label htmlFor="card" className="font-medium">
                    Credit/Debit Card
                  </label>
                </div>

                <div className="pl-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    id="paypal"
                    className="text-red-600"
                  />
                  <label htmlFor="paypal" className="font-medium">
                    PayPal
                  </label>
                </div>
              </div>
            </div>

            <ButtonComponent
              text="Complete Booking"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              onClick={() => alert("Booking completed successfully!")}
            />
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <ButtonComponent
            text="Previous"
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              step === 1
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
            onClick={handleBack}
            disabled={step === 1}
          />

          {step < 4 && (
            <ButtonComponent
              text="Next"
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                canProceed()
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-gray-700 text-gray-500 cursor-not-allowed"
              }`}
              onClick={handleNext}
              disabled={!canProceed()}
            />
          )}
        </div>
      </div>
    </div>
  );
}
