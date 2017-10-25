import { addTodo, setVisibilityFilter, toggleTodo } from "../../../src/actions";
import { expect } from "chai";
import React from "react";

describe("actions test", () => {
  describe("test the addTodo function", () => {
    it("addTodo(STRING) type should create ADD_TODO action", () => {
      expect(addTodo("add")).to.include({
        type: "ADD_TODO",
        id: 0,
        text: "add"
      });
    });
  });

  describe("test the setVisibilityFilter function", () => {
    it("setVisibilityFilter(STRING) TYPE should create SET_VISIBILITY_FILTER action", () => {
      expect(setVisibilityFilter("set")).to.include({
        type: "SET_VISIBILITY_FILTER",
        filter: "set"
      });
    });
  });

  describe("test the TOGGLE_TODO function", () => {
    it("TOGGLE_TODO(STRING) should create TOGGLE_TODO action", () => {
      expect(toggleTodo("toggle")).to.include({
        type: "TOGGLE_TODO",
        id: "toggle"
      });
    });
  });
});
