import React from "react";
import { shallowWithStore, shallowWithState } from "enzyme-redux";
import { createMockStore } from "redux-test-utils";
import VisibleTodoList from "../../../src/containers/VisibleTodoList";

describe("example shallowWithStore", () => {
  it("should be todos when the filter filter is 'SHOW_ALL'", () => {
    const component = shallowWithStore(
      <VisibleTodoList />,
      createMockStore({
        todos: [{ id: 1, completed: true, text: "text" }],
        visibilityFilter: "SHOW_ALL"
      })
    );
    expect(component.props().todos[0]).to.include({
      id: 1,
      completed: true,
      text: "text"
    });
  });

  it("should be todos.filter when the  filter is 'SHOW_COMPLETED' and completed id true", () => {
    const component = shallowWithStore(
      <VisibleTodoList />,
      createMockStore({
        todos: [
          { id: 1, completed: true, text: "text" },
          { id: 2, completed: false, text: "text" }
        ],
        visibilityFilter: "SHOW_COMPLETED"
      })
    );
    expect(component.props().todos[0]).to.include({
      id: 1,
      completed: true,
      text: "text"
    });
  });

  it("should be todos.filter when the  filter is 'SHOW_COMPLETED' and completed id false", () => {
    const component = shallowWithStore(
      <VisibleTodoList />,
      createMockStore({
        todos: [
          { id: 1, completed: true, text: "text" },
          { id: 2, completed: false, text: "text" }
        ],
        visibilityFilter: "SHOW_ACTIVE"
      })
    );
    expect(component.props().todos[0]).to.include({
      id: 2,
      completed: false,
      text: "text"
    });
  });

  it("should throw error when the filter is default", () => {
    try {
      const component = shallowWithStore(
        <VisibleTodoList />,
        createMockStore({
          todos: [
            { id: 1, completed: true, text: "text" },
            { id: 2, completed: false, text: "text" }
          ],
          visibilityFilter: "default"
        })
      );
    } catch (err) {
      expect(err).to.include(new Error("Unknown filter: default"));
    }
  });
});
