import PostCreate from "../components/Posts/PostCreate";
import PostList from "../components/Posts/PostList";

const App = () => {
	return (
		<>
			<h1>Create Post</h1>
			<PostCreate />
			<hr />
			<PostList />
		</>
	);
};

export default App;
