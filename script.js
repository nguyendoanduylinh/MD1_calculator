function hienThi(giaTri) {
    document.getElementById("phepTinh").value += giaTri
}

function tinhToan() {
    let kq = document.getElementById("phepTinh").value
    document.getElementById("phepTinh").value = eval(kq)
}

function xoa() {
    document.getElementById("phepTinh").value = ""
}