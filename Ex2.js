const arr = [16, 0, 6, 1, 9, 99];
const todoList = ["Go to bed at 11pm", "Do homework at 8pm"];

function reverseArray() {
    const arr1 = [];
    arr.forEach(myReverse);

    function myReverse(value, index, array) {
        arr1.unshift(value);
    }
    document.getElementById("bai1").innerHTML = "Mảng đã đảo ngược là: " + arr1;
}

function checkExist(val) {
    val = parseFloat(val)
    let indexed = arr.indexOf(val);
    if(indexed == -1) {
        document.getElementById("bai2").innerHTML = "Phần tử không tồn tại trong mảng";
        return;
    }
    document.getElementById("bai2").innerHTML = `Vị trí của ${val} trong mảng là:`;
    while(indexed != -1) {
        document.getElementById("bai2").innerHTML += ` ${indexed + 1}`;
        indexed = arr.indexOf(val, indexed + 1);
    }
}

function checkExist2(val) {
    val = parseFloat(val)
    let indexed = arr.indexOf(val);
    if(indexed == -1) {
        alert('Chúc bạn may mắn lần sau')
        return;
    }
    alert('Bingo');
}

function stringToArray(str) {
    str = document.getElementById('bai4_input').value;
    const newArr = str.split(' ');
    var maxNum = parseFloat(newArr[0]);
    newArr.forEach(findMax, maxNum);
    console.log(typeof maxNum);
    function findMax(value) {
        console.log(typeof value);
        maxNum = Math.max(maxNum, parseFloat(value));
        console.log(maxNum);
    }

    document.getElementById("bai4").innerHTML = `Số lớn nhất trong dãy là ${maxNum}`;
}

function toDoList() {
    query = document.getElementById('query_input').value;
    let request_input = document.getElementById('request_input');
    switch(query) {
        case 'C':
            let create_request = document.createElement("input");
            let create_request_confirm = document.createElement("button");
            create_request_confirm.innerHTML = "Confirm";
            request_input.innerHTML = 'Nhập việc cần làm mới ';
            request_input.appendChild(create_request);
            request_input.appendChild(create_request_confirm);
            create_request_confirm.onclick = function() {
                todoList.push(create_request.value);
                display();
                document.getElementById('request_input').textContent = '';
            }
            break;
        case 'R':
            display();
            break;
        case 'U':
            let update_request_id = document.createElement("input");
            update_request_id.placeholder = 'Nhập id:';
            let update_request = document.createElement("input");
            update_request.placeholder = 'Nhập nội dung muốn thay đổi:'
            let update_request_confirm = document.createElement("button");
            update_request_confirm.innerHTML = "Confirm";
            update_request_confirm.onclick = function() {
                todoList[parseInt(update_request_id.value) - 1] = update_request.value;
                display();
                document.getElementById('request_input').textContent = '';
            }
            request_input.innerHTML = 'Nhập id và nội dung công việc cần thay đổi: ';
            request_input.appendChild(update_request_id);
            request_input.appendChild(update_request);
            request_input.appendChild(update_request_confirm);
            break;
        case 'D':
            let delete_request_id = document.createElement("input");
            delete_request_id.placeholder = 'Nhập id:';
            let delete_request_confirm = document.createElement("button");
            delete_request_confirm.innerHTML = "Confirm";
            delete_request_confirm.onclick = function() {
                todoList.splice(delete_request_id.value - 1, 1);
                display();
                document.getElementById('request_input').textContent = '';
            }
            request_input.innerHTML = 'Nhập id công việc muốn xoá: ';
            request_input.appendChild(delete_request_id);
            request_input.appendChild(delete_request_confirm);
            break;
        default:
            alert("Chỉ nhận 1 trong 4 ký tự C/R/U/D");
    }

    function display() {
        document.getElementById("bai5").innerHTML = ``;
        todoList.forEach(function(value, index) {
            document.getElementById("bai5").innerHTML += `${index + 1}. ${value} \n`;
        });
    }
}