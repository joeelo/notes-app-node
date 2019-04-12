const fs = require("fs")
const chalk = require("chalk")

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title.toUpperCase() === title.toUpperCase())
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    savedNotes(notes);
    console.log(chalk.bgGreen("Note Saved!"))
  } else {
    console.log(chalk.bgRed("you've already saved a Note with the same title"));
  }
  // const duplicateNotes = notes.filter(note => note.title === title)
  // We changed dupNotes to dupNotes so the method doesn't run through entire array
  // Since there should only be one instance find works much faster and cleaner;
}

const removeNote = (title) => {
  try {
    const notes = loadNotes();
    const newNotesArray = notes.filter(note => note.title !== title)
      if (newNotesArray.length !== notes.length) {
        console.log(chalk.bgGreen("Note Removed!"))
      } else {
        console.log(chalk.bgRed("No Note with that title"));
      }
    savedNotes(newNotesArray);
  } catch (error) {
      console.log("something wen't wrong");
  }
}

const listNotes = () => {
  try {
    notes = loadNotes();
    console.log(chalk.bgCyan("Your Notes"))
    notes.forEach(note => console.log(chalk.bgCyan(note.title)));
  } catch(error) {
    console.log(chalk.bgRed("Something went wrong!"));
  }
}

const readNote = (title) => {
  try {
    notes = loadNotes();
    foundNote = notes.find((note) => note.title.toUpperCase() === title.toUpperCase())
    if (foundNote) {
      console.log(chalk.bgCyan(foundNote.title + ":"))
      console.log(foundNote.body);
    } else {
      console.log(chalk.bgRed("No Note Found with that Title"));
    }
  } catch(error) {
    console.log(chalk.bgRed("Something went wrong!"));
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return data = JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

const savedNotes = (notes) => {
  const JSONdata = JSON.stringify(notes);
  fs.writeFileSync("notes.json", JSONdata);
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}