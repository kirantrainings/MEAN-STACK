exports.sendResponse = function (req, res) {
    // res.send("Hello Birlasoft");
    res.render('index', {
        title: 'NodeJs Training'
    });
};

exports.sendUserDetails = function (req, res) {
    res.send("I got the user details");
};
