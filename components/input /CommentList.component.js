import styles from '../../styles/Base.module.scss';

function CommentListComponent({commentsList}) {

  console.log(commentsList);

  return (
    <ul className={styles.comments_list}>
      {
        commentsList.map(comment => (
            <li key={comment.id}>
              <p>{comment.text}</p>
              <div>
                By <address>{comment.name}</address>
              </div>
            </li>
          )
        )
      }
    </ul>
  );
}

export default CommentListComponent;