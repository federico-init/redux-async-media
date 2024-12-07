import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";

import Skeleton from "./Skeleton";

function UsersList() {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <Skeleton times={3} className="h-20 w-100" />;
  }

  if (error) {
    return <div>Error fetching data!</div>;
  }

  return <div>Number of users: {data.length}</div>;
}

export default UsersList;
