const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
yargs(hideBin(process.argv))
  .command(
    "init",
    "Initialize a new repository",
    {},
    initRepo
  )
  .command(
  "add <file>",
  "Add a file to the repository",
  (yargs) => {
    return yargs.positional("file", {
      describe: "File to add",
      type: "string",
    });
  },
  addRepo
)
  .help()
  .argv;