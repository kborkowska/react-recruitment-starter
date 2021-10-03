import { FC } from "react";
import { List } from "@material-ui/core";
import { User } from "./types";
import { UserCard } from "./UserCard";
import { useQuery } from "react-query";

export const UserCardList: FC<{
  pageNumber: number;
  rowsPerPage: number;
  seed: string;
}> = ({ pageNumber, rowsPerPage, seed }) => {
  const { error, data } = useQuery(
    `random-user_${pageNumber}_${rowsPerPage}_${seed}`,
    () =>
      fetch(
        `https://randomuser.me/api/?page=${
          pageNumber + 1
        }&results=${rowsPerPage}&seed=${seed}&noinfo`
      ).then((res) => res.json())
  );

  const getUserId = (user: User) => user.login.uuid;

  return error ? (
    <>{error}</>
  ) : (
    <List>
      {data?.results?.map((user: User) => (
        <UserCard
					showTitle={false}
          user={user}
          key={getUserId(user)}
        />
      ))}
    </List>
  );
};
