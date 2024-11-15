let data = {
	username: "jpamental", // No leading @ here
	homeLabel: "rwt.io",
	homeUrl: "https://rwt.io/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;