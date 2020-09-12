import React from "react";

import { render, cleanup , waitForElement } from "@testing-library/react";

import Application from "components/Application";
import { fireEvent } from "@testing-library/react/dist";

afterEach(cleanup);

// it("renders without crashing", () => {
//   render(<Application />);
// });

it('Defaults to Monday and changes the schedule when a new day is selected', async () => {
  const { getByText } = render(<Application />);

  await waitForElement(() => getByText("Monday"))
  
  fireEvent.click(getByText("Tuesday"));
  
  expect(getByText("Leopold Silvers")).toBeInTheDocument();
});


// it('loads data, books an interview and reduces the spots remaining for the first day by 1' () => {
  
// });