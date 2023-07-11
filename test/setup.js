const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;

let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
})

afterAll(async () => {
  await mongoServer.stop()

  global.gc && global.gc()
})
