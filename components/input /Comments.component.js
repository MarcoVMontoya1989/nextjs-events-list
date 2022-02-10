import {useEffect, useState} from 'react';
import CommentListComponent from "./CommentList.component";
import NewCommentComponent from "./NewComment.component";
import styles from '../../styles/Base.module.scss';

function Comments(props) {
  const { eventId } = props;
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (showComments) {
      fetch('api/comments/' + eventId, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => setComments(data.comments))
    }

  }, [showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewCommentComponent onAddComment={addCommentHandler} />}
      {showComments && <CommentListComponent commentsList={comments}/>}
    </section>
  );
}

export default Comments;