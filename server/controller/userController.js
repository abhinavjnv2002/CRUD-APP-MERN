// Import the User model
import User from "../model/userModel.js";

// Controller function to create a new user
export const create = async (req, res) => {
    try {
        const userData = new User(req.body);
        if (!userData) {
            res.status(404).json({ msg: "User data not found" });
        }
        const savedData = await userData.save();
        res.status(200).json({ msg: "Signin successful", savedData });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// Controller function to get all users
export const getAll = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData) {
            res.status(404).json({ msg: "User data not found" });
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// Controller function to get a single user by ID
export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            res.status(404).json({ msg: "User data not found" });
        }
        res.status(200).json(userExist);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// Controller function to update a user by ID
export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            res.status(404).json({ msg: "User data not found" });
        }

        const updatedData = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ msg: "User updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// Controller function to delete a user by ID
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ msg: "User data not found" });
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
