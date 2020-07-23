$(function () {


    let filter = $("[data-filter]");

    filter.on("click", function (e) {
        e.preventDefault();


        let cat = $(this).data('filter');

        if (cat == 'all') {
            $("[data-cat]").removeClass('hide');
        } else {

            $("[data-cat]").each(function () {


                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }

                console.log(workCat);


            })

        }


    })

})