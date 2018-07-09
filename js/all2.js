var list = document.querySelector('.list');
var btnSend = document.querySelector('.send');
var data = JSON.parse(localStorage.getItem('listData')) ||[];
// 指定 dom


list.addEventListener('click',toggleDone);
btnSend.addEventListener('click',send);
upData(data);
// 監聽事件

function send(e){
    e.preventDefault();
    var txt= document.querySelector('.text').value;
    var todo ={
        content:txt
        };
    
    data.push(todo);
    upData(data);
    localStorage.setItem('listData', JSON.stringify(data));
};
// 加入列表和localStorage並且更新

function upData(items){
 var str = '';
 var len = items.length;
 for(i=0;i<len;i++){
    str += '<li><a href="#" data-index=' + i + ' />刪除</a> <span>' + items[i].content + '</span></li>';

 }
 list.innerHTML = str;

};

// 更新內容
function toggleDone(e){
    e.preventDefault;
    if(e.target.nodeName !== 'A'){return};
    var index = e.target.dataset.index;
    data.splice(index, 1);
    localStorage.setItem('listData', JSON.stringify(data));
    upData(data);


};

// 點擊刪除