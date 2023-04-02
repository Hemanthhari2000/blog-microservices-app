import { useState } from "react";
import axios from "axios";

const PostCreate = () => {
	const [title, setTitle] = useState("");

	const handleOnSubmit = async (event) => {
		event.preventDefault();
		await axios.post("http://posts.com/posts/create", {
			title,
		});
		setTitle("");
	};

	return (
		<>
			<form onSubmit={handleOnSubmit}>
				<label style={{ paddingRight: "10px" }}>Title</label>
				<input value={title} onChange={(e) => setTitle(e.target.value)} />
			</form>
		</>
	);
};

export default PostCreate;
