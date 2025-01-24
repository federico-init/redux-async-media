import { GoTrashcan } from "react-icons/go";

import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

import { deleteUser } from "../store";
import { useThunk } from "../hooks/useThunk";

function UsersListItem({ user }) {
  const [doRemoveUser, isDeletingUser, error] = useThunk(deleteUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isDeletingUser} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;
