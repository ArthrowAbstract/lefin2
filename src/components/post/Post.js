import Link from "next/link";
import React from "react";
import classNames from "classnames";
import { Button, Image } from "antd";

import { formatDate, removeDash } from "../../common/utils";

function Post({ type, className, style, data }) {
  switch (type) {
    case "inline":
      return (
        <div className={`post-inline ${classNames(className)}`}>
          <div className="post-inline-image">
            <img
              title={data.title}
              src={data.coverImage}
              alt="Post image"
            />
          </div>
          <div className="post-inline-content">
            <div className="post-inline-content__meta">
              <p>
                <i className="fal fa-calendar" />
                {formatDate(data.publicDate)}
              </p>
              <p>
                <i className="fal fa-comments" />
                {data.comments.length}
              </p>
            </div>
            <Link
              href={`/blog/post/[slug]`}
              as={`/blog/post/${data.slug}`}
              className="post-title"
            >
              {data.title}
            </Link>
          </div>
        </div>
      );
    case "row":
      return (
        <div className={`post -style-one ${classNames(className)}`}>
          <div className="post-image">
            <Link
              href={ `/blog/post/[slug]`}
              as={ `/blog/post/${data.slug}`}
            >
              <Image
                title={data.title}
                src={data.coverImage}
                alt="Post image"
                placeholder
              />
            </Link>
          </div>
          <div className="post-content">
            <Button type="primary" className="post-category">
              {removeDash(data.category)}
            </Button>
            <Link
              href={ `/blog/post/[slug]`}
              as={`/blog/post/${data.slug}`}
              className="post-title"
            >
              {data.title}
            </Link>
            <div className="post-info">
              <p className="credit date">{formatDate(data.publicDate)}</p>
              <p className="credit comment">{data.comments.length} Comment</p>
            </div>
            <p className="post-description">{data.shortDescription}</p>
            <Link
              href={ `/blog/post/[slug]`}
              as={`/blog/post/${data.slug}`}
              className="post-readmore"
            >
              Read More
              <span>
                <i className="arrow_carrot-2right" />
              </span>
            </Link>
          </div>
        </div>
      );
    case "column-full":
      return (
        <div className={`post -style-three ${classNames(className)}`}>
          <div className="post-image">
            <Link
              href={ `/blog/post/[slug]`}
              as={`/blog/post/${data.slug}`}
            >
              <Image
                width="100%"
                title={data.title}
                src={data.coverImage}
                alt="Post image"
                placeholder
              />
            </Link>
          </div>
          <div className="post-content">
            <div className="post-info">
              <p className="credit date">{formatDate(data.publicDate)}</p>
              <p className="credit comment">{data.comments.length} Comment</p>
            </div>
            <p className="post-description">{data.shortDescription}</p>
            <a className="post-readmore" href="#">
              Read More
              <span>
                <i className="arrow_carrot-2right" />
              </span>
            </a>
          </div>
        </div>
      );
    case "tiny":
      return (
        <div className={`post-tiny ${classNames(className)}`}>
          <div className="post-tiny-image">
            <Link
              href={`/blog/post/[slug]`}
              as={`/blog/post/${data.slug}`}
            >
              <Image
                width="100%"
                title={data.title}
                src={data.coverImage}
                alt="Post image"
                placeholder
              />
            </Link>
          </div>
          <div className="post-tiny-content">
            <Link
              href={`/blog/post/[slug]`}
              as={`/blog/post/${data.slug}`}
              className="post-tiny-title"
            >
              {data.title}
            </Link>
            <p className="post-tiny-date">{formatDate(data.publicDate)}</p>
          </div>
        </div>
      );
    default:
      return (
        <div className={`post -style-two ${classNames(className)}`}>
          <div className="post-image">
            <Link
              href={  `/blog/post/[slug]`}
              as={  `/blog/post/${data.slug}`}
            >
              <Image
                title={data.title}
                src={  data.coverImage}
                alt="Post image"
                placeholder
              />
            </Link>
          </div>
          <div className="post-content">
            <Button type="primary" className="post-category">
              {removeDash(data.category)}
            </Button>
            <Link
              href={  `/blog/post/[slug]`}
              as={  `/blog/post/${data.slug}`}
              className="post-title"
            >
              {data.title}
            </Link>
            <div className="post-info">
              <p className="credit date">{formatDate(data.publicDate)}</p>
              <p className="credit comment">{data.comments.length} Comment</p>
            </div>
          </div>
        </div>
      );
  }
}

export default React.memo(Post);
