import { expect, test } from 'vitest';
import express from 'express';
import request from 'supertest';
import app from './app.js'



test("GET /api/health works", () => {
request(app)
app.get("/api/health", function (req, res) {
    res.status(200).json({ name: "john" });
  });
  expect(response.status).toEqual(200)
  it("responds with json", async function () {
    const response = await request(app).get("/users").set
})