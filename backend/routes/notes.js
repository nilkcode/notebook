const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

// Route::1  //-----  Get All the notes  a user using: GET "api/notes/fetchallnotes"  login required -----//

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route::2  //-----  Add a new notes using: Post "api/notes/addnote"  login required -----//

router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a title name").isLength({ min: 3 }),
    body("description", "Description must atleast five charecter").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      // If there are errors , return Bad request and the errors
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
