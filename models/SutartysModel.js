import mongoose from "mongoose";

const SutartysSchema = new mongoose.Schema(
  {
    pavadinimas: String,
    VAT: Number,
    asmuo: String,
    adresas: String,
    patikslinimas: String,
    sutarimai: String,
    parasas: String,
    pasirasytas: {
      type: Boolean,
      default: false,
    },
    info: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Sutartys", SutartysSchema);
