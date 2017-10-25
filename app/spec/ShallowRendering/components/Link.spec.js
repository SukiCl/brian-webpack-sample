import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Link from "../../../src/components/Link";

describe("test Link component", () => {
  let x = 0;
  const click = () => {
    x += 1;
  };
  it("test Link component when active equal true", () => {
    const wrapper = shallow(
      <Link active={true} children="children" onClick={click} />
    );
    expect(wrapper.equals(<span>children</span>)).to.equal(true);
  });

  it("test Link component when active equal false", () => {
    const wrapper = shallow(
      <Link active={false} children="children" onClick={click} />
    );
    wrapper.find("a").simulate("click", { preventDefault() {} });
    expect(x).to.equal(1);
    expect(wrapper.matchesElement(<a href="#">children</a>)).to.equal(true);
  });
});
