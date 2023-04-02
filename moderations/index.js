const express = require("express");
const axios = require("axios");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/event", async (req, res) => {
	const { type, data } = req.body;

	console.log("RECEIVED", type);

	if (type === "COMMENT_CREATED") {
		const status = data.content.includes("orange") ? "rejected" : "approved";

		await axios.post("http://event-bus-srv:4005/event", {
			type: "COMMENT_MODERATED",
			data: {
				id: data.id,
				postId: data.postId,
				status,
				content: data.content,
			},
		});
	}
	res.send({});
});

app.listen(4003, () => {
	console.log("[LISTENING] on port 4003");
});
