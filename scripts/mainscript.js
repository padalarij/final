var body = $("body");
var first_click=true;
function DeleteLists() {
    $(".list").click(function () {
        $(".list").css({ "display": "none" });
        click=0;
    })
    body.scroll(function () {
        $(".list").css({ "display": "none" });
        click=0;
    })
}
function ShowElementClicks(button, list) {
    button.click(function () {
        list.css({ "display": "block", "position": "absolute", "background": "#0d3351", "padding-top": "15px", "padding-left": "15px", "padding-right": "15px" });
    });
    return true;
}

var arrdatalist = [$(".mainbutton"), $(".hero__mainlist"), $(".lk"), $(".hero__userlist"), $(".rouble"), $(".hero__roublelist"), $(".language"), $(".hero__languagelist")]
window.onload = function () {
    for (i = 0; i < 8; i=i+2) {
        if (ShowElementClicks(arrdatalist[i],arrdatalist[i+1]))
        {
            first_click=false;
        }
    }
    var sortbutton = $(".sort");
    var sortlist = $(".content__sortlist");
    sortbutton.click(function () {
        sortlist.css({ "display": "block", "position": "relative", "background": "#0d3351", "padding-top": "15px", "padding-left": "15px", "padding-right": "15px" });
        first_click=false;
    })
    if (first_click == false) {
        first_click=DeleteLists();
    }
}
