import { User } from "../models/user.model.js";

const UserViewProfileCOntroller = async (req, res) => {
  //   console.log("User profile view requested for:", req.user.uid);

  const userId = req.user.uid;

  try {
    const user = await User.findOne({ uid: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User profile fetched successfully", user }); // Return the user's profile
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const UserUpdateProfileCOntroller = async (req, res) => {
  //   console.log("User profile update requested for:", req.userData);

  const userId = req.user.uid;
  const updatedData = req.body; // The updated data sent from the frontend

  try {
    // Find the user in the database
    const user = await User.findOne({ uid: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Restrict which fields can be updated
    const allowedUpdates = [
      "name",
      //"picture",
      "age",
      "gender",
      "address",
      "phone",
    ];
    allowedUpdates.forEach((field) => {
      if (updatedData[field] !== undefined) {
        user[field] = updatedData[field];
      }
    });

    // Save updated user data
    await user.save();

    console.log("User profile updated successfully:", user);
    res
      .status(200)
      .json({ message: "User profile updated successfully", user });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { UserViewProfileCOntroller, UserUpdateProfileCOntroller };

// // patch (not put)
// const UserUpdateProfileCOntroller = async (userId) => {
//   console.log("User profile update requested for:", req.user.uid);

//   const userId = req.user.uid;
//   const updatedData = req.body; // The updated data sent from the frontend

//   try {
//     // Find the user in the database
//     let user = await User.findOne({ uid: userId });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Update the user profile data (excluding email)
//     user.name = updatedData.name || user.name;
//     user.picture = updatedData.picture || user.picture;
//     user.age = updatedData.age || user.age;
//     user.gender = updatedData.gender || user.gender;
//     user.address = updatedData.address || user.address;
//     user.phone = updatedData.phone || user.phone;

//     // Save the updated user data
//     await user.save();

//     res
//       .status(200)
//       .json({ message: "User profile updated successfully", user });
//   } catch (error) {
//     console.error("Error updating user profile:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
