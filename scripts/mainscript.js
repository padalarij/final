
window.onload=function(){
    var value=0;
    mainnav.onclick = function(event) {
        if (value % 2 == 1)
        {
            document.getElementById('drop').id = 'no__drop';
        }
        if (value % 2 == 0)
        {
            document.getElementById('no__drop').id = 'drop';
        }
        value=value+1;
    }    

}
