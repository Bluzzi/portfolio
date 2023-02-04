import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { LinkButton } from "./link-button";

describe("LinkButton", () => {
  test("display the content", () => {
    render(<LinkButton>About</LinkButton>);

    expect(screen.getByText("About")).toBeDefined();
  });

  test("render the right tag", () => {
    render(<LinkButton>About</LinkButton>);

    expect(screen.getByText("About").tagName).toBe("A");
  });

  test("the attributes are well defined", () => {
    render(<LinkButton href="/about" target="_blank">About</LinkButton>);

    expect(screen.getByText("About").getAttribute("href")).toBe("/about");
    expect(screen.getByText("About").getAttribute("target")).toBe("_blank");
  });
});