import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  test("renders the Button component", async () => {
    const { getByTestId } = render(<div><Button label="Hello world!" /></div>);
    const btn = getByTestId("btn-id");
    await new Promise(process.nextTick);

    fireEvent(
      btn,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    expect(btn).toBeDefined();
    console.log(btn.style);
    console.log(window.getComputedStyle(btn).getPropertyValue("background-color"));

    expect(btn).toHaveStyle(`background-color: blue`);
  });
});
