document.addEventListener('keydown', logKey);


function logKey(e) {
  if(e.code === 'ArrowRight') {
    img = document.getElementById('slide');
    backImg = img.currentSrc;

    var specificImg = backImg.slice(-7, -5); 
    strBegin = "./assets/debrief/";
    strAdd = ".jpeg";

    if (specificImg === "56") {
        newNum = 57;
      } else if (specificImg === "55") {
        newNum = 56;
      } else if (specificImg === "57") {
        newNum = 1;
      }
      else {
        newNum = parseInt(specificImg) + 1;
      }


    if (newNum >= 1 && newNum <10) {
        newImg = strBegin + "0" + newNum.toString() + strAdd;
    } else {
        newImg = strBegin + newNum.toString() + strAdd;
    }
    img.src = newImg;
    console.log("R SI", newImg)
  }

  if(e.code === 'ArrowLeft') {
    img = document.getElementById('slide');
    backImg = img.currentSrc;

    var specificImg = backImg.slice(-7, -5); 
    strBegin = "./assets/debrief/";
    strAdd = ".jpeg";

    if (specificImg === "57") {
        newNum = 56;
      } else if (specificImg === "56") {
        newNum = 55;
      } else if (specificImg === "01") {
        newNum = 57;
      }
      else {
        newNum = parseInt(specificImg) - 1;
      }

    if (newNum >= 1 && newNum <10) {
        newImg = strBegin + "0" + newNum.toString() + strAdd;
    } else {
        newImg = strBegin + newNum.toString() + strAdd;
    }
    img.src = newImg;
    console.log("L SI", newImg)
  }

//   if(e.code === 'ArrowLeft') {
//     img = document.getElementById('slide');
//     backImg = img.currentSrc;
//     console.log("BI", backImg)

//     var specificImg = backImg.slice.slice(-7, -4); 
//     console.log(specificImg);

//     strBegin = "./assets/debrief/";
//     strAdd = ".jpeg";
//     newNum = parseInt(specificImg);

//     if (specificImg === "34") {
//       newNum = 33;
//     } else if (specificImg === "33") {
//       newNum = 32;
//     } else if (specificImg[1] === "1") {
//       newNum = 34;
//     }
//     else {
//       newNum = parseInt(specificImg[1]) - 1;
//     }
//     newImg = strBegin + newNum.toString() + strAdd
//     img.src = newImg;
//   }

}
