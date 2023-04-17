const getUsers = require("../src/async");
const axios = require("axios");

jest.mock("axios");

const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      city: "Anytown",
      zipcode: "12345",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    address: {
      street: "456 Elm St",
      city: "Otherville",
      zipcode: "67890",
    },
  },
];

describe("getUsers", () => {
  it("fetches and transforms user data correctly", async () => {
    axios.get.mockResolvedValue({ data: mockUsers });
    const expectedUsers = [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        address: "123 Main St, Anytown, 12345",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        address: "456 Elm St, Otherville, 67890",
      },
    ];
    const users = await getUsers();
    expect(users).toEqual(expectedUsers);
  });
  it("logs an error when the API request fails", async () => {
    const errorMessage = "API request failed";
    const consoleError = console.error;
    console.error = jest.fn();
    axios.get.mockRejectedValue(new Error(errorMessage));
    const users = await getUsers();
    expect(console.error).toHaveBeenCalledWith(new Error(errorMessage));
    console.error = consoleError;
    expect(users).toBeUndefined();
  });
});
