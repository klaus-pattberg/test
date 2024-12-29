
svgns = "http://www.w3.org/2000/svg";


var indexwindows = 0;
var newwindows = [];


function startevent() {


    if (typeof (EventSource) !== "undefined") {
        var source = new EventSource("serverevent.php");
        source.onmessage = function (event) {
            document.getElementById("result").innerHTML += event.data + "<br>";
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";
    }
}



//var svg=new svg('width:300,height:300');
var winc1 = ['start'];

var count = 0;
function keyanz(p1, p2, p3) {
    alert(p1)
}

function showwindowsprop() {
    let a2 = '';
    let a1 = Object.getOwnPropertyNames(window)
    for (prop in a1) a2 += prop + '***' + a1[prop] + '###' + window[a1[prop]] + '<br>';
    return a2;


}

function stromdiff(iz) {

    if (window.iz1) {

        window.iz0 = window.iz1;
    }
    else {

        window.iz0 = iz;
    }
    window.iz1 = iz

    var iiz = [];
    iiz[0] = document.getElementById(window.iz0);
    iiz[1] = document.getElementById(window.iz1);





    var date = [];
    var z1 = [];
    var z2 = [];
    h = '<div class=sticky><table border=1>';
    for (ii = 0; ii < 2; ii++) {
        h += '<tr>';

        date[ii] = iiz[ii].getElementsByClassName('datum')[0].textContent;

        z1[ii] = iiz[ii].getElementsByClassName('z1')[0].textContent;
        z2[ii] = iiz[ii].getElementsByClassName('z2')[0].textContent;
        h += '<td>' + date[ii] + '</td><td>' + z1[ii] + '</td><td>' + z2[ii] + '</td>';
        h += '</tr>';
    }
    h += '</table><table border=3>';
    h += '<tr><td>tage</td><td>stunden</td><td>Z1 kw</td><td>Z2 kw</td><td>kw/jahr Z1</td><td>kw/jahr Z2</td>';
    h += '<td>Preis für  kw </td><td>preis bez</td><td>ist preis</td></tr><tr>'
    dd = Math.abs(date[0] - date[1])  // sekunden total
    dz1 = Math.abs(z1[0] - z1[1]);
    dz2 = Math.abs(z2[0] - z2[1]);
    jv = parseInt(dz1 * 365 * 24 * 3600 / dd); // jahresverbrauch kalkuliert
    jv2 = parseInt(dz2 * 365 * 24 * 3600 / dd);
    h += '<td>' + parseInt(dd / 3600 / 24) + '</td>';  // Tagedz2
    h += '<td>' + parseInt(dd / 3600 % 24) + '</td>';  // Stunden
    h += '<td>' + dz1 + '</td>';  // Zahler 1
    h += '<td>' + dz2 + '</td>';  // zahler 2
    h += '<td>' + jv + '</td>';  // jv zaehler 1
    h += '<td>' + jv2 + '</td>';  // jv zaehler 2
    kwh = 0.3335;
    kpj = 169;
    jv = parseInt(jv * kwh) // Kosten strom pro jahr
    h += '<td>' + jv + ' kw:' + kwh + '</td>';
    days = parseInt(dd / 3600 / 24 / 365 * kpj + jv); // kosten grundgebühr + strom bis heute
    h += '<td>' + '1344' + '</td>';
    h += '<td>' + days + '</td>'; // kosten gesamt
    h += '</tr></table></div>';

    document.getElementById('dtab').innerHTML = h;

    return;

}









var melde1 = function () {


    var a1 = Object.assign({}, arguments[0])
    var keys = keyanz(a1);
    var v = '';
    var i = 0;
    var a2 = Reflect.ownKeys(arguments[0]);
    try {
        for (let a in arguments[0]) {
            i++;
            if (i < 5) alert(a + '#' + i);
            if (a == undefined) break;
            let e = 'a:' + a + '#';
            e += arguments[0][a];
            e += '<br>';
            v = e + v;
            document.getElementById('test').innerHTML = v;



        }
    }
    catch (error) {
        alert('error' + error)
    }



    document.getElementById('test').innerHTML = v;
}



var melde = function (event) {
    count++;
    document.getElementById('test').innerHTML = count + '#x: ' + event.clientX + '#type: ' + event.type;
}

function startsvg() {
    var svg = document.getElementById('svg');

    var w = svg.clientWidth;
    var h = svg.clientHeight;

    var g = document.getElementById('g');

    g1 = document.createElementNS(svgns, 'g');
    g1.setAttributeNS(null, 'id', 'g1');
    g1.style.backgroundColor = 'green';
    g1.style.fill = 'blue';

    matrix = svg.createSVGMatrix();
    matrix1 = matrix.translate(100, 200);
    sm = svg.createSVGTransformFromMatrix(matrix1);

    //   g1.transform.baseVal.appendItem(sm); 
    svg.appendChild(g1); // append g1


    s = document.getElementById('svg');
    var r = document.createElementNS(svgns, 'rect');
    r.setAttributeNS(null, 'fill', 'lightgreen');
    r.setAttributeNS(null, 'x', '10px');
    r.setAttributeNS(null, 'y', '10px');
    r.setAttributeNS(null, 'width', '400px');
    r.setAttributeNS(null, 'height', '50px');
    r.style.backgroundColor = '#00ff00';

    var c = document.createElementNS(svgns, 'circle');
    c.setAttributeNS(null, 'cx', '100px');
    c.setAttributeNS(null, 'cy', '10px');
    c.setAttributeNS(null, 'r', '100px');

    c.style.fill = '#00ffff';

    g.appendChild(c);
    var x0 = 200;
    var yr = 20;


    for (var i = 0; i < 10; i++) {
        var xa = x0 + i * 10;
        var xo = xa + 'px';
        var ra = yr + i;
        var ro = ra + 'px';
        e = createsvg('circle', { cx: xo, cy: '10px', r: ro })
        //     g.appendChild(e);
        g1.appendChild(e);
    }

}

function createsvg(type, par) {
    // circle cx,cy,r
    // rect   x,y,width,height
    // line   x1,y1,x2,y2
    // g      
    var e = document.createElementNS(svgns, type)
    for (var a in par) {
        var b = a;
        e.setAttributeNS(null, a, par[a])
    }
    return e;
}




function wopen(file) {
    var ev = event;
    var ev1 = Event;
    if (ev.ctrlKey) {
        for (i in newwindows) {

            newwindows[i].close();
        }


    }

    var tt = document.getElementById('dir').value;
    var tt = "";
    tt += '/' + window.event.currentTarget.textContent;
    var fout = encodeURIComponent(tt);
    var url = 'http://localhost/e/showfile.php?file=' + fout;
    var screeny = 150 * indexwindows;
    newwindows[indexwindows] = window.open(url, "", "width=600,height=1020,left=0,top=" + screeny);
    indexwindows++;
    //  var w1=window.open('http://localhost/e/konto.php'," ","width=100,height=120,screenx=200,screeny=0");

    return;
}



function copyfile(file) {
    var a1 = document.getElementById('dir');
    a1.value = file;
    var form = document.getElementById('form');
    form.submit();
}


function createsvgelement(e, p) {
    var ele = document.createElementNS(svgns, e);
    for (a in p) {
        ele.setAttributeNS(null, a, p[a]);


    }
    return ele;

}
xah_get_proto_chainxah_get_proto_chain = ((x) => {
    const result = [x];
    let t = x;
    while ((t = Reflect.getPrototypeOf(t)) !== null) console.log(result.push(t));
    return result;
});




function hreffilebrowser(file) {
    var url = "file://" + file;
    hreffilea(url);
    return;
}

function hreffile(file) {
    var url = "http://localhost/e/showfile.php?file=" + file;
    var url = "file:///home/pattberg/.wxHexEditor";
    if (window.event.altKey) url += '&alt=1';
    if (window.event.ctrlKey) url += '&ctrl=1';
    hreffilea(url);
    return;
}




function deletewindows() {
    for (i in window.a1) window.a1[i].close();
    window.a1 = [];
}


function hreffilea(url) {
    url = "file:///home/pattberg/.wxHexEditor";


    if (!window.a1) window.a1 = [];
    var event = window.event;
    if (event.ctrlKey) {
        deletewindows();
    }
    if (event.shiftKey) {
        url += '&csv=;';

    }

    var len = window.a1.length;
    var dis = len * 20 + 100;


    w0 = window.open(url, "", "width=500,height=300,screenx=" + dis + ",screeny=0,toolbar=yes");
    window.a1.push(w0);

}


function hrefn(num = -1) {
    var a1 = document.getElementById('num');
    if (a1) a1.value = num;

    hrefstart();

}


function hrefstart(file = 'JJ') {
    if (event.keyCode != 13) return;


    document.getElementById('myform').submit();
}



function href1(file = 'JJ') {

    document.getElementById('filename').value = file;
    document.getElementById('myform').submit();
}

function href0(file) {

    var d = event.target.innerText;
    var num = document.getElementById('num').value;


    document.getElementById('dirname_' + num).value = file;
    document.getElementById('new').value = 'new';

    document.getElementById('myform').submit();
}


function showwindows() {
    a5 = document.getElementById('windows');
    a1 = window; // .getElementById('body');

    a2 = Object.getOwnPropertyNames(a1);
    test = "<h1>typeof getown  " + typeof a2 + '#</h1>';
    a2.sort();
    test += '<table border=1>'
    for (a3 in a2) {

        var name = a2[a3];
        a4 = a1[name];

        if (a1[name])
            test += '<tr>' + '<td>' + a3 + '</td><td>' + name + '</td><td>' + typeof (a1[name]) + '</td><td>' + a4 + '#</td></tr>';
    }
    test += '</table>';

    a5.innerHTML = test;


    alert('windows');
}



function test() {
    for (var i in this) {
        console.log(i);
        console.log(i + ' #' + this[i] + '*' + typeof this[i]);
    }
    return false;
}

function log(node) {
    console.log(node.nodeName + node.value)
}

function domWalker(node, func) {
    func(node);
    node = node.firstElementChild;
    while (node) {
        domWalker(node, func);
        node = node.nextElementSibling;
    }
}



function searchFlights() {
    var select1 = document.getElementById("airports-select-1");
    var selected1 = [];
    for (var i = 0; i < select1.length; i++) {
        if (select1.options[i].selected) selected1.push(select1.options[i].value);
    }
    console.log(selected1);
}



Date.prototype.doy = function () {
    var a1 = this.getTime();
    var mo = this.getMonth();
    var day = this.getDate();
    this.setMonth(0);
    this.setDate(1);
    a2 = a1 - this.getTime();
    this.setMonth(mo);
    this.setDate(day);
    var day = parseInt((a2) / 1000 / 3600 / 24);
    return day;
}
Date.prototype.daytotal = function () {
    var a2 = this.getTime();
    var day = parseInt((a2) / 1000 / 3600 / 24);
    return day;
}

function change(evt, value) {
    //      alert ('change');
    count++;
    var target = evt.target;

    var text = document.getElementById('text');
    text.textContent = count;
    text.setAttribute('stroke', 'red');
    text.innerHTML = 'Anzahl' + count + ' ' + value + '<br>';


    target.setAttribute('stroke', 'green');
}

function showbutton(tthis, zz) {

    var value = document.getElementById('grenzwert').value;
    var key = window.event.keyCode;
    // zzi=zz || 'leer' ;
    // a1=document.getElementById('focus');
    // a1.focus();

    var v1 = value.split(/[<>=]/g);
    var v2 = value.split(/[0-9]/g);

    if (key == 13) alert(value + '#' + key + 'v1:' + v1 + ' v2:' + v2);

}

function ascii_to_hexa(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
        arr1.push(' ');
    }
    return arr1.join('');
}

//
//anzeige der Kundenliste
//
function kundenliste(until) {
    openwindows();
    var grenzdate = 1000;
    var akdate = new Date();
    var doy = akdate.doy() + 1;
    if (undefined != until) grenzdate = doy;
    var a1 = w2.document.getElementsByTagName('BODY')[0];
    var text = '<h2>KUNDENLISTE Bis Tag ' + grenzdate + '</h2>';
    text += '<table border=1><tr>';


    var jliste = Object.keys(window.Akonten.jliste);
    var yliste = window.Akonten.jliste;
    jliste.sort(function (a, b) { return b - a; });
    var yheadliste = ['kunde']; // headerliste de Tabelle


    var ytliste = [];  // liste der verwendeten Jahre
    for (i = 0; i < jliste.length; i++) {
        y = jliste[i];
        if (Object.keys(yliste[y]).length > 0) { ytliste.push(y); yheadliste.push(y); yheadliste.push('dif') }
    }
    var headlines = ytliste;
    text += createheadline(yheadliste);



    var agl = window.Akonten.agliste;
    var betind = 'betrag';

    if (grenzdate < 1000) betind = 'betragbis';
    for (var name in agl) {
        text += '<tr>';
        text += '<td>' + agl[name]['name'] + '</td>';
        for (var i = 0; i < ytliste.length; i++) {
            var bet = 0;
            var betbis = 0;
            var year = ytliste[i];
            var yearn = 0;
            if (i < ytliste.length) yearn = ytliste[i + 1];

            if (year in agl[name]) {
                bet = agl[name][year][betind];
                betd = 0;
                if (yearn > 0 && yearn in agl[name]) {
                    betd = -agl[name][yearn][betind] + bet;
                }
            }
            else {
                text += '<td></td><td></td>';
                continue;
            }
            var bgcolor = "bgcolor='red'";
            if (betd > 0) bgcolor = "bgcolor='lightgreen'";
            text += `<td>${bet}</td><td ${bgcolor}>  ${betd} </td>`;
        }



        text += '<tr>';
    }
    ;

    text += '</table>';


    a1.innerHTML = text;

}


function setzeao(agname = 'leer', type)    // Type = 0 für 1 wort + 1 character  =1 für 2 worte von suchfeld
{
    typ = 0 || type;
    Akonten['ao'] = 1;

    var agnam = agname.split(' ');

    var zusatz = '';
    if (agnam.length > 1) {
        zusatz = agnam[1];

        if (event.ctrlKey) zusatz = zusatz.substr(0, 1);

        agnam[0] += ' ' + zusatz;  /////////.substr(0,1);
    }

    onclick1(agnam[0]);


}


function showtable(win, year) {
    var a1 = win.document.getElementsByTagName('BODY')[0];



    a1.innerHTML = "<svg id='svg' width=300 height=300><rect width=200 height=100 ></rect></svg>";


}



function showbetrag(betrag, izeile = 0) {

    if (window.event.altKey) betrag = -betrag;

    var a1 = w2.document.getElementsByTagName('BODY')[0];
    if (!window.Akonten.tablebetrag || event.ctrlKey)   // window.w1 loesche Table wenn ctrlKey

    {
        window.Akonten.tablebetrag = [];
        window.Akonten.tablezeile = [];
    }

    var len = window.Akonten.tablezeile.push(izeile);

    window.Akonten.tablebetrag.push(betrag);
    var erg = '<table border=1 ><tr><td>ctrlKey=lösche Table</td><td> altKey=invert Betrag</td></tr>';
    erg += '<tr><td>Betrag</td><td>Summe</td><td>Zeile</td></tr>';
    var sum = 0;

    for (var i = 0; i < len; i++) {
        var betrag = window.Akonten.tablebetrag[i];
        var iz = window.Akonten.tablezeile[i];
        var zeile = window.Akonten.zeilen[iz];
        var tzeile = zeile.split(';');
        sum = parseInt((sum * 100 + betrag * 100)) / 100;
        var tdb = '<td bgcolor=#00ff00 >';
        if (betrag < 0) tdb = '<td bgcolor=#ff0000 >';
        var tds = '<td bgcolor=#00ff00 >';
        if (sum < 0) tds = '<td bgcolor=#ff0000 >';


        erg += '<tr>' + tdb + parseFloat(betrag) + '</td>' + tds + parseFloat(sum) + '</td><td>' + tzeile[1] + '</td></tr>';

    }
    erg += '</table>';

    // loop über alle Einträge in der AKONTEN Zeile

    if (izeile != 0) {




        erg += '<table border=1>';
        for (i = 0; i < tzeile.length; i++) {
            erg += '<tr><td>' + i + '</td><td>' + tzeile[i].length + ' </td><td>' + tzeile[i] + '</td></tr>';
        }

        erg += '</table><Table border=1>';
        for (var a5 in window.event) {
            erg += '<tr><td>' + a5 + '</td><td>' + window.event[a5] + ' </td></tr>';



        }
        erg += '<tr><td>' + window.event.currentTarget + '</td><td>' + window.event.target + ' </td></tr>';

        for (var a5 in window.event.currentTarget) {
            erg += '<tr><td>' + a5 + '</td><td>' + window.event.currentTarget[a5] + ' </td></tr>';



        }

        erg += '</table>';
    }


    if (a1) { a1.innerHTML = erg; }

    else { alert(betrag); };
}

function onclickyear(y) {
    var a1 = 'y>=' + y;//+ '&&m==1';
    onclick1(a1);
    document.getElementById('suchfeld').value = a1;

}




function onclickmonth(m) {


    var a1 = document.getElementById('suchfeld').value;
    var p1 = a1.indexOf('&&m==');
    if (p1 > 0) a1 = a1.substr(0, p1);
    if (m > 0) a1 += '&&m==' + m;
    document.getElementById('suchfeld').value = a1;

    onclick1(a1);



}





function onpressl() {
    value = document.getElementById('suchfeld').value;
    onclick1(value);

}


function onkeypress1(value, event) {
    if (event.keyCode != 13) return;

    onclick1(value);
}


function unload() {
    console.log('function unload');
    //   if (window.newwindows)
    {

        for (var i in newwindows) newwindows[i].close();

    }

    if (window.w1) {
        if (window.w1.w2) window.w1.w2.close();
        window.w1.close();
    }
}


// suchen und erzeugen der ausgewaehlten kontoeinträge


function searchkonto(valuu) {



    var saldo = 0;

    valuu = valuu.replaceAll(',', '.');      // replace alle ',' in '.'
    var zeilen = window.Akonten.zeilen;

    var pp = valuu.substring(4, 5);
    var jh = valuu.substring(0, 4);
    var fremd = 0;

    var today = new Date();
    var doyt = today.doy();      // tag des jahres von today

    var jahr = 0;




    oldm = '01';

    window.Akonten.eliste = {};
    window.Akonten.jliste = {};
    window.Akonten.agliste = {};
    window.Akonten.yearliste = [];

    var eliste = window.Akonten.eliste;
    var jliste = window.Akonten.jliste;
    var agliste = window.Akonten.agliste;
    var yearliste = window.Akonten.yearliste;// array f?r alle Jahre


    if (jh == 0) jh = '2020';
    //      Loop ueber alle Zeilen
    valuu = valuu.replace('(', '( ');

    var sp = valuu.split(' ');

    for (i = 0; i < sp.length; i++) {
        if (sp[i] == 'in') // mache aus neue in k >> k.search('neue')>=0  
        {
            console.log('i:' + i + '#' + sp[i - 1] + '#' + sp[i + 1])
            sp[i - 1] = sp[i + 1] + '.search(' + "'" + sp[i - 1] + "'" + ')';
            sp[i] = '>=';
            sp[i + 1] = '0';
            console.log('idanac:' + i + '#' + sp[i - 1] + '#' + sp[i + 1])




        }

    }

    valuu = sp.join(' ');
    console.log(valuu);

    if (valuu.search(/[<=>]/) < 0 && valuu.length < 2)  // kein Zeiche []<> etc in valuu
    {
        valuu = 'y>2018'
    }

    var saldoold = 0;


    //      loop über alle Zeilen diese sind aufsteigend nach datum sortiert


    totaltab = {};

    for (var i = 0; i < zeilen.length; i++) {
        izeile = i;

        var zeile = zeilen[i];
        zeile = zeile.toLowerCase();

        if (zeile.indexOf('3443967') != 0) {
            fremd++;
            continue;
        }


        var splitor = zeile.split(';');     // splitor = array 
        var azeile = splitor.join(';');    // komplette text-zeile zum suchen

        var split = splitor.slice(1, 6);    // split =  element 1-6 aus splitor

        var datum = splitor[1];            // datum aus Zeile
        var betrag = parseFloat(splitor[2]);  // betrag aus Zeile

        var saldo = parseFloat(splitor[3]);

        var agname = splitor[4];
        var vwz = splitor[5];
        var agnames = agname.split(' ');  // split the string
        var agname2 = agnames[0] + ' ' + agnames[1];
        //          if (!agname) agname=splitor[4].substring(0,20);

        var newy = parseInt(datum.substring(0, 4));        // jahr des kasseneintrags
        var newm = parseInt(datum.substring(5, 7));        // monat des kasseneintrags
        var newd = parseInt(datum.substring(8, 10));        // Tag des kasseneintrags
        var newdate = new Date(newy, newm - 1, newd);          // date des kasseneintrags
        var doy = newdate.doy();
        // tag des Jahres des Kasseneintrags
        if (!totaltab[agname2]) {
            totaltab[agname2] = [];
            for (let i = 0; i < 12; i++) totaltab[agname2][i] = i;


        }
        totaltab[agname2][0]++;




        var dateofentry = new Date(newy - 0, newm - 1, newd - 0); // - operator erzwingt numerisches ergebnis
        var doyd = dateofentry.doy();



        split[0] = datum;
        split[1] = saldo
        split[2] = betrag;
        split[3] = agname;
        split[9] = betrag + saldoold;
        if (Math.abs(split[9] - saldo) < 1) split[9] = 0;
        saldoold = saldo;
        if (!indexao[agname]) indexao[agname] = 0;
        indexao[agname]++;

        if (!eliste[newy]) {
            eliste[newy] = [];
            jliste[newy] = [];
            yearliste.push(newy);
        }

        var b = betrag;
        var a = Math.abs(b);
        var y = newy;
        var m = newm;
        var k = agname;
        var l = zeile;
        var sq = k + vwz;
        sq = zeile;

        if (valuu.search(/[<=>]/) < 0) // kein operator im suchstring 
        // suche nach 1. Wort + Anfangsbuchstabe 2 Wort      
        {
            var ss = valuu.split(' ');     // split suchstring 
            var f1 = sq.indexOf(ss[0]);
            var f2 = sq.indexOf(ss[1]);
            if (ss.length < 2) f2 = 0;       // anzahl splits im suchstring
            if (f1 < 0 || f2 < 0) continue;  // nicht gefunden  nächster eintrag          
            var found = 1;
        }

        else {

            var value = valuu.replace('abs(', 'Math.abs()');
            var a1 = eval(value);

            if (a1) {
                var found = 2;
            }
            else {
                continue;    // kein treffer nnächster eintrag
            }
        }


        var agn = agname.substring(0, 23);  // 23 Buchstaben des Kundennamens
        var spl = agn.split(' ');
        if (spl[0] == '') spl[0] = 'kein 1. wort';
        var agn2 = spl[0];  // agn2 = 1. Wort des kundennamens 

        agn = spl[0]   // agn 1.wort + 1 Buchstabe des 2 Wortes des Kunden wegen 'ga nr0005' 'ga nr0006'  
        if (spl.length > 1) {
            agn2 += ' ' + spl[1];
            agn += ' ' + spl[1].substr(0, 1);
        }
        if (!(agn in agliste))  // name fehlt noch in Liste
        {

            agliste[agn] = {};

        }
        if (!(newy in agliste[agn])) {
            agliste[agn][newy] = {};
            agliste[agn][newy]['betrag'] = 0;
            agliste[agn][newy]['betragbis'] = 0;
            agliste[agn]['name'] = agn2;
            agliste[agn]['doy'] = doyd;
        }
        bet = agliste[agn][newy]['betrag'];
        bet += betrag;
        betbis = agliste[agn][newy]['betragbis'];

        if (doyt + 1 > doyd) betbis += betrag;


        agliste[agn][newy]['betrag'] = parseInt(bet);    // aufsummierter betrag für kunde im jahr
        agliste[agn][newy]['betragbis'] = parseInt(betbis);    // aufsummierter betrag für kunde im jahr

        split[5] = agliste[agn][newy]['betrag'];
        split[6] = 0;
        split[9] = parseInt(izeile);

        // check auf jahresausgaben

        if (azeile.indexOf('wulfs') >= 0 ||
            azeile.indexOf('hensel') >= 0 ||
            azeile.indexOf('tennis') >= 0 ||
            azeile.indexOf('eon') >= 0 ||
            azeile.indexOf('huk-') >= 0 ||
            azeile.indexOf('finanz') >= 0 ||
            azeile.indexOf('vhv') >= 0 ||
            azeile.indexOf('itzehoer') >= 0 ||
            azeile.indexOf('generali') >= 0 ||
            azeile.indexOf('oerag') >= 0 ||
            azeile.indexOf('gemeinde') >= 0 ||
            azeile.indexOf('adyen') >= 0 ||
            azeile.indexOf('neuendorfer') >= 0 ||
            azeile.indexOf('norddeutscher') >= 0 ||
            azeile.indexOf('vodafone') >= 0 ||
            azeile.indexOf('hansemerk') >= 0 ||
            azeile.indexOf('sky') >= 0 ||
            azeile.indexOf('springer') >= 0 ||
            azeile.indexOf('maingau') >= 0 ||
            azeile.indexOf('e.on') >= 0 ||
            azeile.indexOf('brennstoff') >= 0 ||
            azeile.indexOf('wasserg') >= 0) {
            jahr += betrag;
            jliste[newy].push(split); // anhaengen array split an array jliste[new]
        }


        eliste[newy].push(split);

    }    // Ende Loop ?ber  alle Zeilen

    return valuu;
}



function onclick0() {
    yt = new Date();
    y = yt.getFullYear() - 2;
    console.log(' year:' + y + ' yt:' + yt);
    onclick1('y>' + y);
}


function openrechner1() {
    var vx = `fullscreen=no,width=350,height=80,screenx=0${window.screenX},screeny=${window.screenY}`;
    vx = "fullscreen=no,width=550,height=80,screenx=0,screeny=0";
    if (!window.w0 || window.w0.closed)  // rechner  
    {
        window.w0 = window.open("rechner1.html?a=5", "", vx);
        window.newwindows.push(window.w0);
    }
    return;
}




function openwindows() {
    //   if (!window.w1)
    {
        var vx = `fullscreen=no,width=350,height=80,screenx=${window.screenX},screeny=${window.screenY}`;
          vx="fullscreen=no,width=550,height=80,left=0,top=0";
        if (!window.w0 || window.w0.closed)  // rechner  
        {
            window.w0 = window.open("rechner1.html?a=0", "mozillaWindow", vx);
            window.newwindows.push(window.w0);


        }






        if (!window.w1 || window.w1.closed) {





            window.w1 = window.open("", "mozillaWindow", "fullscreen=no,width=450,height=600,left=0,top=100");
            window.newwindows.push(window.w1);

            var head = window.w1.document.getElementsByTagName('head').item(0);
            var script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('src', 'http://localhost/nusphere/canvas.js');
            var rm = head.appendChild(script);



        }


        if (!window.w2 || window.w2.closed) {
            window.w2 = window.open("", "mozillaWindow2", "fullscreen=no,width=300,height=800,left=400,top=200");
            if (w2) {
                window.newwindows.push(window.w2);
                window.w2 = w2;
                window.w2.Akonten = window.Akonten;
                var d3 = window.w2.document.getElementsByTagName('body').item(0);

                var head = window.w2.document.getElementsByTagName('head').item(0);
                var script = document.createElement('script');
                script.setAttribute('type', 'text/javascript');
                script.setAttribute('src', 'http://localhost/nusphere/canvas.js');
                var rm = head.appendChild(script);

                window.w1.w2 = w2;
            }

            window.w1.Akonten = window.Akonten;
        }
    }

}



function onclick1(valuu) {
    openwindows();
    var d1 = w1.document;

    var d2 = d1.getElementsByTagName('BODY');




    // body der neuen seite
    if (!window.Akonten.ao) window.Akonten.ao = {};
    indexao = window.Akonten.ao;






    if (!w1.table) w1.table = '';

    value = searchkonto(valuu);   /// suchen im totalen Konto-file






    var eliste = window.Akonten.eliste;          // Liste der Jahre
    var jliste = window.Akonten.jliste;         // Liste der Jahresausgaben
    var agliste = window.Akonten.agliste;      // liste aller Kunden
    var yearliste = window.Akonten.yearliste;// array f?r alle Jahre








    var tab = new tabout();
    //	tab.tabs('jahr',jahr);
    //	tab.tabs('ao',ao);



    //  neues Format






    //   1. Zeile jahresausgaben nach ttz1
    //   2. zeile gesamtausgaben
    //   if (document.getElementById('newest').checked) 	yearliste.reverse();
    yearliste.reverse();
    //  umsetzen der Ergebnisse in Tabellen



    var ttz1 = "<tr valign=top>";
    var ttz2 = "<tr valign=top>";

    for (var y in yearliste) {
        var entr = yearliste[y];
        var a1 = jliste[entr];    // jahresausgaben




        var a2 = eliste[entr];    // gesamtausgaben
        //        if (a1.length==0 ||  a2.length<=2) continue;
        //        if ( a2.length<=2) continue;
        var tt1 = taboutarray(a1, y);

        if (tt1 != '') ttz1 += "<td>" + tt1 + "</td>";
        if (document.getElementById('senkrecht').checked) ttz1 += '</tr><tr>';

        a1 = eliste[entr];
        var tt1 = taboutarray(a1, y);
        1
        if (tt1 != '') ttz2 += "<td>" + tt1 + "</td>";
        if (document.getElementById('senkrecht').checked) ttz2 += '</tr><tr>';
    }

    var tt = '<table border=4 valign=top bgcolor=#c0c0c0><tr valign=top >';   // gesamtabelle
    tt += "<tr><td id=table>" + 'Search: <h2>' + valuu + "</h2></td></tr>";


    // abfrage ob tabelle mit jahresausgaben ausgegeben wird

    if (document.getElementById('jahresausgaben').checked) {

        tt += ttz1 + '</tr>';  // alle Jahrestabellen für jahresausgaben
    }


    tt += ttz2 + '</tr>';  // alle Jahrestabellen total

    tt += "</table>";





    var text = "<div id='diva' style='height:1000px; transform-origin:100px 100px; opacity:1.0;z-index:1;overflow:scroll; overflow-x:scroll ;'> ";
    //$$   text+="<div style='transform:scale(0.8,0.9); transform-origin: left top; ' >"; 



    text0 = "Suchstring:" + valuu + '<br>';
    text0 += "<br> Anzahl Zeilen = Akonten.zeilen:" + window.Akonten.zeilen.length + " <br> ";





    text += tt;    // Tabellen einfügen

    //$$   text+="</div>";


    text1 = '';
    for (i = 0; i < 50; i++) text1 += 't' + i + '<br>';


    //   d2[0].outerHTML="<body style='margin:0;background-color:lightblue'>" + vs +  "<div style='left:100; top:200;' id=demo>neu " + text + text1 +"</div></body>";


    var dx = window.document.getElementsByTagName('body')[0].innerHTML;
    var dy = window.w1.document.getElementById('focus');

    //    window.w1.focus();
    //var ay=dy.focus();
    window.Akonten.ao = indexao;

    var a0 = document.getElementById('tabellen');
    a0.innerHTML = text;



}




function input(element, event) {
    var a3 = document.getElementById('grenzwert');
    if (event.keyCode != 13) return;
    onclick1(a3.value);

}
function createheadline(felder, grenzfeld) {

    headline = "<tr bgcolor='#fefe00'>";
    headfelder = felder;
    grenzfeld = grenzfeld || ' ';
    for (var i in headfelder) {
        bgcolor = "bgcolor='#ffff00'";
        if (grenzfeld.search(headfelder[i]) >= 0) {
            bgcolor += " style='width:20%'";
        }
        headline += "<td onclick='sorttabelle()'" + bgcolor + " >" + headfelder[i] + "</td>";
    }
    headline += '</tr>';
    return headline;
}



function taboutarray(tab, comment) {

    if (tab.length == 0) {
        return "";
    }

    var text = '<table border=1 >';
    var betspalte = 2;
    var datespalte = 0;

    var today = new Date();
    var doyt = today.doy();      // tag des jahres von today



    var monthold = parseInt(tab[0][datespalte].split('.')[1]);
    var bgc1 = ' bgcolor=#ffeoe0 ';
    var bgc2 = ' bgcolor=#ff8080 ';
    var bgc = bgc1;
    var summe = 0;
    var summerest = 0;
    //  loop ?ber alle Zeilen
    headfelder = ['Date', 'Saldo', 'Betrag', 'Kunde', 'Vwz', 'Su Kd', 'Su Year', 'Doy', 'Su Resty', 'nr'];
    headline = createheadline(headfelder, 'Vwz Kunde');
    /*
      for (var i in headfelder)
      {
          headline+="<td onclick='sorttabelle()' bgcolor='#ffff00'>" + headfelder[i] + "</td>";
      }
      headline+='</tr>';
  
  */

    //  loop über alle Zeilen
    var iz = 0;
    var tzt = [];
    for (var i = 0; i < tab.length; i++) {
        if (!tab[i]) break;
        var tz = '';

        var datesplit = tab[i][datespalte].split('.');
        var dateaktuell = new Date(parseInt(datesplit[0]), datesplit[1] - 1, parseInt(datesplit[2]));

        var aday = dateaktuell.doy();
        var month = parseInt(datesplit[1]);
        if (monthold != month) {
            bgc == bgc1 ? bgc = bgc2 : bgc = bgc1;

        }

        var betrag = parseFloat(tab[i][betspalte]);


        if (tab[i][3].indexOf('ingeborg patt') < 0 && tab[i][4].indexOf('wertp.ab') < 0 && tab[i][3].indexOf('klaus pattberg')) summe += betrag;
        tab[i][6] = parseInt(summe);     // aufsummieren ausse ingeborg patt oder klaus pattSumme im Jahr oder 



        monthold = month;



        tz += '<tr' + bgc + '>';


        tab[i][7] = aday;
        if (aday >= doyt) summerest += betrag;
        tab[i][8] = parseInt(summerest);

        //       tab[i][9]=doyt;
        //			ausgabe der Tabellenzeile



        for (var x in tab[i]) {
            y = tab[i][x];
            var pos = ' align=left '; // bgcolor=#ffffff  ';
            var bgcolor = '';
            var onclick = '';
            if (x == datespalte) {

                bgcolor = ' bgcolor=#f0f0f0 ';  // dunkelblau
                if (aday <= doyt) bgcolor = ' bgcolor=#c0c0ff ';
            }
            var ind = tab[i][3];     // Kunde
            //  if (x==8) y=indexao[ind];


            //  betrag einf?rben
            if (x == betspalte || x == 6 || x == 5 || x == 1 || x == 8) {
                betrag = y;
                if (x == 6) betrag = y;
                if (x == 5) betrag = y;
                if (x == 1) betrag = y;
                pos = ' align=right ';
                onclick = 'title=\'anzeige\' ' + ' onclick=\'showbetrag(' + betrag + ',' + tab[i][9] + ',event )\' ';
                if (y > 0) bgcolor = ' bgcolor=#e0ffe0  ';
                if (y > 100) bgcolor = ' bgcolor=#80ff80  ';
                if (y > 500) bgcolor = ' bgcolor=#40ff40  ';
                if (y < 0) bgcolor = ' bgcolor=#ffe0e0 ';
                if (y < -100) bgcolor = ' bgcolor=#ff8080 ';
                if (y < -500) bgcolor = ' bgcolor=#ff4040 ';
                if (y < -990) bgcolor = ' bgcolor=#ff0000 ';
                if (x == 1) bgcolor = ' ';
            }


            //          kunde besetzen
            if (x == 3 || x == 4) {
                bgcolor = ' bgcolor=#c0c0ff';
                onclick = ' onclick=\'setzeao(\"' + tab[i][x] + '\" )\' ';


                //             if (i%2==0) bgcolor=' bgcolor=#e0e0e0';
                //             tz+='<td'  + pos + bgcolor + onclick + '  >' + y + '</td>';

            }

            tz += '<td' + pos + bgcolor + onclick + '  >' + y + '</td>';

        }
        tz += '</tr>';

        tzt.push(tz);
    } // alle Zeilen


    if (document.getElementById('newest').checked) tzt.reverse();

    for (i in tzt) {
        if (i % 8 == 0) text += headline;
        text += tzt[i];
    }




    text += '</table>';
    return text;
}



function tabout() {
    this.text = '<table border=4 bgcolor=#ff8080 >';

    this.tabs = function (name, wert) {
        this.text += '<tr><td>' + name + '</td><td>' + wert + '</tr>';
        return;
    }
    this.tabend = function () {
        this.text += '</table';
        return this.text;
    }
}







function onmouseov() {
    a1 = document.getElementById('click');
    a1.innerHTML = "<table border=1><tr><td id='td'><div onclick='onclick1(\"1div1\")' id='1div1'>wert</div></td></tr></table>";
    a2 = document.getElementById('1div1');
    alert(a2.innerHTML);


    alert('win' + window.winc1);
    winc1.push('jj');
    var test = 'test ' + winc1;
    alert('winc' + winc1);

}



function onmouseov1() {
    {
        winc1.push('open');
        var test = 'test ' + winc1;
        //   	win=window.open("","test","width=200,height=400,left=-100,status=yes");
        var btn = document.createElement("BUTTON");        // Create a <button> element
        var t = document.createTextNode("CLICK ME" + test);       // Create a text node
        btn.appendChild(t);
        win = 1;
        //	win.document.body.appendChild(btn);
        window.devicePixelRatio = 0.400000011920929;
        // Append the text to <button>
        document.write('name:' + 'neu' + ' value: ' + "<br>");
        alert('win' + window.winc1);
        alert('winc' + winc1);

        //    alert (win.document.innerHtml);
        return false;
    }
    //    alert (win + 'vor close');

}

function onmouseov2() {
    if (typeof win === 'undefined') {
        winc1.push('open');
        var test = 'test ' + winc1;
        //   	win=window.open("","test","width=200,height=400,left=-100,status=yes");
        var btn = document.createElement("BUTTON");        // Create a <button> element
        var t = document.createTextNode("CLICK ME" + test);       // Create a text node
        btn.appendChild(t);
        win = 1;
        //	win.document.body.appendChild(btn);
        window.devicePixelRatio = 0.400000011920929;
        // Append the text to <button>
        for (i in window) 'obj:' + i + 'value:' + document.write('name:' + i + ' value: ' + window[i] + "<br>");
        alert('win' + window.winc1);
        alert('winc' + winc1);

        //    alert (win.document.innerHtml);
        return false;
    }
    //    alert (win + 'vor close');

    if (win) {
        alert('close:' + winc1);
        win.close();
        delete win;
        winc1.push('close');
    }
}


function onmouseou() {
    if (win) {
        //       alert ('close');
        win.close();
        delete win;
    }
}


function process() {
    AAA = '5';
    var ctrl = document.getElementById('textarea');
    setCaretPosition(ctrl);
    return false;
}

function tree1(ev, element) {

    if (ev.keyCode != 13) return true;

    var a1 = document.getElementById(element);
    if (!a1) alert('kein element' + element);
    alert('len:' + a1.length);

    var a2 = document.getElementById('demo');
    if (!a2) alert('kein element demo');
    var out = "<table border=1><tr><th>" + element + "</th</tr>";

    for (var v1 in a1) {
        out += '<tr><td>' + v1 + '</td><td>' + a1[v1] + '</td></tr>';
    }
    a2.innerHTML = out;
    return false;

}


function svgn(width, height, id) {
    alert(id);
    this.count = 0;
    this.outval = '<svg width=' + width + ' height=' + height + '>';
    this.outval += "<rect x=0 y=0 width=" + width + ' height=' + height + " stroke='green'  fill='yellow' /> ";
    this.outval += "<rect x=10 y=10 width=30 height=40  stroke='black'  fill='red' /></svg> ";
    tag = document.getElementById(id);
    tag.innerHTML = this.outval;


    this.out = function (value) {
        this.outval += "<rect x1=10 y1=10 x2=30 y2=40 fill='blue' /></svg> ";
    }

    this.end = function (value) {
        alert('end');
        tag = document.getElementById('svgn');
        tag.innerHTML = this.outval + '</svg>';
    }

}


function svgstart() {
    this.asvg = new svg();
    return;
}


function svg(width, height) {
    function drawkoorsys(wi, he) {

        var het = he;
        var wit = wi;
        var hea = 0;
        var wia = 0;
        var hee = he - hea;
        var wie = wi - wia;
        var out = '';

        //      senkrechter null linien
        var points = '<polyline  fill=#ffffff  stroke="red" stroke-width="2px" ';

        points += ' points="' + 0 + ' ' + 0 + ',';
        points += 0 + ' ' + he + ',';
        points += '" />';

        //     waagerechte Null-linie
        points += '<polyline  fill=#ffffff  stroke="green" stroke-width="2px" ';
        points += ' points="' + 0 + ' ' + 0 + ',';
        points += wi + ' ' + 0;
        points += '" />';



        var month = 12;
        var div = (wi / month);
        for (var i = 1; i <= 12; i++) {
            points += '<polyline  fill=#ffffff  stroke="grey" transparency=0.5 stroke-width="1px" ';
            diff = parseInt(div * i)
            points += ' points="' + diff + ' ' + 0 + ',';

            points += diff + ' ' + he;
            points += '" />';

        }

        points += '<polyline  fill=#ffffff  stroke="red" transparency=0.9 stroke-width="1px" ';
        points += ' points="' + 0 + ' ' + 0 + ',';

        points += wi + ' ' + he;
        points += '" />';




        //     points=' points="10 10, 50 50, 30 30"  /> ';

        out += points;
        return out;

    }


    function ev(string) {
        for (var i = 0; i < 20; i++) {
            var a1 = string.indexOf('$');
            if (a1 < 0) return string;
            var name = string.substring(a1);
            var a2 = name.search(/[ (),;]/);
            var name = name.substring(1, a2);
            var erg = eval(name);
            string = string.replace('$' + name, erg);
        }
        return string;
    }




    this.width = 600 || width;
    this.height = 600 || height;
    this.ev = ev;
    this.drawkoorsys = drawkoorsys;
    this.out = ev('<svg width=' + this.width + ' height=' + this.height + ' >');

    var a1 = 5;


    a1.innerHTML = '';
    /*
        var width=600;
        var height=200;
    */


    //   this.out+=this.drawkoorsys(this.width,this.height);

    this.out += ' <circle cx="20" cy="20"  r="20" ' +
        ' stroke="green" stroke-width="4" fill="yellow" /> ';

    this.out += '<g transform="translate (10,';
    this.out += this.height - 10;
    this.out += ') scale(1,-1)" >';
    this.out += ' <circle cx="0" cy="0"  r="5" ' +
        ' stroke="green" stroke-width="2" fill="yellow" /> ';

    this.out += this.drawkoorsys(this.width - 10, this.height - 10);
    this.out += '/g>';

    this.out += '   Sorry, your browser does not support inline SVG.  </svg> ';



    a1 = document.getElementById('svg');
    if (!a1) return false;
    a1.innerHTML = this.out;

    a2 = document.getElementById('svgtext');
    a2.innerHTML = htmlEntities(this.out);

    return false;
}


function setCaretPosition(ctrl) {
    var pos = ctrl.textLength - 1;
    AAA = ctrl.textLength;
    if (ctrl.setSelectionRange) {
        AAA = 'set' + ctrl.textLength;
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
        ctrl.focus();
    }
    else if (ctrl.createTextRange) {
        AAA = 'create' + ctrl.textLength;
        var range = ctrl.createTextRange();

        range.collapse(true);

        range.moveEnd('character', pos);
        range.moveStart('character', pos);

        range.select();

    }

}



function sortkeys(sortp, zeilenname) {
    if (!zeilenname) {

        for (var z1 in this.tabelle) {
            break;
        }
    }
    else {
        var z1 = zeilenname;

    }

    var list = Object.keys(this.tabelle[z1]);
    list = ['total', 'y2015', 'y2016', 'y2013'];
    var s1 = list.sort();
    var s2 = list.sort(function (a, b) { return b - a; });
    var s3 = list.reverse;


    if (sortp == 'asc') {
        var sl = list.sort();

    }
    else {
        var sl = list.sort(function (a, b) { return b - a; });

    }
    var sl = list.sort(function (a, b) { return a - b; });
    sl = sl.reverse();

    return list;
}


var tabellec = function (zeilen, spalten) {
    this.sortkeys = sortkeys;
    if (!zeilen) zeilen = [];
    if (!spalten) spalten = [];
    this.zeilen = zeilen;
    this.spalten = spalten;
    this.spaltenliste = {};

    this.tabelle = {};



    for (var i = 0; i < zeilen.length; i++) {
        this.tabelle[zeilen[i]] = {};
        for (var i1 = 0; i1 < spalten.length; i1++) {
            this.tabelle[zeilen[i]][spalten[i1]] = 0;
        }
    }
    var zeilenliste = Object.keys(this.tabelle);

    /////////////////////////////////////////
    ////addiere Werte in Zeile und Spalte
    ///////////////////////////////////////

    this.setspalte = function (zeile, spalte, value) {
        var as = '';
        if (!this.tabelle[zeile]) {
            this.tabelle[zeile] = {};
        }
        if (!this.tabelle[zeile][spalte]) this.tabelle[zeile][spalte] = 0;


        this.tabelle[zeile][spalte] += value;
        this.spaltenliste[spalte] = 1;
        return;
    }

    //////////////////////////////////////////////////
    //  Tabelle setzten in HTML
    ////////////////////////////////////////////////


    this.tohtml = function () {
        var s1 = "<table border=1><tr><th>Z.Nr</th>";
        for (sp in this.spaltenliste) {
            s1 += '<th>' + sp + '</th>';
        }
        s1 += '</tr>';
        var iz = 1;
        for (var zeile in this.tabelle) {
            s1 += '<tr>' + '<td>' + iz++ + '</td>';
            for (var spalte in this.tabelle[zeile]) {
                s1 += '<td>' + this.tabelle[zeile][spalte] + '</td>';
            }
            s1 += '</tr>';
        }
        s1 += '</table>';



        return s1;
    }


}


var Matrix = function (rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.myarray = new Array(this.rows);
    for (var i = 0; i < this.columns; i += 1) {
        this.myarray[i] = new Array(this.rows)
    }
    return this.myarray;
}

Date.prototype.getDOY = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((this - onejan) / 86400000);
}

function setreset(containerid, Atablist, button) {


    if (typeof Acontainer === 'undefined') {
        Acontainer = new Object();
        Acontainer[containerid] = 0;
    }

    var button1 = document.getElementById(button);

    if (Acontainer[containerid] == 1) {
        Acontainer[containerid] = 0;
        var a1 = document.getElementById(containerid);
        button1.style.backgroundColor = 'green';
        a1.innerHTML = "";
    }
    else {
        Acontainer[containerid] = 1;
        var a1 = document.getElementById(containerid);
        button1.style.backgroundColor = 'gray';
        a1.innerHTML = Atablist;
    }

}

function myFunction(xml) {
    this.a2 = 2;
    a1 = 2;
}



function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

}



//////////////////////////////////////////
//   erweitern selectorentabelle
////////////////////////////////////////////


function extendselectorentab(string) {
    var stringarr = string.split(':');
    if (!stringarr[1]) return;     //ohne selector
    var lselectoren = Akonten['selectoren'];
    var ll = lselectoren.length;
    for (var i = 0; i < ll; i++) {
        var name = lselectoren[i].split(':')[0];
        if (name == stringarr[0]) {
            lselectoren[i] = string;
            initab();
            return;
        }
    }
    Akonten['selectoren'].push(string);
    initab();
    return;
}


//////////////////////////////////////////////////////////////////
//  erzeuge Selector-Tabelle
//   mit Anzahl Zeilen pro Selector
//   und Usedlist f?r alle Zeilen
//////////////////////////////////////////////////////////////


function initab(string) {

    if (!string) string = "";     // Tabelle der ausgewaehlten Selectoren


    var selectorliste = Akonten['selectoren'];
    if (!Akonten['ergebnisse']) Akonten['ergebnisse'] = new Object;
    if (!Akonten['usedzeilen']) Akonten['usedzeilen'] = [];
    if (!Akonten['summen']) Akonten['summen'] = {};    // neues Object

    selectorliste.sort();



    var ztab = Akonten['usedzeilen'];
    for (i = 0; i < Akonten.zeilen.length; i++) {
        ztab[i] = '';
    }

    var found = 0;
    var dfound = 0;

    ////////////////////////////////////////////////////////////////
    //  loop ?ber alle Ergebnislisten um die Zeilenliste mit selectoren zu versehen
    //////////////////////////////////////////////////////////////

    for (var plistname in Akonten['ergebnisse']) {
        if (plistname == 'UNUSED') continue;     // f?r standart keine markierung
        if (plistname == 'STANDART') continue;     // f?r standart keine markierung
        var zarr = Akonten['ergebnisse'][plistname];


        ////////////////////////////////////////////////////////
        //      loop ?ber alle Zeilenummern der liste 'plistname
        //////////////////////////////////////////////////////

        for (var iz = 0; iz < zarr.length; iz++) {
            if (!zarr[iz]) {
                continue;
            }
            var izi = zarr[iz];
            if (!ztab[izi]) {
                //            continue;
            }
            if (ztab[izi] != '') dfound++;
            if (plistname == 'UNUSED') continue;
            if (ztab[izi].indexOf(plistname) >= 0) continue;
            ztab[izi] += plistname + ',';
            found++;
        }

    }




    /////////////////////////////////////////////////////////////
    //  erzeuge Tabelle mit allen selectoren
    ////////////////////////////////////////////////////////////


    var st = "<table border=1><tr>" + 'Zeilen:' + Akonten.zeilen.length + " markiert:  " + found + " doppelt: " + dfound + " </tr><tr>";

    var rows = 10;

    for (i = 0; i < selectorliste.length; i++) {
        var inhalt = selectorliste[i].split(':');  //name des Selectors
        var len = 0;
        if (Akonten['ergebnisse'][inhalt[0]]) {
            len = Akonten['ergebnisse'][inhalt[0]].length;
        }

        var title = "title='" + inhalt[1] + "'";
        //       title=htmlEntities(title);
        var bgcolor = "  ";

        if (string.indexOf('+' + inhalt[0]) > 0) bgcolor = " bgcolor=#00ff00 ";
        if (string.indexOf('-' + inhalt[0]) > 0) bgcolor = " bgcolor=#ff0000 ";
        bgcolor = title + bgcolor;
        st += "<td " + bgcolor + " onclick=\"showtab('" + inhalt[0] + "');return; \"> " + inhalt[0] + "<br>" + len + "<br>" + "</td>";
        if ((i + 1) % rows == 0) st += "</tr><tr>";

    }




    st += "<tr>";
    st += "<td   onclick=\"showtab('UNUSED');return; \"> " + 'UNUSED' + "<br>" + len + "<br>" + "</td>";
    st += "<td   onclick=\"showtaballe(' ');return; \"> " + 'ALLE' + "<br>" + len + "<br>" + "</td>";
    st += "<td " + bgcolor + " onclick=\"showtab('" + 'UNUSED' + "');return; \"> " + 'UNUSED' + "<br>" + len + "<br>" + "</td>";
    st += "</tr>";



    st += "</tr></table>";
    var a1 = document.getElementById('selectortable');



    a1.innerHTML = st;


}

////////////////////////////////////////////////////////
//  alle selectoren berechnen
////////////////////////////////////////////////////////

function showtaballe(selector) {
    var selectorliste = Akonten['selectoren'];
    for (var i = 0; i < selectorliste.length; i++) {
        var search = new searchbystring(selectorliste[i]);
        erg = new auswertenzeilenliste(search, 50);             // max zeilen
    }

    showtabellen(erg);

    initab();

}

function showtabellen(erg) {
    a1 = document.getElementById('t2');
    var output = erg.tabellejahre + erg.tabelleerg + erg.tabelle;
    a1.innerHTML = output;

}

///////////////////////////////////////////////
//  wird beim Click auf einen Selector aufgerufen
//////////////////////////////////////////////


function showtab(selector) {

    var tabelle = new tabellec();
    tabelle.setspalte('z+', '2016', 10);
    tabelle.setspalte('z-', '2016', 11);
    tabelle.setspalte('z+', '2015', 12);

    var s1 = tabelle.tohtml();
    var a1 = document.getElementById('t3');
    a1.innerHTML = s1;

    var l1 = tabelle.sortkeys('asc');
    var l2 = tabelle.sortkeys('desc');
    var selectorenliste = Akonten['selectoren'];

    for (var i = 0; i < selectorenliste.length; i++) {
        var inhalt = selectorenliste[i].split(':');

        /////////////////////////////////////////////////
        //     selector == uebergabeselctor ?

        if (inhalt[0] == selector)    // selector in Liste gefunden
        {
            var a1 = document.getElementById('search_0');  // Eingabe-Feld
            a1.value = inhalt[0] + ':' + inhalt[1];         // anzeige in Edit-Line
            var search = new searchbystring(selectorenliste[i]); // parameter = <name:auswahlstring>
            initab(inhalt[1]);
            var erg = new auswertenzeilenliste(search, 5000)             // max zeilen
            showtabellen(erg);
            break;
        }
    }


}





////////////////////////////////////////////////////////////
//      ajax-aufruf zum kontostore mit 'GET'-String ustr
/////////////////////////////////////////////////////////////

function loadDoc(ustr) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            myFunction(xhttp);
        }
    }
    ustr = ustr.replace(/\+/g, '%2B');
    ustr = htmlEntities(ustr);



    xhttp.open("GET", "kontostore.php?" + ustr, true);
    xhttp.send();
    return ustr;
}


//////////////////////////////////////////////////////////
//  search-aufruf im Input-String
//////////////////////////////////////////////////////////


function search(event, id) {

    try {

        var idp = document.getElementById(id);    // Eingabe-Feld


        var a1 = document.getElementById('id_keystroke');

        if (a1) {
            a1.innerHTML = event.keyCode + "<br>";  // Anzeige keystrokes
        }


        var string = idp.value;                   // Eingabe string

        var char = String.fromCharCode(event.keyCode); // wandelt z.B 52=hex34  in '4'
        //    stringkey+=event.type +"/" + char + "/Str:" + string +  ' Erg:' + textposition.text +"<br>";


        if (event.type == 'keypress' && event.keyCode != 13) return true; // Key wurde gedr?ckt aber noch nicht ins Feld ?bertragen
        string.toUpperCase();
        var search = new searchbystring(string);
        var a1 = document.getElementById('t2');

        if (event.keyCode == 13) {

            if (search.ustr.indexOf('=') > 0) ustr = loadDoc(search.ustr);
            extendselectorentab(string);     // erweitern selectorliste
            initab(string);
            erg = new auswertenzeilenliste(search, 5000);

            showtabellen(erg);

            return false;
        }

        erg = new auswertenzeilenliste(search, 40);
        showtabellen(erg);


        return true;
    }
    catch (err) {
        a1 = document.getElementById("status");
        a1.innerHTML = "<h3>" + err.message + "</h3>";
        return false;

    }
    return false;
}


//////////////////////////////////////////////////////////
//  extrahiere + und - selectoren aus dem Suchstring
//  in ret['mtab'] und ret['ptab']
//////////////////////////////////////////////////////////

function selectorextract(string) {
    this.string = string;
    this.mtab = [];
    this.ptab = [];
    this.selectortab = {};



    var pos = string.indexOf('-');
    var pos1 = string.indexOf('+');
    if (pos1 < 0 && pos < 0) {
        this.string = string;
    }

    if (pos < 0) pos = string.length;
    if (pos1 < 0) pos1 = string.length;
    pos = Math.min(pos1, pos);

    selstring = string.substring(pos);
    this.string = string.substring(0, pos);


    for (var i = 0; i < selstring.length; i++) {
        var ff = 0;
        if (selstring.charAt(i) == '+') ff = 1;
        if (selstring.charAt(i) == '-') ff = 2;

        if (ff == 0) continue;
        var selector = "";
        for (var i1 = i + 1; i1 < selstring.length; i1++) {
            if (selstring.charAt(i1) == '+') break;
            if (selstring.charAt(i1) == '-') break;
            selector += selstring.charAt(i1);
        }
        i = i1 - 1;

        selector = selector.replace(' ', '');

        this.selectortab[selector] = 1;

        if (ff == 1) this.ptab.push(selector);
        if (ff == 2) this.mtab.push(selector);

    }

}








function searchbystring(string) {



    this.matches = 0;


    //   string=string +  String.fromCharCode(event.keyCode);

    string = string.toUpperCase();
    this.minvalue = 11;
    this.maxvalue = 2500;
    var stringarr = string.split(' ');
    for (var i = 0; i < stringarr.length; i++) {

        var tstring = stringarr[i];
        var tdate = tstring.split('.');
        jetzt = new Date();
        tdate[0] = tdate[0].substring(1);   // extarhiere 1. char = vergleichsoperator
        if (!tdate[0]) tdate[0] = jetzt.getFullYear();
        if (!tdate[1]) tdate[1] = jetzt.getMonth() + 1;
        if (!tdate[2]) tdate[2] = jetzt.getDate() + 1;

        if (tstring[0] == '<') {
            this.mindate = tdate;

            this.minvalue = tstring.substring(1);
            stringarr[i] = '';
            continue;
        }

        if (tstring[0] == '>') {
            this.maxvalue = tstring.substring(1);
            stringarr[i] = '';
            continue;
        }
    }
    string = stringarr.join(' ');



    var a1 = document.getElementById('id_matches');
    a1.innerHTML = "<I>matches 0<br>";
    var a1 = document.getElementById('id_search');

    // trenne namen vom suchstring 'bar:jj kk'
    var stringarr = string.split(':');
    if (!stringarr[1]) stringarr.splice(0, 0, '');

    if (a1) a1.innerHTML = "<h2>Suchstring " + string + ' Min:' + this.minvalue + ' Max: '
        + this.maxvalue + ' Date:' + this.mindate + "</h2><br>";


    this.ustr = stringarr[0] + '=' + stringarr[1];
    this.selector = stringarr[0];
    this.sret = new selectorextract(stringarr[1]); // extrahiere -<name>+<name>


    iz = 0;




    var oderstringarr = this.sret.string.split('|');

    var oderstring = oderstringarr.join();
    if (oderstring == '' || oderstring == ' ') oderstringarr[0] = 'kyz';

    var a1 = document.getElementById('id_search');

    if (a1) a1.innerHTML += "<I>oderstring " + oderstringarr + ' mtab:' + this.sret['mtab'] + ' ptab:' + this.sret['ptab'] + "<br>";

    this.konto = Akonten['zeilen'];

    //      sorttabelle(konto,1,'')

    this.zeilenliste = [];

    for (var i = 0; i < this.konto.length; i++) {
        var zeile = this.konto[i];
        var tbze = zeile.split(';');
        var value = parseInt(tbze[2]);    // wert der Zeile
        var date = tbze[1];    // datum der Zeile
        var datearr = date.split('.');



        if (Math.abs(value) > this.maxvalue) continue;
        if (Math.abs(value) < this.minvalue) continue;




        //         loop ?ber mehrere ODER Strings
        for (var os = 0; os < oderstringarr.length; os++) {
            var pos = 0;
            var str = oderstringarr[os];
            var stringarrs = str.split(' ');
            var tand = false;
            var posi = stringarrs[0].indexOf('>');  // suche vergleichsopeartor
            if (posi >= 0) {
                vwert = stringarrs[0].substring(posi + 1);
                if (Math.abs(value) > parseInt(vwert)) {
                    tand = true;
                    break;
                }


            }
            var posi = stringarrs[0].indexOf('<');  // suche vergleichsopeartor
            if (posi >= 0) {
                vwert = stringarrs[0].substring(posi + 1);
                if (Math.abs(value) < parseInt(vwert)) {
                    tand = true;
                    break;
                }


            }

            //               Loop ?ber mehrere UND strings innerhalb eines ODER-Strings

            for (var is = 0; is < stringarrs.length; is++) {

                var sstring = stringarrs[is];



                var notc = sstring[0];
                if (notc == '!') sstring = sstring.substr(1);

                var posn = zeile.indexOf(sstring, pos);
                if (notc == '!' && posn >= 0) {
                    posn = -1;
                }

                else if (notc == '!' && posn < 0) {
                    posn = 1;
                }

                if (posn >= 0) {
                    pos = pos + posn;
                    if (is == stringarrs.length - 1)  // letzter Suchstrine dann sucess
                    {
                        tand = true;
                        break;
                    }

                }


                else {
                    tand = false;
                    break;   // unsucessfull
                }

            }   // ende Loop ?ber mehrere 'und' Strings

            if (tand == true) break;

        }  // ende loop ?ber mehrere 'oder' strings

        if (tand) {
            this.matches++;
            this.zeilenliste.push(i);

        }
        if (string.length < 3 && this.zeilenliste.length > 100) break;

    }    // ende loop datenzeilen

    ///////////////////////////////////////////////////////
    //  abspeichern bei key-code 13
    ////////////////////////////////////////////////////////


    for (var i = 0; i < this.sret.ptab.length; i++) {
        var sname = this.sret.ptab[i];
        var tab = Akonten['ergebnisse'][sname];
        this.zeilenliste = this.zeilenliste.concat(Akonten['ergebnisse'][sname]);

    }
    for (var i = 0; i < this.sret.mtab.length; i++) {
        var sname = this.sret.mtab[i];
        var tab = Akonten['ergebnisse'][sname];
        if (tab) this.zeilenliste = arrayminus(this.zeilenliste, tab);

    }
    this.sret.selectortab[stringarr[0]] = 1;
    this.zeilenliste = arrayextract(this.zeilenliste);
    this.zeilenliste = this.zeilenliste.sort(function (a, b) { return a - b });
    Akonten['ergebnisse'][stringarr[0]] = this.zeilenliste;    // Abspeichern Ergebnisse Zielenlisten

}       // ende search


function ergebnisjahre(selectortab) {

    var st = "<table border=1>" + "<tr><th colspan=200 align=left >Egebnisse ?ber Jahre und Selectoren</th></tr> <tr><th>selector</th>";
    var head = [];
    for (var y = 2016; y > 2000; y--) {
        var hd = 'y' + y;
        head.push(hd);
        st += "<th>" + hd + "</th>";
    }







    st += "</tr><tr>";
    for (var sel in Akonten['ergebnisjahre']) {
        var sellist = Akonten['ergebnisjahre'][sel];
        if (selectortab) {
            if (!selectortab[sel]) continue;

        }

        st += "<tr><td>" + sel + "</td>";

        for (var i = 0; i < head.length; i++) {
            var yname = head[i];

            var erg = ' ';
            if (sellist[yname]) erg = sellist[yname];
            st += "<td>" + erg + "</td>";
        }
        st += "</tr>";
    }
    st += "</table>";
    this.tabelle = st;
}










function auswertenzeilenliste(search, maxzeilen) {
    var zeilenliste = search.zeilenliste;

    if (!maxzeilen) maxzeilen = 100;

    var param = new parameter(search.selector);


    var tabellen = new createtabelle(search, maxzeilen, param);    // abarbeiten der Zeileliste >> Tabelle + param

    var tabelle = tabellen.tabelle;

    param = tabellen.param;
    ////////////////////////////////////////////////////////
    //  Tabbele erzeugen f?r Ergebnisse in PARAM
    //////////////////////////////////////////////////////


    var jetzt = new Date();


    var year = jetzt.getFullYear();
    var month = jetzt.getMonth() + 1;
    var day = jetzt.getDate();
    var sec = jetzt.getSeconds();
    var min = jetzt.getMinutes();
    var ms = jetzt.getMilliseconds();
    var difms = ms - param.startms;

    var tabelleerg = '';



    ////////////////////////////////
    ////////PARAM Tabelle ausgeben
    ///////////////////////////////////////
    tt = '<table border=1><tr><th> </th>';

    var listy = Object.keys(param.tabelle['total']);
    listy.sort();
    listy.reverse();

    for (var i = 0; i < listy.length; i++) {

        var y = listy[i];
        tt += '<th>' + y + '</th>';
    }
    tt += '</tr>';



    for (zeile in param.tabelle) {
        tt += '<tr><td>' + zeile + '</td>';

        for (var i = 0; i < listy.length; i++) {
            y = listy[i];
            //           for (y in param.tabelle[zeile])
            tt += "<td>" + param.tabelle[zeile][y] + '</td>';
        }
        tt += "</tr>";
    }
    tt += '</table>';


    /////////////////////////////////////////////////////


    tabelleerg += tt;










    this.tabelleerg = tabelleerg;
    this.tabelle = tabelle;
    var a1 = document.getElementById('id_matches');

    a1.innerHTML = "<I>MATCHES: " + search.matches + " Laenge Tabelle " + tabelle.length + "<br>";

    //////////////////////////////////////////////////////
    // ergebnisse ?ber Selectoren und Jahre
    //////////////////////////////////////////////////////

    var ergjahre = new ergebnisjahre(search.sret.selectortab);
    this.tabellejahre = ergjahre['tabelle'];




    //    canvas(param);



}



function arrayminus(arr, arrmin) {
    var len = arrmin.length;
    for (var i = 0; i < len; i++) {

        var index = arr.indexOf(arrmin[i]);
        if (index > -1) {

            arr.splice(index, 1);
        }
    }


    return arr;

}
function arrayextract(arr) {
    var i = 0;
    var arr1 = arr.sort();
    var len = arr1.length;
    var arrneu = [];
    arrneu[0] = arr1[0];
    for (var i = 1; i < len; i++) {
        if (arr1[i] == arr1[i - 1]) continue;
        arrneu.push(arr1[i]);
    }


    return arrneu;

}


/////////////////////////////////////////////////////////////
//  erzeuge Tabelle aus Zeilenliste
////////////////////////////////////////////////////////////
function createtabelle(search, maxzeilen, param) {
    var zeilenliste = search.zeilenliste;
    this.param = param;
    this.zeilen = Akonten['zeilen'];
    this.headline = Akonten['headline'];
    this.headline = this.headline.split(';');
    if (!maxzeilen) maxzeilen = 105
    this.tabelle = "<table style='border:1px solid black; background-color:#f8f8f8; empty-cells:show;' > ";
    this.tabelle += "<style type='text/css'>td { border:thin solid black; } th { border:thin solid red; }  </style>";
    this.headzeile = "<tr> <th>s</th><th>s+</th><th>s-</th><th>days</th><th>SEL</th>";

    this.param.use = [];
    param.vwza = 0;
    for (var i = 0; i < this.headline.length; i++) {
        if (this.headline[i].indexOf('VWZ') == 0) {
            if (param.vwza == 0) {
                param.vwza = i;
                param.vwze = i;
            }
            param.vwze = i;
        }
        this.param.use.push(i);
        this.headzeile += '<th>' + this.headline[i] + "</th>";



    }
    this.headzeile += '</tr>';
    ///////////////////////////////////////////////////////////
    //      loop ?ber alle Zeilen
    ////////////////////////////////////////////////////////////
    for (var i = 0; i < zeilenliste.length; i++) {

        this.iz = zeilenliste[i];
        if (this.iz === undefined) continue;

        var zeile = this.zeilen[this.iz];
        if (!zeile) continue;

        var zeile2 = this.zeilen[zeilenliste[i + 1]];
        if (!zeile2) zeile2 = zeile;
        tabz = tabzeile(zeile, this.param, this.iz, zeile2);        // erzeugen einer Tabelenzeile Eintragen der Ergebnisse in

        if (i > maxzeilen) continue;
        if (tabz != '') {
            if (i % 20 == 0) this.tabelle += this.headzeile;        // Headzeilen einblenden
        }
        this.tabelle += tabz;

    }
    this.tabelle += "</table>";





    //        document.getElementById('t0').innerHTML= this.tabelle;


}

function parameter(selector) {
    this.tabelle = {};
    this.zeilen = ['total', 'total+', 'total-', 'totaltj+', 'totaltj-'];


    //      erzeuge Object Tabelle

    this.spalten = ['total', 'y2015'];

    this.crtab = function (tabelle, zeilen, spalten) {

        for (var i = 0; i < zeilen.length; i++) {
            if (!tabelle[zeilen[i]]) tabelle[zeilen[i]] = {};
        }
        for (var zeile in tabelle) {
            for (var i1 = 0; i1 < spalten.length; i1++) {
                var spalte = spalten[i1];
                if (!tabelle[zeile][spalten[i1]]) { tabelle[zeile][spalten[i1]] = 0; }
            }
        }
    }
    this.addtab = function (tabelle, zeilen, spalten, y) {
        if (spalten.indexOf(y) >= 0) return;
        spalten.push(y);
        this.crtab(tabelle, zeilen, spalten);


    }


    this.crtab(this.tabelle, this.zeilen, this.spalten);
    this.addtab(this.tabelle, this.zeilen, this.spalten, 'y2014');

    if (!selector) selector = 'selector fehlt';
    this.selector = selector;
    if (!Akonten['ergebnisjahre']) Akonten['ergebnisjahre'] = {};
    if (!Akonten['ergebnisjahre'][selector]) Akonten['ergebnisjahre'][selector] = {};
    this.ergebnisse = Akonten['ergebnisjahre'][selector];

    this.min = 0;

    this.max = 0;
    this.year = [];
    this.day = [];
    this.betrag = [];
    this.minscale = 5;
    this.maxscale = 6;
    this.summe = 0;
    this.summep = 0;
    this.summem = 0;

    this.summeunusedp = 0;
    this.summeunusedm = 0;

    this.datenr = Akonten['head']['DATUM'];   // index von datum in sparkassen-zeile
    this.wertnr = Akonten['head']['WERT'];
    this.saldonr = Akonten['head']['SALDO'];
    this.jetzt = new Date();
    this.startms = this.jetzt.getMilliseconds();
    this.dayofyear = this.jetzt.getMonth() * 30 + this.jetzt.getDate();
    this.dayofyear = this.jetzt.getDOY();




}



////////////////////////////////////////////////
//  Auswerten einer Zeile
/////////////////////////////////////////////////


function tabzeile(zeile, p, iz, zeile2) {

    var line = zeile.split(';');
    var line2 = zeile2.split(';');

    var ztab = Akonten['usedzeilen'];
    // aktuelle Zeile
    p.datum = line[p.datenr];
    var datearr = p.datum.split('.');
    var datebin = new Date(datearr[0], datearr[1] - 1, datearr[2], 2);  // year,month day
    p.daytotal = datebin / 24 / 3600 / 1000;
    var dayofyear = datebin.getDOY();     // GET DAY OF YEAR
    // vorgaengerzeile
    p.datum2 = line2[p.datenr];
    var datearr1 = p.datum2.split('.');
    var datebin = new Date(datearr1[0], datearr1[1] - 1, datearr1[2], 2);  // year,month day
    p.daytotalold = datebin / 24 / 3600 / 1000;



    p.wert = line[p.wertnr];
    p.saldo = line[p.saldonr];



    if (!p.daytotalold) p.daytotalold = 0;
    var diffday = parseInt(p.daytotal - p.daytotalold);
    p.jahr = parseInt(datearr[0]);
    p.monat = parseInt(datearr[1] - 1);
    p.tag = parseInt(datearr[2] - 1);

    var h = 30 * (parseInt(p.monat) - 1);
    //   var dayofyear=datebin.getDOY();     // GET DAY OF YEAR

    p.min = Math.min(p.min, p.wert);
    p.max = Math.max(p.max, p.wert);
    p.day.push(datearr[2] + (datearr[1] - 1) * 30);
    p.year.push(datearr[0]);
    p.betrag.push(p.wert);


    var erg = '<tr>';
    var selectorlist = ztab[iz];


    //  ueberpruefe ob f?r Zeile ein Selector definiert ist, wenn nicht summiere + und - Werte
    var value = parseInt(p.wert);


    p.summe += value;
    if (value > 0) {
        p.summep += value;
    } else p.summem += value;


    erg += "<td align=left>" + p.summe + "</td> ";
    erg += "<td align=left>" + p.summep + "</td> ";
    erg += "<td align=left>" + p.summem + "</td> ";
    erg += "<td align=left>" + diffday + "</td> ";

    if (selectorlist == '') {
        if (p.wert > 0) p.summeunusedp += value;
        if (p.wert < 0) p.summeunusedm += value;
        erg += "<td align=left >" + "<table><tr><td>" + p.wert + "</td><td>" + p.summeunusedp + "</td><td>" + p.summeunusedm + "</td></tr></table> </td>";
    }
    else {
        erg += "<td align=left >" + ztab[iz] + "</td>";   // Liste der selectoren
    }


    // Tabellenzeile ?ber Kontozeile


    for (i = 0; i < line.length; i++) {
        zz = "";


        if (i == p.wertnr) {
            line[i] = parseInt(line[i]);
            if (p.wert > 0) zz = " bgcolor=#c0ffc0 ";
            if (p.wert > 100) zz = " bgcolor=#80ff80 ";
            if (p.wert > 300) zz = " bgcolor=#00ff00 ";
            if (p.wert < 0) zz = " bgcolor=#ffc0c0";
            if (p.wert < -100) zz = " bgcolor=#ff8080 ";
            if (p.wert < -500) zz = " bgcolor=#ff0000 ";
            zz += ' align=right '
        }


        erg += '<td' + zz + '>' + line[i] + '</td>';
    }
    erg += '</tr>';


    if (p.selector == 'UNUSED' && selectorlist != '') return '';

    var y = 'y' + p.jahr;


    p.addtab(p.tabelle, p.zeilen, p.spalten, y);


    p.tabelle['total']['total'] += value;
    p.tabelle['total'][y] += value;
    p.ergebnisse[y] = p.tabelle['total'][y];


    var valuep = Math.max(value, 0);
    var valuem = Math.min(value, 0);
    var valuetj = value;
    var valuetjp = valuep;
    var valuetjm = valuem;
    if (dayofyear > p.dayofyear) {
        valuetj = 0;
        valuetjp = 0;
        valuetjm = 0;
    }

    //////////////////////////////////////////////////////
    //  loop ?? tabellenzeilen
    /////////////////////////////////////////////////////

    for (var i = 0; i < p.zeilen.length; i++) {

        var zeile = p.zeilen[i];


        if (zeile.indexOf('tj') < 0) {
            if (zeile.indexOf('+') > 0) {
                p.tabelle[zeile][y] += valuep;
                p.tabelle[zeile]['total'] += valuep;
            }
            else if (zeile.indexOf('-') > 0) {
                p.tabelle[zeile][y] += valuem;
                p.tabelle[zeile]['total'] += valuem;

            }

        }
        else        // Teiljahr
        {
            if (zeile.indexOf('+') > 0) {
                p.tabelle[zeile][y] += valuetjp;
                p.tabelle[zeile]['total'] += valuetjp;
            }
            else if (zeile.indexOf('-') > 0) {
                p.tabelle[zeile][y] += valuetjm;
                p.tabelle[zeile]['total'] += valuetjm;
            }


        }



    }








    p.wert = parseInt(p.wert);



    var betragvjahr = 0;
    if (p.tag - 1 <= p.dayofyear) {
        betragvjahr = p.wert;
    }




    return erg;





}







function canvasc() {

    document.getElementById('canvasc').innerHTML = "<canvas id='canvas2' width='1000' height='1200' style='border:1px solid #000000;' ></canvas>";
}


function canvas(parameter, year) {

    if (typeof document.getElementById('canvas') === 'undefined')
        try {
            if (Acan) {
            }
        }
        catch (e) {
            Acan = new Object();
            Acan.colors = ['rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)', 'rgb(255,255,0)', 'rgb(255,0,255)', 'rgb(0,255,255)', 'rgb(255,128,0)', 'rgb(255,128,128)'];
            Acan.ic = 0;
            Acan.ys = 0;
            Acan.ykom = 0;
            s = 5;
        }
    Acan.canvas = mycanvas;

    parameter = parameter || 'delete';

    if (parameter == 'delete') {
        canvasdelete(Acan);
        return;
    }

    year = year || 'total';

    if (mycanvas.tabelle) {
        if (mycanvas.tabelle != parameter.tabelle) canvasdelete(Acan);
    }


    mycanvas.tabelle = parameter.tabelle;

    var ctx = mycanvas.getContext("2d");


    ctx.save();
    drawyear(Acan, parameter, year);
    ctx.restore();
    return;
}

function canvasdelete(Acan) {

    var mycanvas = Acan.canvas;
    var ctx = mycanvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    ctx.fillStyle = "#00000000";
    ctx.font = "18px Arial";
    //    ctx.fillText('deleted',100,100);
    ctx.beginPath();
    Acan.ykom = 25;
    Acan.ic = 0;
    Acan.ys = 0;
    return;


}




function drawyear(Acan, parameter, year) {

    mycanvas = Acan.canvas;

    // Use the identity matrix while clearing the canvas

    var ctx = mycanvas.getContext("2d");

    ctx.fillStyle = "#00000000";
    ctx.font = "20px Arial";



    var abstandxl = 110;
    var abstandxr = 110;
    var abstandyo = 40;
    var abstandyu = 40;

    ctx.fillText(parameter.tabelle, abstandxl, 20);


    ctx.font = "20px Arial";



    var breite = mycanvas.width - abstandxl - abstandxr;
    var hoehe = mycanvas.height - abstandyo - abstandyu;

    ctx.translate(abstandxl, abstandyo);



    ctx.rect(0, 0, breite, hoehe);
    ctx.stroke();



    gesamtwerte = parameter.min + parameter.max;


    Acan.ys = parameter.max / gesamtwerte * hoehe;    // Nulllinie

    yfak = hoehe / gesamtwerte;



    var xe = breite;

    var tagbr = (breite) / 365;
    var tagho = (hoehe) / 1000;

    var month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    var monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 30];
    xb = 0;

    ctx.beginPath();
    ctx.moveTo(0, Acan.ys);       // Nullinie
    ctx.lineTo(breite, Acan.ys);
    ctx.stroke();
    var anzahl = Math.min(hoehe / 60, 10);
    if (parameter.min / parameter.minscale < anzahl) parameter.minscale = parameter.minscale / 2;
    if (parameter.min / parameter.minscale < anzahl) parameter.minscale = parameter.minscale / 2;
    if (parameter.max / parameter.maxscale < anzahl) parameter.maxscale = parameter.maxscale / 2;
    if (parameter.max / parameter.maxscale < anzahl) parameter.maxscale = parameter.maxscale / 2;


    for (var i = 1; i < 20; i++) {
        var y = i * parameter.minscale;
        if (y < parameter.min) {
            var yl = y * yfak + Acan.ys;
            ctx.moveTo(0, yl);
            ctx.lineTo(breite, yl);
            ctx.fillText(y, -30, yl);
        }
        y = i * parameter.maxscale;

        if (y < parameter.max) {
            yl = -y * yfak + Acan.ys;
            ctx.moveTo(0, yl);

            ctx.lineTo(breite, yl);
            ctx.fillText(y, -30, yl);




        }

    }
    ctx.stroke();



    for (var i = 0; i < 12; i++) {
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.beginPath();
        ctx.moveTo(xb, 0);
        ctx.lineTo(xb, hoehe);
        ctx.stroke();




        ctx.fillText(month[i], xb, Acan.ys);



        xb += monthdays[i] * tagbr;

    }




    ctx.translate(0, Acan.ys);

    Acan.ykom += 25;




    vold = 0;
    var anzahl = parameter.year.length;


    var xa = 0;
    var ya = 0;
    summe = 0;
    var col = Acan.colors[Acan.ic++ % 8];
    var yearold = 0;  // year
    var yearak = 0;
    for (i = 0; i < anzahl; i++) {

        yar = parameter.year[i];  // year
        ctx.strokeStyle = col;
        ctx.fillStyle = col;


        if (yar != year && year != 'total') continue;
        yearak = yar;
        var xb = parameter.day[i] * tagbr;  // tag

        if (yearak != yearold && yearold != 0) {
            var col = Acan.colors[Acan.ic++ % 8];
            ctx.beginPath();
            ctx.lineTo(breite, yb);
            ctx.stroke();
            ctx.fillText(Math.floor(summe) + '/' + yearold, breite, Acan.ykom - Acan.ys);
            Acan.ykom += 25;

            ctx.strokeStyle = col;
            ctx.fillStyle = col;
            xa = 0;
            ya = 0;
            summe = 0;
        }
        betrag = - parameter.betrag[i];
        summe += betrag;
        var yb = ya + betrag * yfak;

        ctx.beginPath();
        ctx.moveTo(xa, ya);

        ctx.lineTo(xb, ya);
        ctx.lineTo(xb, yb);
        ctx.stroke();
        xa = xb;
        ya = yb;
        yearold = yearak;

    }


    if (xa > 0) {
        ctx.lineTo(breite, yb);
        ctx.stroke();

        ctx.fillText(Math.floor(summe) + '/' + yearak, breite, Acan.ykom - Acan.ys);
        Acan.ykom += 25;
        Acan.ic++;
    }



    //        ctx.fillRect(0, 0, 80, 80);

    return;

}

function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}


function showHint(str) {
    if (str.length == 0) {
        document.getElementById("t2").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("t2").innerHTML = xmlhttp.responseText;
            }
            else {
                document.getElementById("t2").innerHTML = 'fehler ' + xmlhttp.readyState + ' status:' + xmlhttp.status + xmlhttp.responseText;
            }



        }


        xmlhttp.open("GET", "showajaxrequest.php", true);
        xmlhttp.send();
    }
}


function submit1() {
    showHint('abs');
    var a1 = document.getElementById('message');
    return;
}



function textpos(input) {
    var erg = new Object();
    input.focus();
    /* f?r Internet Explorer */
    if (typeof document.selection != 'undefined') {
        /* Einf?gen des Formatierungscodes */
        var range = document.selection.createRange();
        var insText = range.text;
        range.text = insText;
        /* Anpassen der Cursorposition */
        range = document.selection.createRange();
        if (insText.length == 0) {
            range.move('character', 0);
        } else {
            range.moveStart('character', 0 + insText.length + 0);
        }
        range.select();
    }
    /* f?r neuere auf Gecko basierende Browser */
    else if (typeof input.selectionStart != 'undefined') {
        /* Einf?gen des Formatierungscodes */

        erg.start = input.selectionStart;
        erg.end = input.selectionEnd;
        erg.insText = input.value.substring(erg.start, erg.end);
        erg.text = input.value;
        input.value = input.value.substr(0, erg.start) + erg.insText + input.value.substr(erg.end);
        /* Anpassen der Cursorposition */
        var pos;
        if (erg.insText == 'undefined' || erg.insText.length == 0) {
            pos = erg.start;
        } else {
            pos = erg.start + erg.insText.length;
        }
        input.selectionStart = pos;
        input.selectionEnd = pos;
        return erg;
    }
    /* f?r die ?brigen Browser */
    else {
        /* Abfrage der Einf?geposition */
        var pos;
        var re = new RegExp('^[0-9]{0,3}$');
        while (!re.test(pos)) {
            pos = prompt("Einf?gen an Position (0.." + input.value.length + "):", "0");
        }
        if (pos > input.value.length) {
            pos = input.value.length;
        }
        /* Einf?gen des Formatierungscodes */
        var insText = prompt("Bitte geben Sie den zu formatierenden Text ein:");
        input.value = input.value.substr(0, pos) + insText + input.value.substr(pos);
    }
}













function insert(aTag, eTag) {
    var input = document.forms['formular'].elements['eingabe'];
    input.focus();
    /* f?r Internet Explorer */
    if (typeof document.selection != 'undefined') {
        /* Einf?gen des Formatierungscodes */
        var range = document.selection.createRange();
        var insText = range.text;
        range.text = aTag + insText + eTag;
        /* Anpassen der Cursorposition */
        range = document.selection.createRange();
        if (insText.length == 0) {
            range.move('character', -eTag.length);
        } else {
            range.moveStart('character', aTag.length + insText.length + eTag.length);
        }
        range.select();
    }
    /* f?r neuere auf Gecko basierende Browser */
    else if (typeof input.selectionStart != 'undefined') {
        /* Einf?gen des Formatierungscodes */
        var start = input.selectionStart;
        var end = input.selectionEnd;
        var insText = input.value.substring(start, end);
        input.value = input.value.substr(0, start) + aTag + insText + eTag + input.value.substr(end);
        /* Anpassen der Cursorposition */
        var pos;
        if (insText.length == 0) {
            pos = start + aTag.length;
        } else {
            pos = start + aTag.length + insText.length + eTag.length;
        }
        input.selectionStart = pos;
        input.selectionEnd = pos;
    }
    /* f?r die ?brigen Browser */
    else {
        /* Abfrage der Einf?geposition */
        var pos;
        var re = new RegExp('^[0-9]{0,3}$');
        while (!re.test(pos)) {
            pos = prompt("Einf?gen an Position (0.." + input.value.length + "):", "0");
        }
        if (pos > input.value.length) {
            pos = input.value.length;
        }
        /* Einf?gen des Formatierungscodes */
        var insText = prompt("Bitte geben Sie den zu formatierenden Text ein:");
        input.value = input.value.substr(0, pos) + aTag + insText + eTag + input.value.substr(pos);
    }
}


function sorttabelle() {

    var out = "";
    var a0 = event.currentTarget;

    var ci = a0.cellIndex;
    var citext = a0.innerText;

    var tr = a0.parentNode;  // TR Node
    var tdl = tr.getElementsByTagName('TD');
    var azs = tdl.length;  //anzahl Spalten in Aurufzeile



    var ta = tr.parentNode;  // tabellen Node
    var a3 = ta.getElementsByTagName('TR'); // TR-Liste
    out += a3 + '<br>';
    //    for (var a5 in a3)

    // Loop über alle Tabellenzeilen


    var zeilenarr = [];
    var zeilenused = [];
    console.log('type' + typeof sort);
    typeof sort == 'undefined' ? sort = 0 : sort++;
    for (a5 = 0; a5 < a3.length; a5++) {
        //     typeof (a3[a5].sort) ? a3[a5].sort++ : a3[a5].sort=0;

        var trtext = a3[a5].innerHTML;
        var tdl = a3[a5].getElementsByTagName('TD');
        if (ci >= tdl.length || azs > tdl.length) continue;   // aktuelle spaltenzahl zu klein
        var val = tdl[ci].innerText;
        if (val == citext) continue;  // Überspringe Headlines
        tz = {};
        tz['text'] = val;
        tz['tr'] = trtext;
        tz['type'] = typeof val;
        tz['nan'] = isNaN(val);
        out += a5 + '#' + sort + '##' + val + '#' + tz['type'] + '#' + tz['nan'] + '<br>';
        zeilenarr.push(tz);
        zeilenused.push(a5);

    }

    var datatyp = typeof zeilenarr[0].text;
    var ip = 0;
    merk = zeilenarr[0];
    zeilenarr[0] = zeilenarr[1];
    zeilenarr[1] = merk;
    (tz['nan']) ? zeilenarr.sort(function (a, b) { return a.text.localeCompare(b.text); }) : zeilenarr.sort(function (a, b) { return a.text - b.text; })
    if (sort % 2 == 1) zeilenarr.reverse();

    for (a5 in zeilenarr) {
        var trnr = zeilenused[ip++]
        a3[trnr].innerHTML = zeilenarr[a5]['tr'];
    }






    out += "cellindex " + a0.cellIndex + '<br>';

    var di = document.getElementById('div');
    if (di) di.innerHTML = out;

}




function sorttabelleold(tabelle, spalte, typ) {
    a1 = document.getElementsByTagName('TR');
    var text = "";
    var tab = [];
    var t2 = [];
    var tor = [];
    var i1 = 0;

    console.log(a1.length)

    for (var i = 0; i < a1.length; i++) {
        tor[i] = a1[i].innerHTML;
        td = a1[i].getElementsByTagName('TD');
        t2[i] = true;
        if (td.length <= 2) continue;
        text = td[1].textContent;
        t2[i] = isNaN(text);
        console.log(' i:' + i + '#' + td.length)
        text = td[1].textContent;

        if (t2[i]) continue;
        tor[i] = a1[i].innerHTML;
        tab[i1] = { 'i': i1, 'v': text, 'tr': a1[i].innerHTML };
        i1++;


    }
    var sp = -1;  // -1 sortiert aufsteigend
    tab.sort(function (a, b) { return sp * (b['v'] - a['v']) })
    i1 = 0;
    for (i = 0; i < a1.length; i++) {


        if (t2[i]) {
            a1[i].innerHTML = tor[i];
        }

        else {
            a1[i].innerHTML = tab[i1++].tr;
        }
    }
}




