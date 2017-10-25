import React from "react";
import { shallow } from "enzyme";
import TodoList from "../../../src/components/TodoList";
import Todo from "../../../src/components/Todo";

describe("test TodoList component", () => {
  let x = 0;
  const click = i => {
    x++;
  };
  it("todoList should match Todo", () => {
    const wrapper = shallow(
      <TodoList
        todos={[
          {
            id: 1,
            completed: true,
            text: "hello"
          },
          {
            id: 2,
            completed: false,
            text: "TodoList"
          }
        ]}
        onTodoClick={click}
      />
    );
    wrapper.find(Todo).at(0).simulate("click");
    expect(x).to.equal(1);
    wrapper.find(Todo).at(1).simulate("click");
    expect(x).to.equal(2);
    expect(wrapper.find(Todo)).to.have.length(2);
    expect(wrapper.find("ul")).to.have.length(1);
  });
});
