const firstRun = useRef(true);
useEffect(() => { 
  if (firstRun.current) {
    var div = 360 / 7;
    var radius = 300;
    var parentdivs = document.getElementById('parentdivs');
    var offsetToParentCenter = parseInt(parentdivs.offsetWidth / 2); //assumes parent is square
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
    childdiv.style.top = (y + totalOffset).toString()  + "px";
    childdiv.style.left = (x + totalOffset).toString() + "px";

    parentdivs.appendChild(childdiv);
    childdiv.appendChild(para)}
    let child1 = document.getElementById('p_1');
    child1.innerText = props.t("home.welcome")
    let child2 = document.getElementById('p_2');
    child2.innerText = props.t("home.welcome")
    let child3 = document.getElementById('p_3');
    child3.innerText = props.t("home.welcome")
    let child4 = document.getElementById('p_4');
    child4.innerText = props.t("home.welcome")
    let child5 = document.getElementById('p_5');
    child5.innerText = props.t("home.welcome")
    let child6 = document.getElementById('p_6');
    child6.innerText = props.t("home.welcome")
    let child7 = document.getElementById('p_7');
    child7.innerText = props.t("home.welcome")
    console.log('rendered!')
    firstRun.current = false;
    return;
  }

  let child1 = document.getElementById('p_1');
  child1.innerText = props.t("home.welcome")
  let child2 = document.getElementById('p_2');
  child2.innerText = props.t("home.welcome")
  let child3 = document.getElementById('p_3');
  child3.innerText = props.t("home.welcome")
  let child4 = document.getElementById('p_4');
  child4.innerText = props.t("home.welcome")
  let child5 = document.getElementById('p_5');
  child5.innerText = props.t("home.welcome")
  let child6 = document.getElementById('p_6');
  child6.innerText = props.t("home.welcome")
  let child7 = document.getElementById('p_7');
  child7.innerText = props.t("home.welcome")