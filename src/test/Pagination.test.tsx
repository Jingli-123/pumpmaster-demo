import Pagination from "../components/ui/Pagination";
import { render } from "@testing-library/react";

describe(Pagination, () => {
    it("Pagination display correct page numbers", () => {
        const {getByTestId} = render(<Pagination totalItems={100} itemsPerPage={10} onPageChange={() => {}} />);
        const page1 = getByTestId("page-1").textContent;
        expect(page1).toBe("1");
    });
    it("Pagination display correct page numbers", () => {
        const {getByTestId} = render(<Pagination totalItems={99} itemsPerPage={10} onPageChange={() => {}} />);
         const page10 = getByTestId("page-10").textContent;
        expect(page10).toBe("10");
    });
});