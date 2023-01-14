import { Outlet, Link, Navigate } from "react-router-dom";
import { useAuth } from "../../../context";

export default function CommentsLayout() {
  const { user } = useAuth();
  if (user.role !== "USER") {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="ml-9">
          <p className="font-semibold text-2xl">Comment Dashboard</p>
        </div>
        <div className="mr-10 mb-1">
          <Link to="/user/comments/addcomment">
            <button className="p-2 border-2 bg-blue-600 text-white font-semibold rounded-lg border-blue-600">
              Add Comment
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
