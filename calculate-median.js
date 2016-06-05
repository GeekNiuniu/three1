function calculate_median(arr) {
  //请勿改动函数名
 var b=new Array();
 var c=new Array();
 for(var i=0;i<arr.length/2;i++){
 	b[i]=arr[2*i+1];console.log(b[i]);
}
 c=b.sort(function(a,b){
	return a-b
});



var len=Math.ceil(c.length/2)+1;console.log(len);
(function()
{
	if(len%2==0)
	return (c[len/2]+c[len/2-1])/2;
else
	return c[len/2-1];
}
)
();
  

   

module.exports = calculate_median;
