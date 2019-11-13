const path = require('path');
const fs = require('fs');


exports.onPostBuild = function () {

    const functions = {
        getDateTimeFormat: function (date) {
            var hour = date.getHours();
            hour = (hour < 10 ? "0" : "") + hour;

            var min = date.getMinutes();
            min = (min < 10 ? "0" : "") + min;

            var sec = date.getSeconds();
            sec = (sec < 10 ? "0" : "") + sec;

            var year = date.getFullYear();

            var month = date.getMonth() + 1;
            month = (month < 10 ? "0" : "") + month;

            var day = date.getDate();
            day = (day < 10 ? "0" : "") + day;

            return year + "-" + month + "-" + day + "-" + hour + "" + min + "" + sec;
        }
    }

    const source = path.join(__dirname, 'dist', 'production-dist');
    if (fs.existsSync(source)) {
        try {
            var stats = fs.statSync(source);
            console.log('it exists');
        }
        catch (err) {
            console.log('it does not exist');
        }
        const newName = "production-dist-" + functions.getDateTimeFormat(stats.ctime);
        const dest = path.join(__dirname, 'dist', newName);
        fs.renameSync(source, dest);
    }

    const dev_distFolder = path.join(__dirname, 'dev-dist');
    fs.renameSync(path.join(__dirname, 'public'), dev_distFolder);

    const distFolder = path.join(__dirname, 'dist');
    if (!fs.existsSync(distFolder)) {
        fs.mkdirSync(distFolder);
    }
    
    fs.renameSync(dev_distFolder, path.join(__dirname, 'dist', 'new-dist'));
    // rename latest build to production-dist"
    const sourceLatest = path.join(__dirname, 'dist', 'new-dist');
    const destLatest = path.join(__dirname, 'dist', 'production-dist');
    fs.renameSync(sourceLatest, destLatest);


};



