const path = require('path');
const fs = require("fs");
const directoryPath = path.join(__dirname, '../public/img/portfolio');
module.exports.getHomePage = (req,res)=>{
    res.render("index");
};

module.exports.postPortfolio = (req,res)=>{
    fs.readdir(directoryPath,function(err,files){
        if(err){
            res.send("err");
        }else{
            var listFilename = [];
            files.forEach(function (file) {
                listFilename.push(file);
            });
            res.send(listFilename);
        }
    });
}