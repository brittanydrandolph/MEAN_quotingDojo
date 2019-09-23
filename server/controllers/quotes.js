const mongoose = require('mongoose');
Quote = mongoose.model('Quote'); // requires this! Per quiz
const moment = require("moment");

module.exports ={

    index: function (req, res){
        res.render("index")
    },

    quotePage: function(req, res){
        Quote.find({}, function(err, quotes){
            if(err){
                console.log("Errors errors errors!");
            }
            else {
                res.render("quotes", {info: quotes, moment: moment});
            }
        }).sort({_id:-1});
    },

    addQuote: function(req, res){ 
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err){
        if(err){
            console.log("Something went wrong in app post quotes", err);
            for (var key in err.errors){
                req.flash("quoteform", err.errors[key].message);
            }
            res.redirect("/");
        }
        else{
            console.log("successfully added a quote");
            res.redirect("/quotes");
        }
    })
    }

}
