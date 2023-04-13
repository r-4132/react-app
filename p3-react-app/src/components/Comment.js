import React, { useReducer, useEffect } from "react";

const initialState = {
  comments: [],
  commentInput: "",
};

function reducer(state, action) 
{
  switch (action.type) 
  {
    case "ADD_COMMENT":
      const newComments = [...state.comments, action.payload];
      localStorage.setItem("comments", JSON.stringify(newComments));
      return {
        ...state,
        comments: newComments,
        commentInput: "",
      };
    case "UPDATE_COMMENT_INPUT":
      return {
        ...state,
        commentInput: action.payload,
      };
    case "INITIALIZE_COMMENTS":
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
}

function Comment() 
{
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const commentsFromStorage = JSON.parse(localStorage.getItem("comments"));
    if (commentsFromStorage) 
    {
      dispatch({
        type: "INITIALIZE_COMMENTS",
        payload: commentsFromStorage,
      });
    }
  }, []);

  const handleCommentInput = (e) => 
  {
    dispatch({
      type: "UPDATE_COMMENT_INPUT",
      payload: e.target.value,
    });
  };

  const handleCommentSubmit = (e) => 
  {
    e.preventDefault();
    dispatch({
      type: "ADD_COMMENT",
      payload: state.commentInput,
    });
  };

  return (
    <div>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={state.commentInput}
          onChange={handleCommentInput}
          placeholder="Add a comment..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      {state.comments.map((comment, index) => 
      (
        <div key={index}>{comment}</div>
      ))}
    </div>
  );
}

export default Comment;
