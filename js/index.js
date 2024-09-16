
const file = document;
const userinfo = file.getElementById('user');
const greemtext = file.getElementById('greemtext')

function ImgOver(object) {

    actual = object.type

    console.log(actual)

    if (actual == "mouseover") {
        greemtext.style.display = 'flex';
        return;
    }

    greemtext.style.display = 'none';
}

userinfo.addEventListener("mouseover", ImgOver);
userinfo.addEventListener("mouseout", ImgOver);