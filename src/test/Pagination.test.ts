import Pagination from "../components/ui/Pagination";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Pagination", () => {
    it("should render pagination component", () => {
        const { getByText } = render(<Pagination />);
        expect(getByText("1")).toBeInTheDocument();
    });
});