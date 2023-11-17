import supertest from "supertest";

import app from "../app.js";

describe("Checking /books", () => {
  it("should return 200", async () => {
    const response = await supertest(app).get("/books");
    expect(response.statusCode).toBe(200);
    // expect a json response
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
    // expect an array
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it("should return 201", async () => {
    const response = await supertest(app).post("/books").send({
      title: "title",
      author: "author",
      price: 10,
    });
    expect(response.statusCode).toBe(201);
    // expect a json response
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  it("should return 400", async () => {
    const response = await supertest(app).post("/books").send({});
    expect(response.statusCode).toBe(400);
    // expect a json response
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  it("should return 200", async () => {
    const response = await supertest(app).get("/books/1");
    expect(response.statusCode).toBe(200);
    // expect a json response
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  it("should return 404", async () => {
    const response = await supertest(app).get("/books/999999999");
    expect(response.statusCode).toBe(404);
    // expect a json response
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  it("should return 200", async () => {
    const response = await supertest(app).put("/books/1").send({
      title: "title",
      author: "author",
      price: 10,
    });
    expect(response.statusCode).toBe(200);
    // expect a json response
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  it("should return 404", async () => {
    const response = await supertest(app).put("/books/999999999").send({
      title: "title",
    });
    expect(response.statusCode).toBe(404);
    // expect a json response
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  it("should return 204", async () => {
    const response = await supertest(app).delete("/books/1");
    expect(response.statusCode).toBe(204);
  });

  it("should return 404", async () => {
    const response = await supertest(app).delete("/books/999999999");
    expect(response.statusCode).toBe(404);
  });

  it("should return 400", async () => {
    const response = await supertest(app).delete("/books/abc");
    expect(response.statusCode).toBe(400);
  });

  it("should return 400", async () => {
    const response = await supertest(app).put("/books/abc").send({
      title: "title",
    });
    expect(response.statusCode).toBe(400);
  });

  it("should return 400", async () => {
    const response = await supertest(app).post("/books").send({
      title: "title",
    });
    expect(response.statusCode).toBe(400);
  });

});
