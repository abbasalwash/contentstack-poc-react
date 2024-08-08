import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArchiveRelative from "../components/archive-relative";
import RenderComponents from "../components/render-components";
import BlogList from "../components/blog-list";
import { getBlogListRes, getPageRes } from "../helper";
import Skeleton from "react-loading-skeleton";
import { Prop, Entry, ArchiveBlogList, BlogData } from "../typescript/pages";
import { useLivePreviewCtx } from "../context/live-preview-context-provider";
export default function Blog({ entry }: Prop) {
  const history = useNavigate();
  const [getEntry, setEntry] = useState({} as Entry);
  const [getList, setList] = useState({
    archive: {} as ArchiveBlogList,
    list: [],
  });
  const [error, setError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const lpTs = useLivePreviewCtx();

  async function fetchData() {
    try {
      const blog = await getPageRes("/blog");
      const result = await getBlogListRes();
      (!blog || !result) && setError(true);

      const archive = [] as any;
      const blogLists = [] as any;

      result.forEach((blogs: BlogData) => {
        if (blogs.is_archived) {
          archive.push(blogs);
        } else {
          blogLists.push(blogs);
        }
      });

      setEntry(blog);
      setList({ archive: archive, list: blogLists });
      entry({ page: blog, blogPost: result });
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }

  useEffect(() => {
    fetchData();
    error && history("/404");
  }, [error, lpTs]);

  return (
    <>
      {Object.keys(getEntry).length ? (
        <RenderComponents
          pageComponents={getEntry.page_components}
          blogsPage
          contentTypeUid='page'
          entryUid={getEntry.uid}
          locale={getEntry.locale}
        />
      ) : (
        <Skeleton height={400} />
      )}
      <div className='blog-container'>
        <div>
          <label htmlFor="blog-select">Choose a blog:</label>
          <select
              name="blogs"
              id="blog-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">--Please choose an option--</option>
            <option value="category a">category a</option>
            <option value="category b">category b</option>
            <option value="category c">category c</option>
          </select>
        </div>
        <div className='blog-column-left'>
          {Object.keys(getList.list).length ? (
              getList.list.map((bloglist, index) => (                  
                  <BlogList bloglist={bloglist} key={index} category={selectedCategory}/>
              ))
          ) : (
              <Skeleton height={400} width={400} count={3}/>
          )}
        </div>
        <div className='blog-column-right'>
          {Object.keys(getEntry).length &&
          getEntry.page_components[1].widget ? (
              <h2 {...(getEntry?.page_components[1].widget.$?.title_h2 as {})}>
                {getEntry?.page_components[1].widget.title_h2}
              </h2>
          ) : (
              <h2>
                <Skeleton/>
              </h2>
          )}
          {Object.keys(getList.archive).length ? (
              <ArchiveRelative blogs={getList.archive}/>
          ) : (
              <Skeleton height={600} width={300}/>
          )}
        </div>
      </div>
    </>
  );
}
