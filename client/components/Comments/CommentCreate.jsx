import { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
	const [comment, setComment] = useState("");

	const handleOnSubmit = async (event) => {
		event.preventDefault();
		await axios.post(`http://posts.com/posts/${postId}/comments`, {
			content: comment,
		});
		setComment("");
	};

	return (
		<>
			<div style={{ paddingTop: "20px" }}>
				<form onSubmit={handleOnSubmit}>
					<label style={{ fontWeight: "bold" }}>Comments</label>
					<br />
					<input
						style={{ margin: "10px 0" }}
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<br />
					<button>Comment</button>
				</form>
			</div>
		</>
	);
};

export default CommentCreate;
