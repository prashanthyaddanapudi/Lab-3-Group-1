function maxMultiple(divisor, bound){
 var  m= Math.floor(bound/2), ar=[];
  for(i=1;i<=m;i++)
  {
   var mul_val=i*divisor;
   if(mul_val<=bound)
   ar.push(mul_val);
  }
   var l=ar.length-1;
  return ar[l];
}

