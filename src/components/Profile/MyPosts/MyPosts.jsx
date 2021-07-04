import React from "react";
import { reduxForm, Field } from "redux-form";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} id={el.id} />
  ));

  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={addNewPost} />
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newPostText"
          placeholder="Enter your post"
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({
  form: "profileAddNewPostForm",
})(AddNewPostForm);

export default MyPosts;
