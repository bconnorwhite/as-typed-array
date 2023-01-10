import { test, expect } from "@jest/globals";
import asArray from "../source/index.js";

test("array", () => {
  expect(asArray(["ok"])[0]).toBe("ok");
});

test("string", () => {
  expect(asArray("ok")[0]).toBe("ok");
});

test("object", () => {
  expect(asArray({ ok: true })[0].ok).toBe(true);
});

test("undefined", () => {
  expect(asArray(undefined).length).toBe(1);
});
