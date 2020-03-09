
function Rectangle(wid, hei) {

  var w = Number(wid),
      h = Number(hei);

    this.area = function() {
        return retain(w*h,2);
            
    };

    this.perimeter = function() {
        return retain(2*(w+h),2);
            
    };

}
function retain(s,n){
    return Math.round(s * Math.pow(10, n)) / Math.pow(10, n);

}
