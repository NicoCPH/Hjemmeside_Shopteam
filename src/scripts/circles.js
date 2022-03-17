
function Circle() {
var div = 360 / 7;
var radius = 300;
var parentdiv = document.getElementById('parentdiv');
var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2); //assumes parent is square
var offsetToChildCenter = 55;
var totalOffset = offsetToParentCenter - offsetToChildCenter;
for (var i = 1; i <= 7; ++i) {
var childdiv = document.createElement('div2');
var para = document.createElement("p");
para.id = 'p_'+i;
childdiv.className = 'div2';
childdiv.style.position = 'absolute';
var y = Math.sin((div * i+12.8) * (Math.PI / 180)) * radius;
var x = Math.cos((div * i+12.8) * (Math.PI / 180)) * radius;
childdiv.style.top = (y + totalOffset).toString() + "px";
childdiv.style.left = (x + totalOffset).toString() + "px";

parentdiv.appendChild(childdiv);
childdiv.appendChild(para)
}
var para_1 = document.getElementById('p_1');
para_1.style.textAlign = "center";
para_1.style.top = "15%";
para_1.style.position = 'relative';
para_1.style.fontSize = '0.9rem';
var text = document.createTextNode("Epoxy-Lackierung");
para_1.appendChild(text)

var para_2 = document.getElementById('p_2');
para_2.style.textAlign = "center";
para_2.style.top = "25%";
para_2.style.position = 'relative';
para_2.style.fontSize = '0.9rem';
var text = document.createTextNode("Holzherstellung");
para_2.appendChild(text)

var para_3 = document.getElementById('p_3');
para_3.style.textAlign = "center";
para_3.style.top = "20%";
para_3.style.position = 'relative';
para_3.style.fontSize = '0.9rem';
var text = document.createTextNode("Logistik und Transport");
para_3.appendChild(text)

var para_4 = document.getElementById('p_4');
para_4.style.textAlign = "center";
para_4.style.top = "20%";
para_4.style.position = 'relative';
para_4.style.fontSize = '0.9rem';
var text = document.createTextNode("Montage und service");
para_4.appendChild(text)

var para_5 = document.getElementById('p_5');
para_5.style.textAlign = "center";
para_5.style.top = "10%";
para_5.style.position = 'relative';
para_5.style.fontSize = '0.9rem';
var text = document.createTextNode("Naubau und umbau Renovierungen");
para_5.appendChild(text)

var para_6 = document.getElementById('p_6');
para_6.style.textAlign = "center";
para_6.style.top = "25%";
para_6.style.position = 'relative';
para_6.style.fontSize = '0.9rem';
var text = document.createTextNode("Roll-out tours");
para_6.appendChild(text)

var para_7 = document.getElementById('p_7');
para_7.style.textAlign = "center";
para_7.style.top = "15%";
para_7.style.position = 'relative';
para_7.style.fontSize = '0.9rem';
var text = document.createTextNode("Metal- und Drahtherstellung");
para_7.appendChild(text)
}


export default Circle