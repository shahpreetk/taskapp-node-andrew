const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");

beforeEach(async () => {
  await User.deleteMany();
});

test("Should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Bunny",
      email: "blah@email.com",
      password: "fluffybunny",
      age: 5,
    })
    .expect(201);
});
