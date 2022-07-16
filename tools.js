function getRandom(x, y) {
    return Math.random() * (y - x) + x;
  }
  function move(box, prop, start, end, t, fn) {
    var distance = start;
    var step = ((end - start) / t) * 10;
    var tid = setInterval(function () {
      distance += step;
      box.style[prop] = distance + "px";
      if ((distance >= end && step > 0) || (step < 0 && distance <= end)) {
        clearInterval(tid);
        box.style[prop] = end + "px";
        if (typeof fn === "function") {
          fn();
        }
      }
    }, 10);
    box.setAttribute("tid", tid);
  }
  Element.prototype.clearInterval = function () {
    var tid = this.getAttribute("tid");
    clearInterval(tid);
  };
  