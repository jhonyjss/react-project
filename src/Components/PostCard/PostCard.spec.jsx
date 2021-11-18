import React from "react";
import { render, screen } from "@testing-library/react";
import PostCard from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;
describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    render(
      <PostCard
        key={props.id}
        title={props.title}
        body={props.body}
        id={props.id}
        cover={props.cover}
      />
    );
    expect(screen.getByAltText("title 1")).toHaveAttribute("src", props.cover);

    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument();

    expect(screen.getByText("body", "title 1")).toBeInTheDocument();
  });

  /*  it("should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  }); */
});
