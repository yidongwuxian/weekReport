/**
*
*   title:  weekReport
*   auther: Kirin
*   date: 2014/8/18  11:46
*   version: 1.3
*
*/
;var weekReport = weekReport || {};


var d1 = document.getElementById("d1"),
	d2 = document.getElementById("d2"),
	oTbody = d1.tBodies[0],
	oTbody1 = d2.tBodies[0],
	addbtn = document.getElementById("addbtn"),
	addbtn1 = document.getElementById("addbtn1"),
	okBtn = document.getElementById("okBtn"),
	innerprint = document.getElementById("innerprint"),
	innerprint1 = document.getElementById("innerprint1"),
	ih1 = document.getElementById("ih1"),
	ih2 = document.getElementById("ih2"),
	outerprint = document.getElementById("outerprint"),
	savebtn = document.getElementById("savebtn");


function init(){
	document.getElementById('myStyle').href="css/blue.css";
}

(function(){

	//输入表单
	autocreate = function(obj){

			var oTr = document.createElement('tr');
				oTr.style.cssText = 'border-bottom:1px solid #d5d5d5';
				oTbody.appendChild(oTr);
			
			for(var i=0; i<6; i++){
				var oTd = document.createElement('td');
				if(i==0) {
					oTd.style.cssText = 'display:inline-block;float:left;width:97%;height:20px;line-height:20px;text-align:left';
					oTd.innerHTML = 'open';
					oTr.appendChild(oTd);	
				}
								
				if(i==5) {
					oTd.innerHTML = '<input type="button" class="pre" value="上移" style="margin:2px 0 2px 10px;width:50px;height:25px;line-height:25px;text-align:center;border-style:none;border:1px solid #64c878;background:#5cb85c;box-shadow: 0 1px 2px #b9ecc4 inset,0 -1px 0 #6c9f76 inset,0 -2px 3px #b9ecc4 inset;background: -webkit-linear-gradient(top,#90dfa2,#84d494);background: -moz-linear-gradient(top,#90dfa2,#84d494);background: linear-gradient(top,#90dfa2,#84d494);color:#fff;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;" onclick="btnUp(this)" /><input type="button" class="next" style="margin:2px 0 2px 10px;width :50px;height:25px;line-height:25px;text-align:center;border-style:none;background:#5cb85c;border:1px solid #64c878;box-shadow: 0 1px 2px #b9ecc4 inset,0 -1px 0 #6c9f76 inset,0 -2px 3px #b9ecc4 inset;background: -webkit-linear-gradient(top,#90dfa2,#84d494);background: -moz-linear-gradient(top,#90dfa2,#84d494);background: linear-gradient(top,#90dfa2,#84d494); color:#fff;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;" value="下移" onclick="btnDown(this)" /><input type="button" class="editbtn" style="margin:2px 0 2px 10px;width:50px;height:25px;line-height:25px;text-align:center;background:#5cb85c;border-style:none;border:1px solid #64c878;box-shadow: 0 1px 2px #b9ecc4 inset,0 -1px 0 #6c9f76 inset,0 -2px 3px #b9ecc4 inset;background: -webkit-linear-gradient(top,#90dfa2,#84d494);background: -moz-linear-gradient(top,#90dfa2,#84d494);background: linear-gradient(top,#90dfa2,#84d494);color:#fff;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;" value="编辑"  onclick="autoEdit(this)" /><input type="button" id="savebtn" style="margin:2px 0 2px 10px;width:50px;height:25px;line-height:25px;text-align:center;border-style:none;border:1px solid #64c878;background:#5cb85c;box-shadow: 0 1px 2px #b9ecc4 inset,0 -1px 0 #6c9f76 inset,0 -2px 3px #b9ecc4 inset;background: -webkit-linear-gradient(top,#90dfa2,#84d494);background: -moz-linear-gradient(top,#90dfa2,#84d494);background: linear-gradient(top,#90dfa2,#84d494);color:#fff;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;" onclick="autoSave(this)" value="保存"  /><input type="button" class="delbtn" style="margin:2px 0 2px 10px;width:50px;height:25px;line-height:25px;text-align:center;background:#5cb85c;border-style:none;border:1px solid #64c878;box-shadow: 0 1px 2px #b9ecc4 inset,0 -1px 0 #6c9f76 inset,0 -2px 3px #b9ecc4 inset;background: -webkit-linear-gradient(top,#90dfa2,#84d494);background: -moz-linear-gradient(top,#90dfa2,#84d494);background: linear-gradient(top,#90dfa2,#84d494);color:#fff;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;" value="删除"  onclick="autoDel(this,d1)" />';
					oTd.style.cssText = 'background:white !important';
				}
				oTr.appendChild(oTd);
			}


			var trLen = oTbody.getElementsByTagName('tr');

			var	j = trLen.length >0 ? trLen.length-1 : 0;	

			stripeTable(oTbody);
			
			oTbody.rows[j].cells[0].innerHTML= j+1;
			oTbody.rows[j].cells[0].style.cssText = 'text-align:center;border-top:1px solid #d5d5d5;border-right:1px solid #d5d5d5;border-bottom:1px solid #d5d5d5;overflow: hidden';
			oTbody.rows[j].cells[1].style.cssText = 'max-width:450px;max-height:150px;width:450px;height:100px;padding:10px;margin-left:10px;text-align:left;border-top:1px solid #d5d5d5;border-right:1px solid #d5d5d5;border-bottom:1px solid #d5d5d5;overflow: hidden';
			oTbody.rows[j].cells[2].style.cssText = 'text-align:center;border-top:1px solid #d5d5d5;border-right:1px solid #d5d5d5;border-bottom:1px solid #d5d5d5;overflow: hidden';
			oTbody.rows[j].cells[3].style.cssText = 'text-align:center;border-top:1px solid #d5d5d5;border-right:1px solid #d5d5d5;border-bottom:1px solid #d5d5d5;overflow: hidden';
			oTbody.rows[j].cells[4].style.cssText = 'max-width:200px;max-height:150px;width:200px;height:100px;padding:10px;text-align:left;border-top:1px solid #d5d5d5;border-right:1px solid #d5d5d5;border-bottom:1px solid #d5d5d5;overflow: hidden';

	}

	autocreate1 = function(obj){

			var oTr = document.createElement('tr');
				oTr.style.cssText = 'border-bottom:1px solid #d5d5d5';
				oTbody1.appendChild(oTr);
			
			for(var i=0; i<6; i++){
				var oTd = document.createElement('td');
				if(i==0) {
					oTd.style.cssText = 'display:inline-block;float:left;width:97%;height:20px;line-height:20px;text-align:left';
					oTd.innerHTML = 'open';
					oTr.appendChild(oTd);	
				}
								
				if(i==5) {
					oTd.innerHTML = '<input type="button" class="pre" value="上移" style="margin:2px 0 2px 10px;width:50px;height:25px;line-height:25px;text-align:center;border-style:none;border:1px solid #64c878;background:#5cb85c;box-shadow: 0 1px 2px #b9ecc4 inset,0 -1px 0 #6c9f76 inset,0 -2px 3px #b9ecc4 inset;background: -webkit-linear-gradient(top,#90dfa2,#84d494);background: -moz-linear-gradient(top,#90dfa2,#84d494);background: linear-gradient(top,#90dfa2,#84d494);color:#fff;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;" onclick="btnUp(this)" /><input type="button" class="next" style="margin:2px 0 2px 10px;width :50px;height:25px;line-height:25px;text-align:center;border-style:none;background:#5cb85c;border:1px solid #64c878;box-shadow: 0 1px 2px #b9ecc4 inset,0 -1px 0 #6c9f76 inset,0 -2px 3px #b9ecc4 inset;background: -webkit-linear-gradient(top,#90dfa2,#84d494);background: -moz-linear-gradient(top,#90dfa2,#84d494);background: linear-gradient(top,#90dfa2,#84d494); color:#fff;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;" value="下移" onclick="btnDown(this)" /><input type="button" class="editbtn" style="margin:2px 0 2px 10px;width:50px;height:25px;line-height:25px;text-align:center;background:#5cb85c;border-style:none;border:1px solid #64c878;box-shadow: 0 1px 2px #b9ecc4 inset,0 -1px 0 #6c9f76 inset,0 -2px 3px #b9ecc4 inset;background: -webkit-linear-gradient(top,#90dfa2,#84d494);background: -moz-linear-gradient(top,#90dfa2,#84d494);background: linear-gradient(top,#90dfa2,#84d494);color:#fff;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;" value="编辑"  onclick="autoEdit1(this)" /><input type="button" id="savebtn" style="margin:2px 0 2px 10px;width:50px;height:25px;line-height:25px;text-align:center;border-style:none;border:1px solid #64c878;background:#5cb85c;box-shadow: 0 1px 2px #b9ecc4 inset,0 -1px 0 #6c9f76 inset,0 -2px 3px #b9ecc4 inset;background: -webkit-linear-gradient(top,#90dfa2,#84d494);background: -moz-linear-gradient(top,#90dfa2,#84d494);background: linear-gradient(top,#90dfa2,#84d494);color:#fff;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;" onclick="autoSave1(this)" value="保存"  /><input type="button" class="delbtn" style="margin:2px 0 2px 10px;width:50px;height:25px;line-height:25px;text-align:center;background:#5cb85c;border-style:none;border:1px solid #64c878;box-shadow: 0 1px 2px #b9ecc4 inset,0 -1px 0 #6c9f76 inset,0 -2px 3px #b9ecc4 inset;background: -webkit-linear-gradient(top,#90dfa2,#84d494);background: -moz-linear-gradient(top,#90dfa2,#84d494);background: linear-gradient(top,#90dfa2,#84d494);color:#fff;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;" value="删除"  onclick="autoDel(this,d2)" />';
					oTd.style.cssText = 'background:white !important';
				}
				oTr.appendChild(oTd);
			}


			var trLen = oTbody1.getElementsByTagName('tr');

			var	j = trLen.length >0 ? trLen.length-1 : 0;	

			stripeTable(oTbody1);
			
			oTbody1.rows[j].cells[0].innerHTML= j+1;
			oTbody1.rows[j].cells[0].style.cssText = 'text-align:center;border-top:1px solid #d5d5d5;border-right:1px solid #d5d5d5;border-bottom:1px solid #d5d5d5;overflow: hidden';
			oTbody1.rows[j].cells[1].style.cssText = 'max-width:450px;max-height:150px;width:450px;height:100px;padding:10px;margin-left:10px;text-align:left;border-top:1px solid #d5d5d5;border-bottom:1px solid #d5d5d5;border-right:1px solid #d5d5d5;overflow: hidden';
			oTbody1.rows[j].cells[2].style.cssText = 'text-align:center;border-top:1px solid #d5d5d5;border-right:1px solid #d5d5d5;border-bottom:1px solid #d5d5d5;overflow: hidden';
			oTbody1.rows[j].cells[3].style.cssText = 'text-align:center;border-top:1px solid #d5d5d5;border-right:1px solid #d5d5d5;border-bottom:1px solid #d5d5d5;overflow: hidden';
			oTbody1.rows[j].cells[4].style.cssText = 'max-width:200px;max-height:150px;width:200px;height:100px;padding:10px;text-align:left;border-top:1px solid #d5d5d5;border-right:1px solid #d5d5d5;border-bottom:1px solid #d5d5d5;overflow: hidden';
	}


	//编辑
	autoEdit = function(obj){
		
			var pn = obj.parentNode.parentNode;

			var oTxa = document.createElement('textarea');
				oTxa.setAttribute('id','projectVal');
				oTxa.style.cssText = 'backgroundColor:white;width:270px;height:150px;max-width:270px;max-height:300px;overflow:hidden;';

			var oWner = document.createElement('input');
				oWner.setAttribute('type','text');
				oWner.setAttribute('id','ownerVal');
				oWner.setAttribute('value','');
				oWner.style.cssText = 'backgroundColor:white;width:100px;height:20px;max-width:100px;max-height:20px;margin:0 5px;padding:0;overflow:hidden;';
				

			var oProcess = document.createElement('select');
				
				oProcess.setAttribute('id','processVal');
				oProcess.innerHTML =   '<option>0%</option>\
										<option>10%</option>\
										<option>20%</option>\
										<option>30%</option>\
										<option>40%</option>\
										<option>50%</option>\
										<option>60%</option>\
										<option>70%</option>\
										<option>80%</option>\
										<option>90%</option>\
										<option>100%</option>\
										<option>已提测</option>\
										<option>已上线</option>	';


			var oTxa1 = document.createElement('textarea');
				oTxa1.setAttribute('id','bakVal');
				oTxa1.style.cssText = 'backgroundColor:white;width:270px;height:150px;max-width:270px;max-height:300px;overflow:hidden;';	



			// var trLen = oTbody.getElementsByTagName('tr'),
			// 	j = trLen.length >0 ? trLen.length-1 : 0;
				
				pn.cells[1].innerHTML = '';
				pn.cells[2].innerHTML = '';
				pn.cells[3].innerHTML = '';
				pn.cells[4].innerHTML = '';

				pn.cells[1].appendChild(oTxa);
				pn.cells[2].appendChild(oWner);
				pn.cells[3].appendChild(oProcess);
				pn.cells[4].appendChild(oTxa1);

	}

	autoEdit1 = function(obj){

			var pn = obj.parentNode.parentNode;

			var oTxa3 = document.createElement('textarea');
				oTxa3.setAttribute('id','projectVal2');
				oTxa3.style.cssText = 'backgroundColor:white;width:270px;height:150px;max-width:270px;max-height:300px;overflow:hidden;';

			var oWner1 = document.createElement('input');
				oWner1.setAttribute('type','text');
				oWner1.setAttribute('id','ownerVal2');
				oWner1.setAttribute('value','');
				oWner1.style.cssText = 'backgroundColor:white;width:100px;height:20px;max-width:100px;max-height:20px;margin:0 5px;padding:0;overflow:hidden;';

			var oProcess1 = document.createElement('select');
				
				oProcess1.setAttribute('id','processVal2');
				oProcess1.innerHTML =   '<option>0%</option>\
										<option>10%</option>\
										<option>20%</option>\
										<option>30%</option>\
										<option>40%</option>\
										<option>50%</option>\
										<option>60%</option>\
										<option>70%</option>\
										<option>80%</option>\
										<option>90%</option>\
										<option>100%</option>\
										<option>已提测</option>\
										<option>已上线</option>	';


			var oTxa4 = document.createElement('textarea');
				oTxa4.setAttribute('id','bakVal2');
				oTxa4.style.cssText = 'backgroundColor:white;width:270px;height:150px;max-width:270px;max-height:300px;overflow:hidden;';	



			// var trLen = oTbody1.getElementsByTagName('tr'),
			// 	j = trLen.length >0 ? trLen.length-1 : 0;
				
				pn.cells[1].innerHTML = '';
				pn.cells[2].innerHTML = '';
				pn.cells[3].innerHTML = '';
				pn.cells[4].innerHTML = '';

				pn.cells[1].appendChild(oTxa3);
				pn.cells[2].appendChild(oWner1);
				pn.cells[3].appendChild(oProcess1);
				pn.cells[4].appendChild(oTxa4);

	}

	//保存
	autoSave = function(obj){

		 var pn = obj.parentNode.parentNode,
		     projectVal0 = document.getElementById("projectVal").value,
			 ownerVal0 = document.getElementById("ownerVal").value,
			 processVal0 = document.getElementById("processVal").value,
			 bakVal0 = document.getElementById("bakVal").value,
			 dth = d1.getElementsByTagName('th');



			 document.cookie = ownerVal0;
			 var strCookie = document.cookie;

			 projectVal0 = projectVal0.replaceAll('\n','<br/>');
			 projectVal.value = projectVal0;
			 ownerVal0 = ownerVal0.replaceAll('\n','<br/>');
			 ownerVal.value = ownerVal0;
			 bakVal0 = bakVal0.replaceAll('\n','<br/>');
			 bakVal.value = bakVal0;

			var trLen = oTbody.getElementsByTagName('tr');

			// var	j = trLen.length >0 ? trLen.length-1 : 0;
			// var oVal = ownerVal.value;

			pn.cells[1].innerHTML = projectVal.value;
			pn.cells[2].innerHTML = ownerVal.value;
			pn.cells[3].innerHTML = processVal.value || '0%';
			pn.cells[4].innerHTML = bakVal.value;

			projectVal0.replace(projectVal0,'');
			ownerVal0.replace(ownerVal0,'');
			processVal0.replace(processVal0,'');
			bakVal0.replace(bakVal0,'');
	}

	autoSave1 = function(obj){
		 var pn = obj.parentNode.parentNode,
		 	 projectVal3 = document.getElementById("projectVal2").value,
			 ownerVal3 = document.getElementById("ownerVal2").value,
			 processVal3 = document.getElementById("processVal2").value,
			 bakVal3 = document.getElementById("bakVal2").value;

			 projectVal3 = projectVal3.replaceAll('\n','<br/>');
			 projectVal2.value = projectVal3;
			 ownerVal3 = ownerVal3.replaceAll('\n','<br/>');
			 ownerVal2.value = ownerVal3;
			 bakVal3 = bakVal3.replaceAll('\n','<br/>');
			 bakVal2.value = bakVal3;

			var trLen = oTbody1.getElementsByTagName('tr');

			// var	j = trLen.length >0 ? trLen.length-1 : 0;
			// var oVal1 = ownerVal2.value;

			pn.cells[1].innerHTML = projectVal2.value;
			pn.cells[2].innerHTML = ownerVal2.value;
			pn.cells[3].innerHTML = processVal2.value;
			pn.cells[4].innerHTML = bakVal2.value;

			projectVal3.replace(projectVal3,'');
			ownerVal3.replace(ownerVal3,'');
			processVal3.replace(processVal3,'');
			bakVal3.replace(bakVal3,'');
		
	}

	//替换多个工具函数
	String.prototype.replaceAll = function(s1,s2){ 
		return this.replace(new RegExp(s1,"gm"),s2); 
	} 


	//删除按钮
	autoDel = function(obj,obj1){
		
		var s = confirm("确定要删除吗");
		if( s == true ){
			var objI = obj.parentNode.parentNode.rowIndex;
			obj1.deleteRow(objI);

			var trLen = oTbody.getElementsByTagName('tr');

			for(var j=0; j<trLen.length; j++){
				var	j = trLen.length >0 ? trLen.length-1 : 0;
				if(j != 0)
					oTbody.rows[j].cells[0].innerHTML= j+1;
			}
		}
		else{
			return false;
		}
		
	}

	//上移
	btnUp = function(obj){	

		var tr_one = obj.parentNode.parentNode,
			tr_parent = tr_one.parentNode,
			tr_prev = tr_one.previousSibling,
			trLen = obj.getElementsByTagName('tr');

		if( tr_prev != null){
			tr_parent.insertBefore(tr_one,tr_prev);
		}
		else{
			stripeTable(oTbody);
			stripeTable(oTbody1);
			alert("已经到顶了！");
		}
		stripeTable(oTbody);
		stripeTable(oTbody1);
	}
	//下移
	btnDown = function(obj){	
		
		var tr_one = obj.parentNode.parentNode,
			tr_parent = tr_one.parentNode,
			tr_next = tr_one.nextSibling;
		if( tr_next != null){
			tr_parent.insertBefore(tr_next,tr_one);
		}
		else{
			stripeTable(oTbody);
			stripeTable(oTbody1);
			alert("已经到底了！");
		}
		stripeTable(oTbody);
		stripeTable(oTbody1);
	}

	//隔行换色
	stripeTable = function(obj){

	   	  var trLen = obj.getElementsByTagName('tr');
	  
		   for(var k=0; k<trLen.length; k++) {

			    if(k%2 != 0) {
			       trLen[k].style.backgroundColor='#EAF2D3';
			    }
			    else{
			       trLen[k].style.backgroundColor='#DEF3CA';
			    }
		   }  
	}

	//鼠标经过时高亮显示
	highlightRows = function(){

	  var trLen = oTbody.getElementsByTagName('tr');
	  
	  for(var i=0; i<trLen.length; i++) {

	   	   trLen[i].oldClassName = trLen[i].className; 
		 
		   trLen[i].onmouseover = function() {
		     addClass(trLen, 'highlight');
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

	//获取className元素
	function getByClass(oParent, sClass)
	{
		var aEle=oParent.getElementsByTagName('*');
		var re=new RegExp('\\b'+sClass+'\\b', 'i');
		var aResult=[];
		
		for(var i=0;i<aEle.length;i++)
		{
			if(re.test(aEle[i].className))
			{
				aResult.push(aEle[i]);
			}
		}
		
		return aResult;
	}

	//输出表格内容
	dlBoxBtn = function(){

		var trLen = oTbody.getElementsByTagName('tr');		
		for(var m=0; m<trLen.length; m++){
			var delTd=oTbody.rows[m].getElementsByTagName('td')[5];
			if(delTd){
				delTd.parentNode.removeChild(delTd);
			}
		}

		var trLen1 = oTbody1.getElementsByTagName('tr');		
		for(var m=0; m<trLen1.length; m++){
			var delTd1=oTbody1.rows[m].getElementsByTagName('td')[5];
			if(delTd1){
				delTd1.parentNode.removeChild(delTd1);
			}
		}

		if( innerprint1.innerHTML === ''){	
		 	 outerprint.innerHTML = innerprint.innerHTML;
		}else{
			outerprint.innerHTML = innerprint.innerHTML + innerprint1.innerHTML;
		}

	    innerprint.style.display = 'none';
	    innerprint1.style.display = 'none';
	    ih1.style.display = 'none';
	    ih2.style.display = 'none';
	    if(addbtn){
	    	addbtn.style.display = 'none';
	    }
	    if(addbtn1){
	    	addbtn1.style.display = 'none';
	    }
	    okBtn.style.display = 'none';
	}
	//点击复制代码
	copyUrl2 = function(){
		outerprint.select();
		document.execCommand("Copy"); 
		alert("请ctrl+c手动复制代码，在发信页面点击‘<html>’按钮按ctrl+v粘贴代码！");
	}
	//回跳
	returnLoad = function(){
		innerprint.style.display = 'block';
		innerprint1.style.display = 'block';
		outerprint.innerHTML = '';
	    if(addbtn){
	    	addbtn.style.display = 'block';
	    }
	    if(addbtn1){
	    	addbtn1.style.display = 'block';
	    }
	    okBtn.style.display = 'block';
	}
})(weekReport);