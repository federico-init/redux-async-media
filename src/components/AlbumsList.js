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
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums by {user.name}</h3>
        <Button onClick={handleCreateAlbum} loading={results.isLoading}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </>
  );
}

export default AlbumsList;
