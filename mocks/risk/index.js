const riskListFixture = require("./risk_list.json");


module.exports = (app, api_version) => {
    app.get(`/${api_version}/risk/list/`, (req, res) => {
        setTimeout(() => {
            res.json(riskListFixture);
            // res.send(403, {});
            // res.send(500);
        }, 500);
    });
};