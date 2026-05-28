var xmlHttp;
var rs;
var isie = false;
function startRequest(url,divs){
    if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		isie = true;
    }else if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }
    try{
		if(isie == false ){
			xmlHttp.open("GET", url, false);
			xmlHttp.overrideMimeType("text/html;charset=gb2312");
            xmlHttp.send(null);
			document.getElementById(divs).innerHTML=xmlHttp.responseText;
		}else{
			xmlHttp.open("GET", url, false);
			xmlHttp.send(null);
		    if(xmlHttp.readyState == 4){        
                if (xmlHttp.status == 200 || xmlHttp.status == 0){
			       document.getElementById(divs).innerHTML=Recenspace(xmlHttp.responseBody);
                }
            }
		} 
    }catch(exception){
        document.write('读取文件错误,详细错误信息:'+exception.message);
    }
}
function Recenspace(Html){
	rs=new ActiveXObject("ADODB.RecordSet");
	rs.fields.append("a",201,1);
	rs.open();      
	rs.addNew();
	rs(0).appendChunk(Html);
	rs.update();
	return rs(0).value;
	rs.close();
}