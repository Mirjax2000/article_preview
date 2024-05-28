// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------

$(function () {
    const icons = ['kamen', 'papir', 'nuzky'],
        comp_1_icons = ['kamen', 'papir', 'nuzky'],
        comp_2_icons = ['kamen', 'papir', 'nuzky'],
        kamen = icons[0],
        papir = icons[1],
        nuzky = icons[2],
        comp_1 = $('#comp__1'),
        comp_2 = $('#comp__2'),
        comp_1_data = $('#comp__1__data'),
        comp_2_data = $('#comp__2__data'),
        comp_1_text = comp_1.find('.H4'),
        comp_2_text = comp_2.find('.H4'),
        comp__1__score = $('.comp__1__score'),
        comp__2__score = $('.comp__2__score'),
        kolo = $('.kolo__score'),
        result = $('.result'),
        display = result.find('.H5'),
        speed = 500,
        rollBtn = $('.roll__btn');

    let kola = 0,
        score = [0, 0];

    // funkce na nahodna cisla
    let rng = function () {
        return Math.floor(Math.random() * 3);
    };
    // prirazeni rng cisla k obrazku
    // ----------------------------------------------

    result.hide();

    // funkce na roll
    let roll = function () {
        result.hide();

        kola += 1;
        kolo.text(kola);

        let comp_1_vstup = comp_1_icons[rng()],
            comp_2_vstup = comp_2_icons[rng()];

        comp_1_data.removeClass().hide().show();
        comp_2_data.removeClass().hide().show();
        result.addClass('display');

        comp_1_text.text(comp_1_vstup);
        comp_2_text.text(comp_2_vstup);

        comp_1_data.addClass(comp_1_vstup);
        comp_2_data.addClass(comp_2_vstup);
        result.removeClass('display').show();

        if (
            (comp_1_vstup === papir && comp_2_vstup === kamen) ||
            (comp_1_vstup === kamen && comp_2_vstup === nuzky) ||
            (comp_1_vstup === nuzky && comp_2_vstup === papir)
        ) {
            display.text('C.O.M.P. - 1: WIN');
            score[0] += 1;
            comp__1__score.text(score[0]);
        } else if (
            (comp_2_vstup === papir && comp_1_vstup === kamen) ||
            (comp_2_vstup === kamen && comp_1_vstup === nuzky) ||
            (comp_2_vstup === nuzky && comp_1_vstup === papir)
        ) {
            display.text('C.O.M.P. - 2: WIN');
            score[1] += 1;
            comp__2__score.text(score[1]);
        } else {
            display.text('REMIZA');
        }

        if (Math.abs(score[0] - score[1]) < 3) {
            setTimeout(roll, speed);
        } else {
            console.log(' konec programam ');
            kola = 0;
            score = [0, 0];
        }
    };

    // click na roll__btn
    rollBtn.on('mousedown', function () {
        rollBtn.addClass('click');
        kolo.text(0);
        comp__1__score.text(0);
        comp__2__score.text(0);

        roll();
    });
    rollBtn.on('mouseup', function () {
        rollBtn.removeClass('click');
    });
    // ----------------------------------------------
});
