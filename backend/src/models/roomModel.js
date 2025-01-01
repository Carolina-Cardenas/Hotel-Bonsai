import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  maxOccupancy: {
    type: Number,
    required: true,
  },
  costPerNight: {
    type: Number,
    required: true,
  },
  reserved: {
    type: Boolean,
    default: false,
  },
});

const Room = mongoose.model("Room", RoomSchema);

export default Room;
