function UBB(key){
var re = /\[img\]([^\[\]]+)\[\/img\]/gi;
key = key.replace(re, "<div id='frontdiv' style='position:absolute;z-index:10;border:0px;'><img src='/images/front.gif' id='frontimage' /></div><div align='center'><img src='$1' id='imgbook' name='imgbook' /></div>");
re = /\[url\]([^\[\]]+)\[\/url\]/gi;
key = key.replace(re, "<a href='$1' target='_blank'>$1</a>");
re = /\[url=(.[^\[]*)\](.[^\[]*)\[\/url\]/gi;
key = key.replace(re, "<a href='$1' target='_blank'>$2</a>");
return key;
}
function Fiterls(key){
return key.replace(/(妈的|妈b|妈比|fuck|shit|我日|法轮|产党|泽东)/gi, '**');	
}
function EnCodeHtml(key){
	key = key.replace(/(&nbsp;){2,}/ig,'    ');
	key = key.replace(/[\f\t\v　 ]/ig,'    ');
	key = key.replace(/\r/g, '');
	key = key.replace(/[\v\t　 ]*\n[\v\t　 ]*/g, '\n');
	key = key.replace(/(\n+)/g, '$1　　');
	key = key.replace(/[\n]{2,}/g, '\n\n');
	key = key.replace(/\n/g, '\r\n');
	key = '　　' + key;
	key = key.replace(/(　　!)/g, '');
	return(key);
}
function EnCodeMake(key){
	var reStr = /(&nbsp;){2,}/ig;
	key = key.replace(reStr,'    ');
	reStr = /[ ]{2,}/ig;
	key = key.replace(reStr,'    ');
	return(key);
}
function FactTran(H,U,Divs)
{
var TextDiv=document.getElementById(Divs);
var TextType = Fiterls(TextDiv.innerHTML);
    if(H==1){
	    TextType = EnCodeHtml(TextType);
	}else{
		TextType = EnCodeMake(TextType);
	}
    if(U==1){
        TextType = UBB(TextType);
	}
TextDiv.innerHTML= TextType;	
}
function TranTextType(H,U,Divs){
var browser=navigator.appName;
  if (browser == "Microsoft Internet Explorer" && document.readyState != "complete") { 
      return window.setTimeout(function() {FactTran(H,U,Divs);},9999);
  }else{
	  return FactTran(H,U,Divs);
  }
}
