import React, { useState } from 'react';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

const Comment = ({ author, date, comment, likes = 0 }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCounter, setLikesCounter] = useState(likes);

  const likeClickHandler = () => {
    setIsLiked(!isLiked);
    setLikesCounter(isLiked ? likesCounter - 1 : likesCounter + 1);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="/userpic.jpeg" alt="Image" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{author}</strong> <small>{date.toLocaleDateString()}</small>
              <br />
              {parse(comment)}
            </p>
          </div>
          <nav className="level">
            <div className="level-left" />
            <div className="level-right">
              <a className="level-item" aria-label="reply">
                <span className="icon is-small">
                  <FontAwesomeIcon
                    className="aria-hidden"
                    onClick={likeClickHandler}
                    icon={isLiked ? fasHeart : farHeart}
                  />
                </span>
                <span>&nbsp;{likesCounter}</span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
};

export default Comment;
