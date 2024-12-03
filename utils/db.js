const path = require('path')
const fs = require('fs')
const csv = require('csv-parser')

// Path to folder and file
const folderPath = path.join(__dirname, '../data')
const pathDb = path.join(folderPath, 'db.csv')

// Check if folder and file exist
const isFolderExist = fs.existsSync(folderPath)
const isExist = fs.existsSync(pathDb)

// Create folder and file if not exist
if (!isFolderExist) fs.mkdirSync(folderPath)
if (!isExist) fs.writeFileSync(pathDb, 'name,email\n')

module.exports = {
  async get() {
    const results = []
    return new Promise((resolve, reject) => {
      fs.createReadStream(pathDb)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
          resolve(results)
        })
        .on('error', (error) => {
          reject(error)
        })
    })
  },
  //getByName(name) {},
  //getByEmail(email) {},
  getOne(nameOrEmail) {},
  update() {},
  create() {},
  delete() {},
  deleteOne() {},
}
