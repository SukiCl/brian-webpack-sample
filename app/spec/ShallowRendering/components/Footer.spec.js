import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import FilterLink from "../../../src/containers/FilterLink";
import Footer from "../../../src/components/Footer";

describe("Footer component test", () => {
  it("should have FilterLink", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(FilterLink)).to.have.length(3);
  });
});
