const TriangleStars = function(x) {
  const Star1 = function(inp){
	if (inp<=0) {
		return "";
	}
	return "*"+Star1(inp-1);
}
  const Star2=function(inp){
  if (inp>=x)
  return "";
  return " "+Star2(inp+1);
}
const final = function(x){
if(x<1)
return "";

console.log(Star1(x)+Star2(2*x-1));
return final(x-1);

}
console.log(final(x));
};
TriangleStars(6);

 const Power = function(x,y){
   if(y===0){
   return 1;
 }
return x * Power(x, y-1);
 }

 const rev = function(str){

   const smth = function(str,ind){
     if(ind<=0){
     return"";
   }
     return str[ind-1] + smth(str,ind-1);
   };
   return smth(str,str.length);

 };

 // console.log(rev("gdyegfyet"));

const check = function(y){
  const z= function(t){
    if(t===y){
      return "" ;
    }
    if(t%2===0){
    return  "*"+ z(t+1);
    }
    else{
        return  " " +  z(t+1);
      }
    }
      const z2= function(t){
      if(t===y){
        return "";}
        if(t%2===0){
        return  " "+ z2(t+1);
        }

          else{
            return  "*" +  z2(t+1);
          }
        }

      const final = function(t)
      {
        if(t===y)
        return "";
        if(t%2===0)
        console.log(z(0));
        else {
        console.log(z2(0));
        }
        final(t+1);
      }

 final(0);
}
// console.log(check(5));
