import { asynchHandler } from "../utils/asynchHandler.js";

// Async handler for the registerUser route
const registerUser = asynchHandler(async (req, res) => {
   // Your registration logic would go here (e.g., creating a user in the database)
   res.status(200).json({
      message: 'Registration successful'
   });
});

export { registerUser };
