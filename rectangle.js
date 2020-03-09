$(function(){
  //get dom elem
  var $width=$('#width'),
      $height=$('#height'),
      $btuCal=$('#calculate'),
      $perimeter=$('#perimeter'),
      $area= $('#area');
  /*calc button click event */
$btuCal.click(function(){
    //get value
    var w=$width.val();
    var h=$height.val();
    //calculate
    var r = new Rectangle(w, h);
    //output
    $perimeter.val(r.perimeter());
    $area.val(r.area());
});
});

