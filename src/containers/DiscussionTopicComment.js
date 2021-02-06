import React from 'react';

const DiscussionTopicComment = (props) => {
  return (
    <>
      <hr/>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="/userpic.jpeg" alt="User image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.author}</p>
              <p className="subtitle is-6">{props.date}</p>
            </div>
          </div>
          <div className="content">
            {props.text}
            {/*<br />*/}
            {/*<time dateTime="2016-1-1">{props.date}</time>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscussionTopicComment;