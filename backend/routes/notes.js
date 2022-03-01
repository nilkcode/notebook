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

// Route::3  //-----  Update a new notes using: Put "api/notes/updatenote"  login required -----//

router.put(
  "/updatenote/:id",
  fetchuser,

  async (req, res) => {
    const { title, description, tag } = req.body;

    try {
      // create new notes
      const newNote = {};
      if (title) {
        newNote.title = title;
      }
      if (description) {
        newNote.description = description;
      }
      if (tag) {
        newNote.tag = tag;
      }

      // find the node to be updated and update It

      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send("Not Found");
      }

      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not allowed");
      }

      note = await Note.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );

      res.json({ note });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Route::4  //-----  Delete any notes using: delete "api/notes/deletenote"  login required -----//

router.delete(
  "/deletenote/:id",
  fetchuser,

  async (req, res) => {
    const { title, description, tag } = req.body;

    try {
      // find the node to be deleted and deleted It

      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send("Not Found");
      }

      // Allow deletion only if user  owns  this note

      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not allowed");
      }

      note = await Note.findByIdAndDelete(req.params.id);

      res.json({ Success: "Note has been Deleted", note: note });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
