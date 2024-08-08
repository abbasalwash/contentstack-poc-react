import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import parse from 'html-react-parser';
import { BloglistProps } from "../typescript/blog";

function BlogList({ bloglist, category }: {bloglist: BloglistProps, category: string}) {
  let body = typeof bloglist.body === 'string' && bloglist.body.substr(0, 300);
  const stringLength = (body as string).lastIndexOf(' ');
  body = `${(body as string).substr(0, Math.min((body as string).length, stringLength))}...`;
  return (
    renderBody(body, bloglist, category)
  );
}

function renderBody(body: string, bloglist: BloglistProps, category: string) {
  if (category === bloglist.category || category === "") {
    return (
        <div className='blog-list'>
          {bloglist.featured_image && (
              <Link to={bloglist.url}>
                <img className='blog-list-img' src={bloglist.featured_image.url} alt='blog img'/>
              </Link>
          )}
          <div className='blog-content'>
            {bloglist.title && (
                <Link to={bloglist.url}>
                  <h3>{bloglist.title}</h3>
                </Link>
            )}
            <p>
              {moment(bloglist.date).format('ddd, MMM D YYYY')},{' '}
              <strong>{bloglist.author[0].title}</strong>
              <h3>{bloglist.category}</h3>
            </p>
            {parse(body)}
            {bloglist.url ? (
                <Link to={bloglist.url}>
                  <span>{'Read more -->'}</span>
                </Link>
            ) : (
                ''
            )}
          </div>
        </div>
    );
  }
  
  return <div />;
}

export default BlogList;
