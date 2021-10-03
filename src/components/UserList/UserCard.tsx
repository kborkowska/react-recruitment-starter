import { FC, useState } from "react";
import {
  Avatar,
  Collapse,
  ListItemAvatar,
  ListItemText,
  List,
} from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import { User } from "./types";
import { capitalize } from "../../utils/helpers";

export const UserCard: FC<{ user: User; showTitle: boolean }> = ({
  user,
  showTitle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const title = showTitle ? user.name.title : "";
  const userName = capitalize(
    `${title} ${user.name.first} ${user.name.last}`.trim().replace(/ {2}/g, " ")
  );

  return (
    <>
      <ListItemButton onClick={() => setIsOpen(!isOpen)}>
        <ListItemAvatar>
          <Avatar src={user.picture.thumbnail} alt={`${userName}.jpg`} />
        </ListItemAvatar>
        <ListItemText primary={userName} secondary={capitalize(user.location.city)} />
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemText
            secondary={`Address: ${user.location.street.name} ${user.location.street.number}`}
          />
          <ListItemText secondary={`Email: ${user.email}`} />
          <ListItemText secondary={`Phone: ${user.phone || user.cell}`} />
          <ListItemText
            secondary={`Date of birth: ${new Date(
              user.dob.date
            ).toLocaleDateString()}`}
          />
        </List>
      </Collapse>
    </>
  );
};
