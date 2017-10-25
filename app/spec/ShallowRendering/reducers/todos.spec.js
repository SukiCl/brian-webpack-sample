import React from "react";
import { expect } from "chai";
import todos from "../../../src/reducers/todos";

describe("test todos reducers", () => {
  it("should take the ADD_TODO action", () => {
    expect(
      todos([], {
        id: 1,
        text: "action",
        type: "ADD_TODO"
      })[0]
    ).to.include({
      id: 1,
      text: "action",
      completed: false
    });
  });

  it("should take the TOGGLE_TODO action", () => {
    expect(
      todos(
        [
          {
            id: 1,
            text: "action",
            completed: true
          }
        ],
        {
          id: 1,
          type: "TOGGLE_TODO"
        }
      )[0]
    ).to.include({ id: 1, text: "action", completed: false });

    expect(
      todos(
        [
          {
            id: 0,
            text: "action",
            completed: true
          }
        ],
        {
          id: 1,
          type: "TOGGLE_TODO"
        }
      )[0]
    ).to.include({
      id: 0,
      text: "action",
      completed: true
    });
  });

  it("should take the default action", () => {
    expect(
      todos(
        { id: 1, text: "add", completed: true },
        { id: 10, text: "action", type: "default" }
      )
    ).to.include({ id: 1, text: "add", completed: true });
  });

  it("should take the undefined action", () => {
    expect(todos(undefined, {})).to.have.lengthOf(0);
  });
});
