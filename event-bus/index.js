const express = require("express");
const axios = require("axios");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const events = [];

app.get("/events", (req, res) => {
	res.send(events);
});

app.post("/event", (req, res) => {
	const event = req.body;
	console.log(event);

	events.push(event);

	axios.post("http://posts-clusterip-srv:4000/event", event).catch((err) => {
		console.log(err.message);
	});
	axios.post("http://comments-srv:4001/event", event).catch((err) => {
		console.log(err.message);
	});
	axios.post("http://query-srv:4002/event", event).catch((err) => {
		console.log(err.message);
	});

	axios.post("http://moderations-srv:4003/event", event).catch((err) => {
		console.log(err.message);
	});

	res.send({ status: "OK" });
});

app.listen(4005, () => {
	console.log("[LISTENING] on port 4005");
});
