function obtineDate(g, o) {
    var dateTema = [];
    if (g % 2 === 0) {
        var d = 24;
    } else {
        d = 22;
    }

    dateTema.push(d);

    if (g === 1 || g === 4) {
        var t = 10;
    }
    else if (g === 2 || g === 3) {
        t = 9;
    }
    else if (g === 5) {
        t = 11;
    }
    else if (g === 6) {
        t = 12;
    }
   

    dateTema.push(t);

    if (o % 2 === 0) {
        var h = 10;
    } else {
        h = 9;
    }

    dateTema.push(h);

    if (o <= 15) {
        var grupaFunct = "HC2";
        var grPrInv = 0.5;
        var izolata = " (invelitoare izolata termic)";
        var spatiuTehnic = 0.2;
    } else {
        grupaFunct = "HC3";
        grPrInv = 0.15;
        izolata = " (invelitoare neizolata termic)";
        spatiuTehnic = 0.3;
    }

    dateTema.push(grupaFunct);
    dateTema.push(grPrInv);
    dateTema.push(izolata);
    dateTema.push(spatiuTehnic);

    if (o % 3 === 0) {
        var s = 1.5;
        var praf = 1;
    }
    else if (o % 3 === 1) {
        s = 2;
        praf = 0.5;
    }
    else if (o % 3 === 2) {
        s = 2.5;
        praf = 0.25;
    }

    dateTema.push(s);
    dateTema.push(praf);



    if (o % 10 >=1 && o % 10 <= 5) {
        var q1 = 32;
    } else {
        q1 = 40;
    }

    dateTema.push(q1);

    if (o % 10 === 1 || o % 10 === 6) {
        var q2 = 25;
    }
    else if (o % 10 === 2 || o % 10 === 7) {
        q2 = 20;
    }
    else if (o % 10 === 3 || o % 10 === 8) {
        q2 = 16;
    }
    else if (o % 10 === 4 || o % 10 === 9) {
        q2 = 12;
    }
    else if (o % 10 === 5 || o % 10 === 0) {
        q2 = 10;
    }

    dateTema.push(q2);

    return dateTema;

}


$(".genereaza").click(function() {
    var numarGrupa = parseInt($("#grupa").val());
    var numarOrdine = parseInt($("#nr-ordine").val());
    var listaDate = obtineDate(numarGrupa, numarOrdine);
    if (numarGrupa >= 1 && numarGrupa <= 6 && numarOrdine > 0) {
        $("#dateTema").show();
        $(".deschidere").text(listaDate[0]);
        $(".travee").text(listaDate[1]);
        $(".sina").text(listaDate[2]);
        $(".poduri-rulante").text(listaDate[3]);
        $(".invelitoare").html(listaDate[4] + " kN/m<sup>2</sup>" + listaDate[5]);
        $(".sp-tehnic").text(listaDate[6]);
        $(".zapada").text(listaDate[7]);
        $(".praf").text(listaDate[8]);
        $(".q1").text(listaDate[9]);
        $(".q2").text(listaDate[10]);
    } else {
        alert("Datele introduse nu sunt corecte!");
        
    }
    
});