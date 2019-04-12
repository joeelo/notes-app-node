const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true, 
      type: "string"
    }, 
    body: {
      describe: "Body of the note", 
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true, 
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

const read = {
  command: "read", 
  describe: "Find and Read a Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
};

const list = {
  command: "list",
  describe: "Lists all the Notes titles",
  handler() {
    notes.listNotes();
  }
};

yargs.command(read);
yargs.command(list);

yargs.parse();
//yargs parse is necessary for the program to run.


// console.log(yargs.argv)
// console.log(chalk.bgGreen("Success!!"));
// console.log(validator.isEmail("j@gmail.com"));
// let joe = new Person("joe", "Lorenzo", 26);
// console.log(joe, taimur);
// let Person = require("./person.js");
// const add = require("./utils.js");