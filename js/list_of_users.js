let main = document.querySelector('.demo1');
function createElement(...rest){
    let lst = [];
    for(let i of rest){
        lst.push(document.createElement(i));
    }
    return lst;
}
let user_list = JSON.parse(localStorage.getItem('user_list'));


for(let i of user_list){
    let [table1, tr1, td1, td2, td3, td4, td5, a, i1] = createElement('table', 'tr', 'td', 'td', 'td', 'td', 'td', 'a', 'i');
    td1.innerHTML = user_list.indexOf(i)+1;
    td1.className = 'id'
    td1.style.width = '65px'
    td1.style.backgroundColor = '#01FFFF';
    td1.style.border = '2px solid black';
    td1.style.color = 'black';
    td1.style.textAlign = 'center';
    td1.style.padding = '15px';
    td1.style.fontSize = '20px';
    
    td2.innerHTML = i.text;
    td2.style.width = '415px'
    td2.style.backgroundColor = '#01FFFF';
    td2.style.border = '2px solid black';
    td2.style.color = 'black';
    td2.style.textAlign = 'left';
    td2.style.padding = '15px';
    td2.style.fontSize = '20px';
    
    td3.innerHTML = i.email;
    td3.style.width = '410px'
    td3.style.border = '2px solid black';
    td3.style.backgroundColor = '#01FFFF';
    td3.style.color = 'black';
    td3.style.textAlign = 'left';
    td3.style.padding = '15px';
    td3.style.fontSize = '20px';

    td4.innerHTML = i.password;
    td4.style.width = '135px'
    td4.style.border = '2px solid black';
    td4.style.backgroundColor = '#01FFFF';
    td4.style.color = 'black';
    td4.style.textAlign = 'center';
    td4.style.padding = '15px';
    td4.style.fontSize = '20px';
    
    td5.style.width = '80px'
    td5.style.border = '2px solid black';
    td5.style.backgroundColor = '#01FFFF';
    td5.style.color = 'black';
    td5.style.textAlign = 'left';
    td5.style.padding = '15px';
    td5.style.fontSize = '20px';
    
    i1.className = 'fa fa-trash';
    i1.style.color = 'red';
    i1.style.fontSize = '30px';
    i1.style.textAlign = 'left';

    i1.addEventListener('click', (event)=>{
        user_list.forEach((c, index) => {
            if(c.id === i.id){
                user_list.splice(index, 1);
            }  
        })
        localStorage.setItem('user_list', JSON.stringify(user_list));
        // location.href = './containes/list_of_users.html'
        location.reload();

    });
    
    td5.append(i1);
    tr1.append(td1);
    tr1.append(td2);
    tr1.append(td3);
    tr1.append(td4);
    tr1.append(td5);
    table1.append(tr1);
    main.append(table1)
}
