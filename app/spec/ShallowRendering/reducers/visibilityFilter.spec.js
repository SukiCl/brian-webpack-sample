import React from "react";
import { expect } from "chai";
import visibilityFilter from "../../../src/reducers/visibilityFilter";

describe("test the visibility filter reducer", () => {
  it("should handle the SET_VISIBILITY_FILTER action", () => {
    expect(
      visibilityFilter([], { type: "SET_VISIBILITY_FILTER", filter: "filter" })
    ).to.equal("filter");
  });

  it("should handle the default action", () => {
    expect(
      visibilityFilter("state", { type: "default", filter: "filter" })
    ).equal("state");
  });

  it("should take the undefined action", () => {
    expect(
      visibilityFilter(undefined, { type: "default", filter: "filter" })
    ).equal("SHOW_ALL");
  });
});
