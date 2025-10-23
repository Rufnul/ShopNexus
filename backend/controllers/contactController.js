import Contact from "../models/Contact.js";

const createContact = async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
        return res.status(400).json({ message: "All fields are required" });

    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ message: "Message sent successfully", contact });
};

export { createContact };
