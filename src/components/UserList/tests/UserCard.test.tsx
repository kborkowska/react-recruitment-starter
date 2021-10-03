import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserCard } from "../UserCard";

jest.mock("@material-ui/core", () => ({
  ...jest.requireActual("@material-ui/core"),
  Avatar: ({ src, alt }: { src: string; alt: string }) => <p>{src}</p>,
}));

const mockUser = {
  name: {
    title: "mr",
    first: "brad",
    last: "gibson",
  },
  location: {
    street: {
      name: "new road",
      number: "9278 ",
    },
    city: "kilcoole",
    state: "waterford",
    postcode: "93027",
  },
  email: "brad.gibson@example.com",
  login: {
    uuid: "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
  },
  dob: {
    date: "1993-07-20T09:44:18.674Z",
    age: 26,
  },
  phone: "011-962-7516",
  cell: "081-454-0666",
  picture: {
    large: "https://randomuser.me/api/portraits/men/75.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
  },
};

describe("UserCard", () => {
  it("should render user name, thumbnail and city", () => {
    render(<UserCard showTitle={false} user={mockUser} />);

    expect(screen.getByText("Brad Gibson")).toBeInTheDocument();
    expect(screen.getByText("Kilcoole")).toBeInTheDocument();
    expect(
      screen.getByText("https://randomuser.me/api/portraits/thumb/men/75.jpg")
    ).toBeInTheDocument();
  });

  it("should render user title if showTitle is set to true", () => {
    render(<UserCard showTitle user={mockUser} />);

    expect(screen.getByText("Mr Brad Gibson")).toBeInTheDocument();
  });

  it("should render user phone number, address, date of birth and email when card is clicked on", () => {
    render(<UserCard showTitle user={mockUser} />);

    userEvent.click(screen.getByText("Mr Brad Gibson"));
    expect(screen.getByText("Email: brad.gibson@example.com")).toBeInTheDocument();
    expect(screen.getByText("Date of birth: 20.07.1993")).toBeInTheDocument();
    expect(screen.getByText("Phone: 011-962-7516")).toBeInTheDocument();
    expect(screen.getByText("Address: new road 9278")).toBeInTheDocument();
  });
});
