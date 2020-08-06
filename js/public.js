$(function(){
	var typegoog=localStorage.getItem("typegoog"); //0是english  1是中文
	if(!typegoog){
		localStorage.setItem("typegoog","1")
	}
	$("#language_box").change(function(){
		var val = $(this).val();
		console.log('val',val)
		localStorage.setItem("typegoog",val)
		if(val=="1"){
			document.cookie="googtrans=/auto/zh-TW"
			$("#language_box option[value='1']").prop("selected",true);
		}else{
			document.cookie="googtrans=/auto/en"
			$("#language_box option[value='0']").prop("selected",true);
		}
		location.reload()
	})

	function getCookie(name){
	  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	  if (arr = document.cookie.match(reg))
	      return unescape(arr[2]);
	  else
	      return null;
	}
	var language = getCookie('googtrans');

	console.log(language)

	if(language=="/auto/zh-TW"){
	  $("#language_box option[value='0']").prop("selected",false);
	  $("#language_box option[value='1']").prop("selected",true);
	}else if(language=="/auto/en"){
	  $("#language_box option[value='1']").prop("selected",false);
	  $("#language_box option[value='0']").prop("selected",true);
	}
})