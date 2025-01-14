"use client";

import React from "react";
import { Trash2 } from "lucide-react";
import { usePost } from "../../hooks/usePost";

const ViewPostsTable = () => {
  const {
    posts,
    selectedPostId,
    getAllPostsState,
    deletePostState,
    handleDelete,
  } = usePost();
  console.log("🚀 ~ ViewPostsTable");
  // RENDERS
  return (
    <table>
      <caption>Showing {posts.length} total records</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Author</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {getAllPostsState.loading ? (
          <tr>
            <td colSpan={4} className="text-sm text-center">
              Loading posts...
            </td>
          </tr>
        ) : getAllPostsState.error ? (
          <tr>
            <td colSpan={4} className="text-sm text-center error">
              Error: {getAllPostsState.error?.message}
            </td>
          </tr>
        ) : (
          posts.map((post, i) => (
            <tr
              key={post.id}
              style={{
                color:
                  deletePostState.loading && selectedPostId == post.id
                    ? "red"
                    : "inherit",
              }}
            >
              <td>{i + 1}</td>
              <td>{post?.user?.name}</td>
              <td>{post.title}</td>
              <td>
                <Trash2
                  color="red"
                  size={16}
                  onClick={() => handleDelete(post.id)}
                  style={{ cursor: "pointer" }}
                />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default React.memo(ViewPostsTable);
