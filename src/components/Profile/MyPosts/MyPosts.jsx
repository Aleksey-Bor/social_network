import React from "react";
import { reduxForm, Field } from "redux-form";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { /* required,*/ maxLengthCreator, minLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

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

let maxLengthCreator10 = maxLengthCreator(10);
let minLengthCreator2 = minLengthCreator(2);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder="Enter your post"
          validate={[/* required,*/ maxLengthCreator10, minLengthCreator2]}
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
