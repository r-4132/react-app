import React, { useReducer, useEffect } from "react";
// this is acutally the hardest one for me to understand.

const initialState = {
  comments: [], //empty array that will later hold an array of comments
  commentInput: "", //empty string that will later hold the current value of the comment input field in the UI.
};
function reducer(state, action) 
{
  switch (action.type) 
  {
    case "ADD_COMMENT":
      const newComments = [...state.comments, action.payload]; //creates new array, spread the ...state.comments. Add the new comment which is passed in the action.payload. 
      localStorage.setItem("comments", JSON.stringify(newComments)); //localStorage.setItem(key, value is JSON(string is needed bc localStorage can only store strings) )
      return {
        ...state, // new state
        comments: newComments, // setting comments  to a new state w/c is NewComments
        commentInput: "", // updated comments list, and clears the commentInput field by setting it to an empty string.
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
    const commentsFromStorage = JSON.parse(localStorage.getItem("comments")); // get data from local storage using JSON.parse
    if (commentsFromStorage) 
    {
      dispatch({
        type: "INITIALIZE_COMMENTS", 
        // initialize the comments state with the data retrieved from the local storage
        payload: commentsFromStorage,
      });
    }
  }, []);

  const handleCommentInput = (e) => // this is how the comment is being updated whenever the use types 
  {
    dispatch({
      type: "UPDATE_COMMENT_INPUT", 
      payload: e.target.value,
    });
  };

  const handleCommentSubmit = (event) =>  // updates the state by adding the new comment to the list of comments and also clears the comment input field by setting its value to an empty string.
  {
    event.preventDefault();
    dispatch({
      type: "ADD_COMMENT",
      payload: state.commentInput, //reducer function takes this payload and adds it to the comments array 
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

      {state.comments.map((comment, index) =>  // this is basically how the comment is being printed out
      (
        <div key={index}>{comment}</div>
      ))}
    </div>
  );
}

export default Comment;
