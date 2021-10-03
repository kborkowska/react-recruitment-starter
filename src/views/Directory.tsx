import { Box } from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import AppButton from "../components/AppButton";

import { AppCard } from "../components/AppCard";
import { Page } from "../components/Page";
import { UserCardList } from "../components/UserList/UserCardLists";
import { Pagination } from "../components/UserList/UserListPagination";
import { spacing } from "../theme";
import { UserApiSettings } from "../utils/consts";

export const Directory = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(
    UserApiSettings.noOfPageEntries
  );

  return (
    <Page title={"User directory"}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <AppCard style={{ maxWidth: 800, marginTop: 3 * spacing }}>
          <Pagination
            pageNumber={pageNumber}
            count={UserApiSettings.maxUsers}
            rowsPerPage={rowsPerPage}
            onPageChange={(_e: any, newPage: number) => setPageNumber(newPage)}
            onRowsPerPageChange={(e) =>
              setRowsPerPage(
                parseInt((e as ChangeEvent<HTMLInputElement>).target.value, 10)
              )
            }
          />
          <UserCardList
            pageNumber={pageNumber}
            rowsPerPage={rowsPerPage}
            seed={UserApiSettings.seed}
          />
          <Box display="flex" flexDirection="column">
            <AppButton href="/home">Home</AppButton>
          </Box>
        </AppCard>
      </Box>
    </Page>
  );
};
