var {clipboard} = require('electron')

var code=document.querySelector('#code');

code.onclick=function(){
    clipboard.writeText(code.innerHTML);
    alert('复制成功');
}