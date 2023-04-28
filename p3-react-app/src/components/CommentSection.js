import { useState, useEffect } from 'react';

function CommentSection({ recipeId }) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await fetch(`https://api.example.com/comments/${recipeId}`);
    const data = await response.json();
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, [recipeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    await fetch(`https://api.example.com/comments/${recipeId}`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    fetchComments();
  };

  return (
    <div>
      <h2>Comments:</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Comment:
          <input type="text" name="comment" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentSection;