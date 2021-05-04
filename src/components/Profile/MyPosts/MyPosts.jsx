import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.postsData.map(el => <Post message={el.message} likesCount={el.likesCount} id={el.id}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    };

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
