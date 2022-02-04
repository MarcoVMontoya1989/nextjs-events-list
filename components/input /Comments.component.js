import { useState } from 'react';
import CommentListComponent from "./CommentList.component";
import NewCommentComponent from "./NewComment.component";
import styles from '../../styles/Base.module.scss';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // send data to API
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewCommentComponent onAddComment={addCommentHandler} />}
      {showComments && <CommentListComponent />}
    </section>
  );
}

export default Comments;