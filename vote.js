var bjpcount = 0;
var congresscount = 0;
var aapcount = 0;

var bjp = document.getElementById('bjp-btn');
var congress = document.getElementById('congress-btn');
var aap = document.getElementById('aap-btn');

bjp.addEventListener("click", bcount);
congress.addEventListener("click", ccount);
aap.addEventListener("click", acount);

function bcount(){
    bjpcount++;
    console.log(bjpcount);
}
function ccount(){
    congresscount++;
    console.log(congresscount);
}
function acount(){
    aapcount++;
    console.log(aapcount);
}

function result(){
    document.getElementById("result-bjp").innerHTML = `<td> BJP </td><td> ${bjpcount} Vote</td>`;
    document.getElementById("result-congress").innerHTML = `<td> Congress </td><td> ${congresscount} Vote</td>`;
    document.getElementById("result-aap").innerHTML = `<td> AAP </td><td> ${aapcount} Vote</td>`;
}