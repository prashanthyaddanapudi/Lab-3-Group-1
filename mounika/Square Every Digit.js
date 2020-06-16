function squareDigits(num){
      var j=1,total="";
      var k=num.toString().length;
      for(i=0;i<k;i++)
      {       
        k1=Math.floor((num/j) % 10);
        var m1=k1*k1;
        j=j*10;
        total=m1+total;
      }

      return parseInt(total);
  
}
