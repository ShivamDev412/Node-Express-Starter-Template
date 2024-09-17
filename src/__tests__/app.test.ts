// eslint-disable-next-line import/no-extraneous-dependencies
import request from "supertest";
import app from "../app";

describe("GET /", () => {
  it("should return a welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Welcome to Nestify User Service!");
  });
});
