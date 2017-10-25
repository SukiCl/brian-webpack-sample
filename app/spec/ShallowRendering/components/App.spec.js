import { shallow } from "enzyme";
import App from "../../../src/components/App";
import Footer from "../../../src/components/Footer";
import AddTodo from "../../../src/containers/AddTodo";
import VisibleTodoList from "../../../src/containers/VisibleTodoList";
import { expect } from "chai";
import React from "react";

describe("app component test", () => {
  it("should have AddTodo", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(AddTodo)).to.have.length(1);
  });

  it("should have VisibleTodoList", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(VisibleTodoList)).to.have.length(1);
  });

  it("should have Footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).to.have.length(1);
  });
});
