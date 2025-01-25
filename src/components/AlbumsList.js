import { useFetchAlbumsQuery } from "../store";

function AlbumsList({ user }) {
  const res = useFetchAlbumsQuery(user);

  // console.log(data, error, isLoading);
  console.log(res);

  return <div>Albums by {user.name}</div>;
}

export default AlbumsList;
