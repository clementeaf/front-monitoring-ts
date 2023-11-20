import { format } from "date-fns";
import { parseDate } from "../utils";

jest.mock("date-fns", () => ({
  format: jest.fn()
}));

describe("parseDate", () => {
  it("should call date-fns format function with the correct arguments", () => {
    const date = "2023-11-20T12:00:00";
    parseDate(date);

    expect(format).toHaveBeenCalledWith(date, "dd/MM/yyyy");
  });

  it("should return the formatted date", () => {
    const date = "2023-11-20T12:00:00";
    const formattedDate = "20/11/2023";

    (format as jest.Mock).mockReturnValueOnce(formattedDate);

    const result = parseDate(date);

    expect(result).toEqual(formattedDate);
  });
});
