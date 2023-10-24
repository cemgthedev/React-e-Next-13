import { render } from "@testing-library/react";
import Home from "./page";

test('hello tests', () => {
    const { getByText } = render(<Home/>);

    expect(getByText('Hello World')).toBeTruthy();
})