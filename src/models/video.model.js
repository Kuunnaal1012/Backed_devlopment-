import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // Cloudinary URL for video file
      required: true,
    },
    thumbnail: {
      type: String, // Cloudinary URL for thumbnail
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, // Duration in seconds
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    videoOwner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true, // Ensuring that a video always belongs to a user
    },
  },
  { timestamps: true }
);

// Add pagination support
videoSchema.plugin(mongooseAggregatePaginate);

// Export the model
export const Video = mongoose.model("Video", videoSchema);
