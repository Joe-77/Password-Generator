let password = document.getElementById("password"),
  range = document.getElementById("range"),
  uppercase = document.getElementById("uppercase"),
  lowercase = document.getElementById("lowercase"),
  number = document.getElementById("number"),
  symbols = document.getElementById("symbols"),
  btn = document.getElementById("generator"),
  value = document.getElementById("length"),
  error = document.querySelector("small");

range.onchange = () => {
  value.innerHTML = range.value;
};

btn.addEventListener("click", () => {
  if (uppercase.checked) {
    let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = range.value;
    let random = "";
    for (let i = 0; i < length; i++) {
      random += character[Math.floor(Math.random() * character.length)];
    }
    password.innerHTML = random;
  } else if (lowercase.checked) {
    let character = "abcdefghijklmnopqrstuvwxyz";
    let length = range.value;
    let random = "";
    for (let i = 0; i < length; i++) {
      random += character[Math.floor(Math.random() * character.length)];
    }
    password.innerHTML = random;
  } else if (number.checked) {
    let character = "0123456789";
    let length = range.value;
    let random = "";
    for (let i = 0; i < length; i++) {
      random += character[Math.floor(Math.random() * character.length)];
    }
    password.innerHTML = random;
  } else if (symbols.checked) {
    let character =
      "·‘’‚‛„•˕˖˗˘˙˛˚˜˝˞ˠˡ＆＊％＄＃！﹕﹔﹒﹐～︰〞〝〃。、＠？：．，";
    let length = range.value;
    let random = "";
    for (let i = 0; i < length; i++) {
      random += character[Math.floor(Math.random() * character.length)];
    }
    password.innerHTML = random;
  }
  if (uppercase.checked && lowercase.checked) {
    let character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = range.value;
    let random = "";
    for (let i = 0; i < length; i++) {
      random += character[Math.floor(Math.random() * character.length)];
    }
    password.innerHTML = random;
  }
  if (uppercase.checked && lowercase.checked && number.checked) {
    let character =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = range.value;
    let random = "";
    for (let i = 0; i < length; i++) {
      random += character[Math.floor(Math.random() * character.length)];
    }
    password.innerHTML = random;
  }
  if (
    uppercase.checked &&
    lowercase.checked &&
    number.checked &&
    symbols.checked
  ) {
    let character =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ·‘’‚‛„•˕˖˗˘˙˛˚˜˝˞ˠˡ＆＊％＄＃！﹕﹔﹒﹐～︰〞〝〃。、＠？：．，";
    let length = range.value;
    let random = "";
    for (let i = 0; i < length; i++) {
      random += character[Math.floor(Math.random() * character.length)];
    }
    password.innerHTML = random;
  }
  if (lowercase.checked && number.checked) {
    let character = "0123456789abcdefghijklmnopqrstuvwxyz";
    let length = range.value;
    let random = "";
    for (let i = 0; i < length; i++) {
      random += character[Math.floor(Math.random() * character.length)];
    }
    password.innerHTML = random;
  }
  if (lowercase.checked && symbols.checked) {
    let character =
      "·‘’‚‛„•˕˖˗˘˙˛˚˜˝˞ˠˡ＆＊％＄＃！﹕﹔﹒﹐～︰〞〝〃。、＠？：．，abcdefghijklmnopqrstuvwxyz";
    let length = range.value;
    let random = "";
    for (let i = 0; i < length; i++) {
      random += character[Math.floor(Math.random() * character.length)];
    }
    password.innerHTML = random;
  }
  if (lowercase.checked && number.checked && symbols.checked) {
    let character =
      "·‘’‚‛„•˕˖˗˘˙˛˚˜˝˞ˠˡ＆＊％＄＃！0123456789﹕﹔﹒﹐～︰〞〝〃。、＠？：．，abcdefghijklmnopqrstuvwxyz";
    let length = range.value;
    let random = "";
    for (let i = 0; i < length; i++) {
      random += character[Math.floor(Math.random() * character.length)];
    }
    password.innerHTML = random;
  }
  if (number.checked && uppercase.checked) {
    let character = "ABCDE0F123G456HI789JKLMNOPQRSTUVWXYZ";
    let length = range.value;
    let random = "";
    for (let i = 0; i < length; i++) {
      random += character[Math.floor(Math.random() * character.length)];
    }
    password.innerHTML = random;
  }
  if (number.checked && symbols.checked) {
    let character =
      "0123456789·‘’‚‛„•˕˖˗˘˙˛˚˜˝˞ˠˡ＆＊％＄＃！﹕﹔﹒﹐～︰〞〝〃。、＠？：．，";
    let length = range.value;
    let random = "";
    for (let i = 0; i < length; i++) {
      random += character[Math.floor(Math.random() * character.length)];
    }
    password.innerHTML = random;
  }
  if (number.checked && symbols.checked && lowercase.checked) {
    let character =
      "0123456789qwertyuioplkjhgfdsazxcvbnm·‘’‚‛„•˕˖˗˘˙˛˚˜˝˞ˠˡ＆＊％＄＃！﹕﹔﹒﹐～︰〞〝〃。、＠？：．，";
    let length = range.value;
    let random = "";
    for (let i = 0; i < length; i++) {
      random += character[Math.floor(Math.random() * character.length)];
    }
    password.innerHTML = random;
  }

  if (
    !uppercase.checked &&
    !lowercase.checked &&
    !number.checked &&
    !symbols.checked
  ) {
    password.innerHTML = "";
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});
