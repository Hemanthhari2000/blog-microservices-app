import { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "../Comments/CommentCreate";
import CommentList from "../Comments/CommentList";

const PostList = () => {
	const [posts, setPosts] = useState({});

	const fetchPosts = async () => {
		const res = await axios.get("http://posts.com/posts");
		setPosts(res.data);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	const renderablePosts = Object.values(posts).map((post) => (
		<Card key={post.id} data={post} />
	));
	return (
		<>
			<h1>Posts</h1>
			<div
				style={{
					padding: "20px",
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
				}}
			>
				{renderablePosts}
			</div>
		</>
	);
};

const Card = ({ data }) => {
	// console.log("data", data);
	return (
		<div
			style={{
				border: "2px solid black",
				padding: "20px",
				borderRadius: "5px",
			}}
		>
			<h2>{data.title}</h2>
			<hr />
			<CommentList comments={data.comments} />
			<CommentCreate postId={data.id} />
		</div>
	);
};

export default PostList;
