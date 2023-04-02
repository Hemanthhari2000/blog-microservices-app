const CommentList = ({ comments }) => {
	console.log(comments);
	const renderableComments = Object.values(comments).map((comment) => {
		return comment.status === "approved" ? (
			<li key={comment.id}>{comment.content}</li>
		) : comment.status === "rejected" ? (
			<li>
				<i style={{ color: "red" }}>Toxic comment</i>
			</li>
		) : (
			<li>
				<i style={{ color: "orange" }}>This comment is being processed</i>
			</li>
		);
	});
	return <>{renderableComments}</>;
};

export default CommentList;
