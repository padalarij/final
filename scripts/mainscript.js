var body = $("body");
function Delete(list) {
    list.css({ "display": "none" });
}
function Add(list) {
    list.css({ "display": "block", "position": "absolute", "background": "#0d3351", "padding-top": "15px", "padding-left": "15px", "padding-right": "15px", "border": "5px solid orange", "padding-bottom": "10px" });
}

var arrdatalist = [$(".mainbutton"), $(".hero__mainlist"), $(".lk"), $(".hero__userlist"), $(".rouble"), $(".hero__roublelist"), $(".language"), $(".hero__languagelist")];
var firstclick = true;
arrdatalist[0].click(
    function () {
        body.scroll(
            function () {
                Delete(arrdatalist[1]);
                firstclick = true;
            }
        );
        arrdatalist[1].click(
            function () {
                Delete(arrdatalist[1]);
                firstclick = true;
            }
        )
        if (firstclick == true) {
            Add(arrdatalist[1]);
            firstclick = false;
        }
        else {
            Delete(arrdatalist[1]);
            firstclick = true;
        }
    }
);
arrdatalist[2].click(
    function () {
        body.scroll(
            function () {
                Delete(arrdatalist[3]);
                firstclick = true;
            }
        );
        arrdatalist[3].click(
            function () {
                Delete(arrdatalist[3]);
                firstclick = true;
            }
        )
        if (firstclick == true) {
            Add(arrdatalist[3]);
            firstclick = false;
        }
        else {
            Delete(arrdatalist[3]);
            firstclick = true;
        }
    }
);
arrdatalist[4].click(
    function () {
        body.scroll(
            function () {
                Delete(arrdatalist[5]);
                firstclick = true;
            }
        );
        arrdatalist[5].click(
            function () {
                Delete(arrdatalist[5]);
                firstclick = true;
            }
        )
        if (firstclick == true) {
            Add(arrdatalist[5]);
            firstclick = false;
        }
        else {
            Delete(arrdatalist[5]);
            firstclick = true;
        }
    }
);
arrdatalist[6].click(
    function () {
        body.scroll(
            function () {
                Delete(arrdatalist[7]);
                firstclick = true;
            }
        );
        arrdatalist[7].click(
            function () {
                Delete(arrdatalist[7]);
                firstclick = true;
            }
        )
        if (firstclick == true) {
            Add(arrdatalist[7]);
            firstclick = false;
        }
        else {
            Delete(arrdatalist[7]);
            firstclick = true;
        }
    }
);
doc_w = $(window).width();

$(".catalog__item__more").click(
    function ()
    {
        $("div").not(".opencruise").css({"opacity":"0","background":"black"});
        $(".opencruise").css({ "z-index":"1", "position": "fixed", "left": "400px" , "top" :"200px","background":"white","height":"400px","width":"500px", "border": "3px solid black"});
        $("body").css({"overflow-y":"hidden"});
    }

)