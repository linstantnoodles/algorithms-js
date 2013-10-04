
function ccw(a, b, c) {
  // 0 if collinear
  // 1 if CCW
  // -1 if CW
}

function grahamScan(list) {
  var hull = [];
  list.sort(function() { /* Polar angle comparator */ });
  hull.push(list.shift());
  hull.push(list.shift());

  for (var i = 0; i < list.length; i++) {
    var target = hull.pop();
    var first = hull.pop();
    while (ccw(first, target, list[i]) <= 0) {
     target = first;
     first = hull.pop();
    }

    hull.push(first);
    hull.push(target);
    hull.push(list[i]);
  }
}
