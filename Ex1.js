function validatedPoint(point) {
    if(point >= 0 && point <= 10) return true;
    else return false;
}

function bai1() {
    let a = document.getElementById("bai1_a").valueAsNumber;
    let b = document.getElementById("bai1_b").valueAsNumber;
    if(isNaN(a) || isNaN(b)) return;
    document.getElementById("bai1_ketqua").innerHTML = "Đáp án: " + a%b == 0 ? a + " chia hết cho " + b
                                                            : a + " không chia hết cho " + b;
}

function bai2(val) {
    if(val < 15) document.getElementById("bai2_ketqua").innerHTML = "Học sinh đó chưa đủ tuổi vào học lớp 10!";
    else document.getElementById("bai2_ketqua").innerHTML = "Học sinh đó đã đủ tuổi vào học lớp 10!";
}

function bai3(val) {
    switch(true) {
        case(!Number.isInteger(val)):
            alert("Số không nguyên, vui lòng nhập lại!");
            break;
        case(val < 0):
            document.getElementById("bai3_ketqua").innerHTML = "Số này nhỏ hơn 0!";
            break;
        case(val > 0):
            document.getElementById("bai3_ketqua").innerHTML = "Số này lớn hơn 0!";
            break;
        default:
            document.getElementById("bai3_ketqua").innerHTML = "Số này bằng 0!";
    }
}

function bai4() {
    let a = document.getElementById("bai4_num1").valueAsNumber;
    let b = document.getElementById("bai4_num2").valueAsNumber;
    let c = document.getElementById("bai4_num3").valueAsNumber;
    if(isNaN(a) || isNaN(b) || isNaN(c)) return;
    if(!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
        alert("Vui lòng nhập vào số nguyên!");
        return;
    }
    document.getElementById("bai4_ketqua").innerHTML = "Giá trị lớn nhất của 3 số nguyên đó là: " + Math.max(a, Math.max(b, c));
}

function bai5() {
    let kiemtra = document.getElementById("bai5_kiemtra").valueAsNumber;
    let giuaky = document.getElementById("bai5_giuaky").valueAsNumber;
    let cuoiky = document.getElementById("bai5_cuoiky").valueAsNumber;
    if(isNaN(kiemtra) || isNaN(giuaky) || isNaN(cuoiky)) return;
    if(!validatedPoint(kiemtra) || !validatedPoint(giuaky) || !validatedPoint(cuoiky)) {
        alert("Điểm nhập vào không hợp lệ!");
        return;
    }
    document.getElementById("bai5_ketqua").innerHTML = "Học lực của học sinh đó là: ";
    let point = kiemtra * 0.2 + giuaky * 0.2 + cuoiky * 0.6;
    switch(true) {
        case(point > 8):
            document.getElementById("bai5_ketqua").innerHTML += "loại Giỏi";
            break;
        case(point > 6.5):
            document.getElementById("bai5_ketqua").innerHTML += "loại Khá";
            break;
        case(point > 5):
            document.getElementById("bai5_ketqua").innerHTML += "loại Trung bình";
            break;
        default:
            document.getElementById("bai5_ketqua").innerHTML += "loại Yếu";
            break;
    }
}

function bai6() {
    let a = document.getElementById("bai6_num1").valueAsNumber;
    let b = document.getElementById("bai6_num2").valueAsNumber;
    let c = document.getElementById("bai6_num3").valueAsNumber;
    if(isNaN(a) || isNaN(b) || isNaN(c)) return;
    document.getElementById("bai6_ketqua").innerHTML = "Trả lời: Ba số đã cho ";
    if(a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
        document.getElementById("bai6_ketqua").innerHTML += "không phải ba cạnh của một tam giác.";
        return;
    }
    document.getElementById("bai6_ketqua").innerHTML += "là ba cạnh của một tam giác.";
}

function bai7() {
    let age = document.getElementById("bai7_age").valueAsNumber;
    if(!Number.isInteger(age) || age < 1 || age > 120) {
        document.getElementById("bai7_ketqua").innerHTML = "Trả lời: Số đã nhập không phải số tuổi của người!";
        return;
    }
    document.getElementById("bai7_ketqua").innerHTML = "Trả lời: Số đã nhập là số tuổi của người!";
}

function bai8() {
    let a = document.getElementById("bai8_a").valueAsNumber;
    if(a <= 0) {
        alert("Cạnh hình vuông phải lớn hơn 0!");
        return;
    }
    document.getElementById("bai8_ketqua").innerHTML = "Trả lời: Diện tích hình vuông là " + a*a;
}

function bai9() {
    let a = document.getElementById("bai9_a").valueAsNumber;
    let b = document.getElementById("bai9_b").valueAsNumber;
    if(isNaN(a) || isNaN(b)) return;
    if(a <= 0 || b <= 0) {
        alert("Cạnh hình chữ nhật phải lớn hơn 0!");
        return;
    }
    document.getElementById("bai9_ketqua").innerHTML = "Trả lời: Diện tích hình chữ nhật đó là " + a*b;
}

function bai10() {
    let a = document.getElementById("bai10_a").valueAsNumber;
    let b = document.getElementById("bai10_b").valueAsNumber;
    if(isNaN(a) || isNaN(b)) return;
    if(a <= 0 || b <= 0) {
        alert("Cạnh hình tam giác phải lớn hơn 0!");
        return;
    }
    document.getElementById("bai10_ketqua").innerHTML = "Trả lời: Diện tích hình tam giác vuông đó là " + a*b/2.0;
}

function bai11() {
    let a = document.getElementById("bai11_a").valueAsNumber;
    let b = document.getElementById("bai11_b").valueAsNumber;
    if(isNaN(a) || isNaN(b)) return;
    if(a == 0)
        switch(b) {
            case 0:
                document.getElementById("bai11_ketqua").innerHTML = "Trả lời: Phương trình có vô số nghiệm";
                break;
            default:
                document.getElementById("bai11_ketqua").innerHTML = "Trả lời: Phương trình vô nghiệm";
        }
    else document.getElementById("bai11_ketqua").innerHTML = "Trả lời: Nghiệm của phương trình này là " + -b/a;
}

function bai12() {
    let a = document.getElementById("bai12_a").valueAsNumber;
    let b = document.getElementById("bai12_b").valueAsNumber;
    let c = document.getElementById("bai12_c").valueAsNumber;
    if(isNaN(a) || isNaN(b) || isNaN(c)) return;
    let delta = b * b - 4 * a * c;
    if(delta < 0){
        document.getElementById("bai12_ketqua").innerHTML = "Trả lời: Phương trình vô nghiệm!";
        return;
    }
    if(a == 0) {
        if(b == 0)
            switch(c) {
                case 0:
                    document.getElementById("bai12_ketqua").innerHTML = "Trả lời: Phương trình có vô số nghiệm";
                    break;
                default:
                    document.getElementById("bai12_ketqua").innerHTML = "Trả lời: Phương trình vô nghiệm";
            }
        else document.getElementById("bai12_ketqua").innerHTML = "Trả lời: Phương trình chỉ có 1 nghiệm " + -c/b;
        return;
    }
    if(delta == 0) {
        document.getElementById("bai12_ketqua").innerHTML = "Trả lời: Phương trình chỉ có 1 nghiệm " + -b/(2*a);
        return;
    }
    document.getElementById("bai12_ketqua").innerHTML = "Trả lời: Phương trình có 2 nghiệm phân biệt" + (-b + Math.sqrt(delta))/(2*a) + " và " + (-b - Math.sqrt(delta))/(2*a);
}

function bai13() {
    let celsius = document.getElementById("bai13_celsius").valueAsNumber;
    document.getElementById("bai13_ketqua").innerHTML = (celsius * 9 / 5) + 32;
}

function bai14() {
    let meter = document.getElementById("bai14_meter").valueAsNumber;
    document.getElementById("bai14_ketqua").innerHTML = meter * 3.28084;
}

function bai15() {
    let a = typeof document.getElementById("bai15_a").value;
    let b = typeof document.getElementById("bai15_b").value;
    document.getElementById("bai15_ketqua").innerHTML = "Trả lời: Kiểu biến của a là " + a + ", kiểu biến của b là " + b;
}