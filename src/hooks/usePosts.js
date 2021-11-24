import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedAllPost = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedAllPost;
};

export const usePosts = (posts, sort, query) => {
  const sortedAllPost = useSortedPosts(posts, sort);
  const sortedAndSearchPost = useMemo(() => {
    return sortedAllPost.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
  }, [query, sortedAllPost]);

  return sortedAndSearchPost;
};
