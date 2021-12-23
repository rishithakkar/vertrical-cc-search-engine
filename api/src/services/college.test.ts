const request = require("supertest");
const app = require("../../app");
const { DUMMY_DATA } = require("../utils/data");

describe("College APIs", () => {
  it("Should fail without Secret Key", async () => {
    await request(app).get("/college/all").expect(401);
  });

  it("List all colleges", async () => {
    const { body, statusCode } = await request(app)
      .get("/college/all")
      .set("seceret-key", "f9bf78b9a18ce6d46a0cd2b0b86df9da");
    expect(statusCode).toBe(200);

    expect(body.data[0]).toHaveProperty("_id");
  });

  it("Get college detail when searched by title", async () => {
    const { body, statusCode } = await request(app)
      .get("/search/Princeton University")
      .set("seceret-key", "f9bf78b9a18ce6d46a0cd2b0b86df9da");
    expect(statusCode).toBe(200);

    expect(body.data[0]).toHaveProperty("_id");
  });

  it("Get college detail by ID", async () => {
    const { body, statusCode } = await request(app)
      .get("/college/61c4ac75e6adfabfeaccaf20")
      .set("seceret-key", "f9bf78b9a18ce6d46a0cd2b0b86df9da");
    expect(statusCode).toBe(200);

    expect(body.data).toHaveProperty("_id");
  });
});
