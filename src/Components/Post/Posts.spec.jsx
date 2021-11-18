import React from "react";
import { render, screen } from "@testing-library/react";
import { Posts } from ".";

const props = [
  {
    title: "title 1",
    body: "body",
    id: 1,
    cover: "img/img.png",
  },
  {
    title: "title 2",
    body: "body2",
    id: 2,
    cover: "img/img2.png",
  },
  {
    title: "title 3",
    body: "body3",
    id: 3,
    cover: "img/img3.png",
  },
];

describe("<Posts />", () => {
  it("should render Posts ", () => {
    render(<Posts posts={props} />);

    expect(screen.getAllByRole("heading", { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole("img", { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
    expect(screen.getByRole("img", { name: /title 3/i })).toHaveAttribute(
      "src",
      "img/img3.png"
    );
  });
});
