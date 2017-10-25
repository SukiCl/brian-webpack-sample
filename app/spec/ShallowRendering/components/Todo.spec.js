import React from "react";
import { shallow } from "enzyme";
import Todo from "../../../src/components/Todo";

describe("test Todo component", () => {
  let x = 0;
  const click = () => {
    x++;
  };
  it("test Todo component when completed equal true", () => {
    const wrapper = shallow(
      <Todo onClick={click} completed={true} text="Todo" />
    );
    wrapper.find("li").simulate("click");
    expect(x).to.equal(1);
    expect(wrapper.prop("style")).to.include({
      textDecoration: "line-through"
    });
    expect(
      wrapper.matchesElement(
        <li style={{ textDecoration: "line-through" }}>Todo</li>
      )
    ).to.equal(true);
  });

  it("test Todo component when completed equal false", () => {
    const wrapper = shallow(
      <Todo onClick={click} completed={false} text="Todo" />
    );
    wrapper.find("li").simulate("click");
    expect(x).to.equal(2);
    expect(
      wrapper.matchesElement(<li style={{ textDecoration: "none" }}>Todo</li>)
    ).to.equal(true);
  });
});
