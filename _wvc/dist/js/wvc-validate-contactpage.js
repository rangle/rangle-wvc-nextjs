$(document).ready(function () {
    function hasCreditCardInfo($comment) {
        var creditcard_format_reg = /(?:\d[ -]*?){13,16}/g;
        var extracted = creditcard_format_reg.exec($comment.replace(/\s/g, ""));

        var cc_regexes = [
            /^4[0-9]{12}(?:[0-9]{3})?$/g, //  VISA
            /^5[1-5][0-9]{14}$/g,          // Master Card
            /^3[47][0-9]{13}$/g,           // Amex
            /^(62[0-9]{14,17})$/g          // Union Pay
        ];

        for (var i = 0; i < extracted.length; i++)
        {
            var ext = extracted[i].replace(/[- ]/g, "");
            for (var j = 0; j < cc_regexes.length; j++) 
            {
                if (cc_regexes[j].test(ext) == true) 
                {
                    return true;
                }
            }
        }

        return false;
    }
 
    var ctrl_comment = $('.form-comment');
    var ctrl_submit = $('.form-row_submit input[type="submit"]');

    ctrl_submit.click(function(e) {
        var comment = ctrl_comment.value == undefined ? ctrl_comment[0].value : ctrl_comment.value;
        if (hasCreditCardInfo(comment) == true)
        {
            if ($('body').hasClass('ENCA')){
                alert("It appears you have entered a credit card number in the comments section, however we cannot accept it for your safety and security.  Please call our customer service team with any credit card requests or inquiries and they would be glad to help.");
                e.preventDefault();
            }
            else{
                if ($('body').hasClass('FRCA')){
                    alert("Il semble que vous ayez entr\xE9 un num\xE9ro de carte de cr\xE9dit dans la section commentaires, mais nous ne pouvons l’accepter, pour votre s\xE9curit\xE9. Veuillez appeler notre Service aux donateurs et un de nos agents se fera un plaisir de vous aider avec vos demandes ou questions relatives à votre carte de cr\xE9dit."); 
                    e.preventDefault();
                }
            }

        }
    });    
});