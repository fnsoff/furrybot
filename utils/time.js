module.exports = {
    date() {
        var str = "";
        var d = new Date();
        if (d.getDate() < 10) str += "0";
        str += d.getDate() + "/";
        if (d.getMonth() + 1 < 10) str += "0";
        str += d.getMonth() + 1 + "/";
        str += d.getFullYear();
        return str;
    },

    time() {
        var str = "";
        var d = new Date();
        if (d.getHours() < 10) str += "0";
        str += d.getHours() + ":";
        if (d.getMinutes() < 10) str += "0";
        str += d.getMinutes() + ":";
        if (d.getSeconds() < 10) str += "0";
        str += d.getSeconds();
        return str;
    }
};