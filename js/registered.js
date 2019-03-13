var test = $("div");

function isHidden(mark) {
  switch (mark) {
    case 'protocol':
      $("#" + test[2].id).css({
        "display": "none"
      });
      break;
  }

}
