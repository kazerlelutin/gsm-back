const db = require('../utils/db')

module.exports = {
  async get(req, res) {
    const data = await db.get()
    res.json(data)
  },
}
