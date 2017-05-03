$(document).ready(function(){
    $("#normal").keyup(function(){

        var words = $("#normal").val();

        // Always replace some words with pirate words
        words = words.replace(/ar/gi, "arrr");
        words = words.replace(/you/gi, "ye");
        words = words.replace(/your/gi, "yer");
        words = words.replace(/ for /g, " fer ");
        words = words.replace(/ to /gi, " ter ");
        words = words.replace(/ing/g, "in'");
        words = words.replace(/are/g, "be");
        words = words.replace(/ is /g, " be ");

        words = words.replace(/was/g, "be");
        words = words.replace(/the /g, "th'");
        words = words.replace(/hello/gi, "Ahoy");
        words = words.replace(/stop/gi, "avast");
        words = words.replace(/quickly/gi, "smartly");
        words = words.replace(/friend/gi, "matey");
        words = words.replace(/beer/gi, "grog");
        words = words.replace(/I'm/g, "I be");
        words = words.replace(/ yes /gi, " aye ");


        // More complicated regular expressions
        // match *-ed and replace it with be *ing
        words = words.replace(/^/, "Arr, me hearties. ");
        words = words.replace(/(\w+)!\s/g, "$1! Yo ho ho! ");
        words = words.replace(/(\w+)ev(\w+)\s/g, "$1e'$2 ");

        // The order matters here
        words = words.replace(/was\s(\w+)ed\s/g, 'be $1ing ');
        words = words.replace(/was/gi, "wer");


        $("#pirate").val(words);

    });
});