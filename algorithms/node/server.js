const fs = require('fs').promises;

async function main() {
  console.log(await findFiles('test'));
}

main();

async function findFiles(folderName) {
  let files = [];
  let items = await fs.readdir(folderName, { withFileTypes: true });

  for (let item of items) {
    files.push(item);
  }
  return files;
}
