var body = $("body");
var list = $(".list");
function Delete(list) {
    list.css({ "display": "none" });
}
function Add(list) {
    list.css({ "display": "block", "position": "absolute", "background": "#0d3351", "padding-top": "15px", "padding-left": "15px", "padding-right": "15px", "padding-bottom": "10px" });
}

var arrdatalist = [$(".mainbutton"), $(".hero__mainlist"), $(".lk"), $(".hero__userlist"), $(".rouble"), $(".hero__roublelist"), $(".language"), $(".hero__languagelist")];
var firstclick = true;
arrdatalist[0].click(
    function () {
        body.scroll(
            function () {
                Delete(list);
                firstclick = true;
            }
        );
        arrdatalist[1].click(
            function () {
                Delete(list);
                firstclick = true;
            }
        )
        if (firstclick == true) {
            Add(arrdatalist[1]);
            firstclick = false;
        }
        else {
            Delete(list);
            firstclick = true;
        }
    }
);
arrdatalist[2].click(
    function () {
        body.scroll(
            function () {
                Delete(list);
                firstclick = true;
            }
        );
        arrdatalist[3].click(
            function () {
                Delete(list);
                firstclick = true;
            }
        )
        if (firstclick == true) {
            Add(arrdatalist[3]);
            firstclick = false;
        }
        else {
            Delete(list);
            firstclick = true;
        }
    }
);
arrdatalist[4].click(
    function () {
        body.scroll(
            function () {
                Delete(list);
                firstclick = true;
            }
        );
        arrdatalist[5].click(
            function () {
                Delete(list);
                firstclick = true;
            }
        )
        if (firstclick == true) {
            Add(arrdatalist[5]);
            firstclick = false;
        }
        else {
            Delete(list);
            firstclick = true;
        }
    }
);
arrdatalist[6].click(
    function () {
        body.scroll(
            function () {
                Delete(list);
                firstclick = true;
            }
        );
        arrdatalist[7].click(
            function () {
                Delete(list);
                firstclick = true;
            }
        )
        if (firstclick == true) {
            Add(arrdatalist[7]);
            firstclick = false;
        }
        else {
            Delete(list);
            firstclick = true;
        }
    }
);

var sortbutton = $(".sort");
var sortlist = $(".content__sortlist");
sortbutton.click(
    function () {
        sortlist.click(
            function () {
                Delete(sortlist);
                firstclick = true;
            }
        );
        if (firstclick == true) {
            sortlist.css({ "display": "block", "position": "relative", "background": "#0d3351", "padding-top": "15px", "padding-left": "15px", "padding-right": "15px" });
            firstclick = false;
        }
        else {
            Delete(sortlist);
            firstclick = true;
        }
    }
);

doc_w = $(window).width();