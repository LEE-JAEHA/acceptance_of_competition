exports.navigationName = (name) => {
    return (req, res, next) => {
        res.locals.sidebarName = name;
        next();
    };
};