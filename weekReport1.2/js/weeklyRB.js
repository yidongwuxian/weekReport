/**
*
*   title:  weekReport
*   auther: Kirin
*   date: 2014/8/8  16:49
*   version: 1.2
*
*/

var d1 = document.getElementById("d1")
	dlBox = document.getElementById("dlBox"),
	dlInp = document.getElementById("dlInp"),
	dlInpLi = dlInp.getElementsByTagName("li"),
	oTbody = d1.tBodies[0],
	addbtn = document.getElementById("addbtn"),
	okBtn = document.getElementById("okBtn"),
	numVal = document.getElementById("numVal"),
	projectVal = document.getElementById("projectVal"),
	ownerVal = document.getElementById("ownerVal"),
	processVal = document.getElementById("processVal"),
	bakVal = document.getElementById("bakVal"),
	innerprint = document.getElementById("innerprint"),
	outerprint = document.getElementById("outerprint");

	bakVal.style.cssText = 'max-width:200px;max-height:150px;width:200px;height:100px;margin-right:10px';
	projectVal.style.cssText = 'max-width:450px;max-height:150px;width:450px;height:100px;margin-right:10px';

function autocreate(){

	if( projectVal.value !== '' && ownerVal.value !== '' && processVal.value !== '' ){

		var oTr = document.createElement('tr');
		oTbody.appendChild(oTr);
		
		for(var i=0; i<6; i++){
			var oTd = document.createElement('td');
			if(i==1) {
				oTd.style.cssText = 'text-align:left';	
				var oP = document.createElement('p');
				oTd.appendChild(oP);
			}
			if(i==5) {
				oTd.innerHTML = '<input type="button" class="pre" value="上移" style="margin:2px;width:50px;height:25px;line-height:25px;text-align:center;border-style:none;border:1px solid #64c878;background:green;box-shadow: 0 1px 2px #b9ecc4 inset,0 -1px 0 #6c9f76 inset,0 -2px 3px #b9ecc4 inset;background: -webkit-linear-gradient(top,#90dfa2,#84d494);background: -moz-linear-gradient(top,#90dfa2,#84d494);background: linear-gradient(top,#90dfa2,#84d494);color:#fff;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;" onclick="btnUp(this)" /><input type="button" class="next" style="margin:2px;width:50px;height:25px;line-height:25px;text-align:center;border-style:none;background:green;border:1px solid #64c878;box-shadow: 0 1px 2px #b9ecc4 inset,0 -1px 0 #6c9f76 inset,0 -2px 3px #b9ecc4 inset;background: -webkit-linear-gradient(top,#90dfa2,#84d494);background: -moz-linear-gradient(top,#90dfa2,#84d494);background: linear-gradient(top,#90dfa2,#84d494); color:#fff;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;" value="下移" onclick="btnDown(this)" /><input type="button" class="delbtn" style="margin:2px;width:50px;height:25px;line-height:25px;text-align:center;background:green;border-style:none;border:1px solid #64c878;box-shadow: 0 1px 2px #b9ecc4 inset,0 -1px 0 #6c9f76 inset,0 -2px 3px #b9ecc4 inset;background: -webkit-linear-gradient(top,#90dfa2,#84d494);background: -moz-linear-gradient(top,#90dfa2,#84d494);background: linear-gradient(top,#90dfa2,#84d494);color:#fff;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;" value="删除"  onclick="autoDel(this)" />';
			}
			oTd.style.cssText = 'width:16%;height:40px;line-height:40px;text-align: center;border-top:1px solid #d5d5d5;border-right:1px solid #d5d5d5;text-align: center;border-right:1px solid #d5d5d5;overflow: hidden;';
			oTr.appendChild(oTd);
		}

		var trLen = oTbody.getElementsByTagName('tr');
		
		var j = trLen.length >0 ? trLen.length-1 : 0;

		var projectVal1 = document.getElementById("projectVal").value;
			
			projectVal1 = projectVal1.replaceAll('\n','<br/>');
			
		
		var ownerVal1 = document.getElementById("ownerVal").value;
			ownerVal1 = ownerVal1.replaceAll('\n','<br/>');

		var bakVal1 = document.getElementById("bakVal").value;
			bakVal1 = bakVal1.replaceAll('\n','<br/>');
			

		projectVal.value = projectVal1;
		ownerVal.value = ownerVal1;
		processVal.value = document.getElementById("processVal").value;
		bakVal.value = bakVal1;
	

		stripeTable();
		
		oTbody.rows[j].cells[0].innerHTML= j+1;
		oTbody.rows[j].cells[0].style.cssText = 'text-align:center;border-top:1px solid #d5d5d5;border-right:1px solid #d5d5d5;overflow: hidden';
		oTbody.rows[j].cells[1].innerHTML= projectVal.value;
		oTbody.rows[j].cells[1].style.cssText = 'padding:10px;margin-left:10px;text-align:left;border-top:1px solid #d5d5d5;border-right:1px solid #d5d5d5;overflow: hidden';
		oTbody.rows[j].cells[2].innerHTML= ownerVal.value;
		oTbody.rows[j].cells[2].style.cssText = 'text-align:center;border-top:1px solid #d5d5d5;border-right:1px solid #d5d5d5;overflow: hidden';
		oTbody.rows[j].cells[3].innerHTML= processVal.value;
		oTbody.rows[j].cells[4].innerHTML= bakVal.value;
		oTbody.rows[j].cells[4].style.cssText = 'padding:10px;text-align:left;border-top:1px solid #d5d5d5;border-right:1px solid #d5d5d5;overflow: hidden';

		projectVal.value='';
		ownerVal.value='';
		processVal.value='';
		bakVal.value='';

		highlightRows();
	} 
}

//替换多个工具函数
String.prototype.replaceAll = function(s1,s2){ 
	return this.replace(new RegExp(s1,"gm"),s2); 
} 

//删除按钮
function autoDel(obj){	
	
	var s = confirm("确定要删除吗");
	if( s == true ){
		var objI = obj.parentNode.parentNode.rowIndex;
		d1.deleteRow(objI);
	}
	else{
		return false;
	}
	
}

//上移
function btnUp(obj){
	
	var tr_one = obj.parentNode.parentNode,
		tr_parent = tr_one.parentNode,
		tr_prev = tr_one.previousSibling,
		trLen = oTbody.getElementsByTagName('tr');

	if( tr_prev != null){
		tr_parent.insertBefore(tr_one,tr_prev);
	}
	else{
		stripeTable();
		alert("已经到顶了！");
	}
	stripeTable();
}
//下移
function btnDown(obj){
	
	var tr_one = obj.parentNode.parentNode,
		tr_parent = tr_one.parentNode,
		tr_next = tr_one.nextSibling;
	if( tr_next != null){
		tr_parent.insertBefore(tr_next,tr_one);
	}
	else{
		stripeTable();
		alert("已经到底了！");
	}
	stripeTable();
}

//隔行换色
function stripeTable() {

   	  var trLen = oTbody.getElementsByTagName('tr');
  
	   for(var k=0; k<trLen.length; k++) {

		    if(k%2 != 0) {
		       trLen[k].style.backgroundColor='#ffffff';
		    }
		    else{
		       trLen[k].style.backgroundColor='#ebebeb';
		    }
	   }  
}

//鼠标经过时高亮显示
function highlightRows() {
  var trLen = oTbody.getElementsByTagName('tr');
  
  for(var i=0; i<trLen.length; i++) {

   	   trLen[i].oldClassName = trLen[i].className; 
	 
	   trLen[i].onmouseover = function() {
	     addClass(this, "highlight"); 
	   }
	   trLen[i].onmouseout = function() {
	     this.className = this.oldClassName; 
	   }
  }
}

//添加className
function addClass(element, value) {
  if(!element.className) {
   element.className = value; 
  } else {
   element.className += " "+value; 
  }
}

//输出表格内容
function dlBoxBtn(){

	var trLen = oTbody.getElementsByTagName('tr');		
	for(var m=0; m<trLen.length; m++){
		var delTd=oTbody.rows[m].getElementsByTagName('td')[5];
		if(delTd){
			delTd.parentNode.removeChild(delTd);
		}
	}

    outerprint.innerHTML = innerprint.innerHTML;
    innerprint.style.display = 'none';
    addbtn.style.display = 'none';
    okBtn.style.display = 'none';
    dlBox.style.display = 'none';
    dlInp.style.display = 'none';
    projectVal.value='';
	ownerVal.value='';
	processVal.value='';
	bakVal.value='';
}
//点击复制代码
function copyUrl2(){
	outerprint.select();
	document.execCommand("Copy"); 
}
//回跳
function returnLoad(){
	innerprint.style.display = 'block';
	outerprint.innerHTML = '';
    addbtn.style.display = 'block';
    okBtn.style.display = 'block';
    dlBox.style.display = 'block';
    dlInp.style.display = 'block';
    projectVal.value='';
	ownerVal.value='';
	processVal.value='';
	bakVal.value='';
}