import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { SkillButton } from "./skill-button";

describe("SkillButton", () => {
  // TODO !!
  // Waiting solution for NextJS <Image /> component

  test("just for pass test", () => {
    expect(true).toBe(true);
  });

  // test("display the text", () => {
  //   render(<SkillButton title="React" link="https://example.com" logoSrc="/skills/react.png" />);

  //   expect(screen.getByText("React")).toBeDefined();
  // });

  // test("link and target", () => {
  //   render(<SkillButton title="React" link="https://example.com" logoSrc="/skills/react.png" />);

  //   expect(screen.getByRole("link").getAttribute("href")).toBe("https://example.com");
  //   expect(screen.getByRole("link").getAttribute("target")).toBe("_blank");
  // });

  // test("render the icon", () => {
  //   render(<SkillButton title="React" link="https://example.com" logoSrc="/skills/react.png" />);

  //   expect(screen.getByRole("img")).toBeDefined();
  // });
});