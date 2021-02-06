import React from 'react'
import parse from 'html-react-parser';
import DiscussionTopicComment from "../containers/DiscussionTopicComment";

class DiscussionTopic extends React.Component {
  state = {
    expanded: false,
    commentsShowed: false
  }

  onReadMoreClickHandler = () => {
    this.setState({expanded: true})
  };

  onCommentsClickHandler = () => {
    this.setState({commentsShowed: !this.state.commentsShowed})
  };

  render() {
    return (
      <>
        <div className={"modal " + (this.state.commentsShowed ? "is-active" : "")}>
          <div className="modal-background" onClick={this.onCommentsClickHandler}/>
          <div className="modal-content">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">{this.props.header}</p>
                <button className="delete" aria-label="close" onClick={this.onCommentsClickHandler} />
              </div>
              <div className="card-content">
                <div className="content">
                  {this.props.comments.map(x => <DiscussionTopicComment key={x.id} author={x.author} date={x.date} text={x.text}/>)}
                </div>
              </div>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" />
        </div>

        <div className="card">
          <div className="card-header">
            <p className="card-header-title">{this.props.header}</p>
          </div>
          <div className="card-content">
            <div className="content">
              {this.state.expanded ? parse(this.props.text) : parse(this.props.text.substr(0, 280))}
              {this.state.expanded ? <></> : <a href="#" onClick={this.onReadMoreClickHandler}>Read more</a>}
            </div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item" onClick={this.onCommentsClickHandler}>Комментарии
              ({this.props.comments.length})</a>
          </footer>
        </div>
        <br/>
      </>
    );
  }
}

export default DiscussionTopic