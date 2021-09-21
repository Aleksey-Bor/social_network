import React from "react";
import { reduxForm, Field } from "redux-form";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  /* required,*/ maxLengthCreator,
  minLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo((props) => {
  let postsElements = [...props.postsData]
    .reverse()
    .map((el) => (
      <Post message={el.message} likesCount={el.likesCount} id={el.id} />
    ));

  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={style.postsBlock}>
      <h3 className={style.myPostsHeader}>My posts</h3>
      <AddNewPostFormRedux onSubmit={addNewPost} />
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
});

let maxLengthCreator10 = maxLengthCreator(200);
let minLengthCreator2 = minLengthCreator(2);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={style.postsTextarea}
          component={Textarea}
          name="newPostText"
          placeholder="Enter your post"
          validate={[/* required,*/ maxLengthCreator10, minLengthCreator2]}
        />
      </div>
      <div>
        <button className={style.postButton}>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({
  form: "profileAddNewPostForm",
})(AddNewPostForm);

export default MyPosts;
