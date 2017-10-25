import FilterLink from "../../../src/containers/FilterLink";
import { shallowWithStore } from "enzyme-redux";
import { createMockStore } from "redux-test-utils";
import { expect } from "chai";
import React from "react";
import { setVisibilityFilter } from "../../../src/actions";

describe("test the FilterLink container", () => {
  it("test the filter when ownProps.filter equal state.visibilityFilter", () => {
    const component = shallowWithStore(
      <FilterLink children="children" />,
      createMockStore({ visibilityFilter: "filter" }, { filter: "filter" })
    );
    expect(component.props().active).to.equal(false);
  });

  it("test the filter when ownProps.filter not equal state.visibilityFilter", () => {
    const abc = "SHOW_ALL";
    const component = shallowWithStore(
      <FilterLink children="children" />,
      createMockStore(
        { visibilityFilter: "" },
        { filter: "SET_VISIBILITY_FILTER" }
      )
    );
    expect(component.props().active).to.equal(false);
  });

  it("test the dispatcher", () => {
    const store = createMockStore();
    const component = shallowWithStore(
      <FilterLink children="children" />,
      createMockStore({ visibilityFilter: "filter" }, { filter: "filter" }),
      createMockStore()
    );
    component.props().onClick();
    expect(store.isActionDispatched(setVisibilityFilter("filter"))).to.equal(
      false
    );
  });
});
