

<script type="text/javascript">


		/* При нажатии кнопки, она меняет цвет на зеленый */
		var elems = document.getElementsByTagName('button');
for (var i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', button);
}

function button() {
	this.style.backgroundColor = 'green';
}


/*  При наведении курсора на ссылку, меняется цвет и размер*/
var elem = document.getElementsByTagName('a');
for (var i = 0; i < elem.length; i++) {
	elem[i].addEventListener('mousemove', func);
	elem[i].addEventListener('mouseout', func2);

}
function func(){
	//this.style.boxShadow = '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)';
	//this.flexbox.transform = 'scale(1.5)';
	this.style.fontSize= '22px';
	this.style.color = 'green';
	this.function = add();

}
function func2(){
	this.style.fontSize = '17px';
	this.style.color = 'blue';
	
};

/*Прописываем вплывающие окна меню и изменения стиля в строке меню*/

function add(){

var el = document.getElementById('menu_item');

for (var i = 0; i < el.length; i++) {
 el[i].addEventListener('mouseover', showSub);
 el[i].addEventListener('mouseout',  hideSub);
}

function showSub(e){
	
	if(this.children.length>=1){
		alert('v');
		this.children[1].style.display = 'block';
		this.children[1].style.height = 'auto';
		this.children[1].style.overflow = 'visible';
		this.children[1].style.opacity="1";
		this.children[1].style.position = 'absolute';
	}else{
		return false;
	}
}

function hideSub(e){
	if (this.children.length>1) {
		this.children[1].style.height ="0";
		this.children[1].style.overflow = "hidden";
		this.children[1].style.opacity = "0";
	}else{
		return false;
	}
}
}


//тени для картинок
var picture = document.getElementsByTagName('img');
for (var i = 0; i < picture.length; i++){
picture[i].addEventListener('mousemove', shadow);
picture[i].addEventListener('mouseout', shadowStop);
}

function shadow(){
	this.style.boxShadow =  '0 14px 28px rgba(0,0,0,0.25), 0 15px 15px rgba(0,0,0,0.22)';
	this.style.webkitTransform = 'scale(1.1)';
	this.style.position = 'relative';
	//this.style.zIndex = 'zindex++';

	//this.style.zindex= 'zindex++';
	
	/*this.style.width = '110%';
	this.style.height = '110%';*/
}

function shadowStop(){
	this.style.boxShadow = 'none';
	this.style.webkitTransform= 'scale(1)';


	/*this.style.width = 'none';
	this.style.height = 'none';*/
}

	</script>


