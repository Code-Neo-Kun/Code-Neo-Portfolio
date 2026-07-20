
jQuery(function ($) {



    var msg1 = "Wilt u alleen bestaande nummers behouden? Kies dan eerst 'Ja' bij vraag 2.";
    var msg2 = "Wilt u alleen nieuwe nummers bestellen? Kies dan eerst 'Ja' bij vraag 1.";

    function showToast(message) {
        $('#nummers-toast').remove();
        var toast = $('<div id="nummers-toast">' + message + '</div>').css({
            position: 'fixed',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#c0392b',
            color: '#fff',
            padding: '14px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            zIndex: 99999,
            maxWidth: '90%',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        });
        $('body').append(toast);
        setTimeout(function () { toast.remove(); }, 4000);
    }

    function syncRadio(fieldChanged) {
        var f1 = $('input[name="input_142"]:checked').val();
        var f2 = $('input[name="input_144"]:checked').val();

        if (f1 === "0" && f2 === "0") {

            if (fieldChanged === "142") {
                // Q1 ko Nee kiya, Q2 auto Ja + message
                showToast(msg1);
            } else {
                // Q2 ko Nee kiya, Q1 auto Ja + message
                $('input[name="input_142"][value="1"]').prop("checked", true);
                showToast(msg2);


                //$('input[name="input_142"][value="1"]').prop("checked", true);
                //} else {
                //$('input[name="input_144"][value="1"]').prop("checked", true);
                //             }
            }
        }
    }

    $('input[name="input_142"]').on('change', function () {
        syncRadio("142");
    });

    $('input[name="input_144"]').on('change', function () {
        syncRadio("144");
    });

});
