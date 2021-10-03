export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
			number: string;
			name: string;
		};
    city: string;
    state: string;
    postcode: string;
  };
  email: string;
  dob: {
    date: string;
  };
  phone: string;
  cell: string;
  login: {
    uuid: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export type UserList = User[];

export interface UserListState {
  users: UserList;
}
