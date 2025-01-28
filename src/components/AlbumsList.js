import { useFetchAlbumsQuery, useCreateAlbumMutation } from "../store";

import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  const [createAlbum, results] = useCreateAlbumMutation();

  const handleCreateAlbum = () => {
    createAlbum(user);
  };

  let content;

  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;

      return (
        <ExpandablePanel key={album.id} header={header}>
          List of photos
        </ExpandablePanel>
      );
    });
  }

  return (
    <>
      <div className="pb-2">Albums by {user.name}</div>
      <Button onClick={handleCreateAlbum}>+ Add Album</Button>
      <div>{content}</div>
    </>
  );
}

export default AlbumsList;
