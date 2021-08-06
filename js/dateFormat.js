$( document ).ready(function() {
    //change date1 format
    var date1 = document.getElementById('date1').innerText
    document.getElementById('date1').innerText = date1.split('T')[0]

    //change date1 format
    var date2 = document.getElementById('date2').innerText
    document.getElementById('date2').innerText = date1.split('T')[0]

    //change date1 format
    var date3 = document.getElementById('date3').innerText
    document.getElementById('date3').innerText = date1.split('T')[0]
});
