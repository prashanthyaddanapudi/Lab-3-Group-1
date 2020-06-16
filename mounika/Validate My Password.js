
function validPass(password){
var pass= password, num_ch=0,var_ch=0,spcl_val=0;
var length=pass.length, result;

      if(length > 3 && length < 20 )
      {
        for(i=0;i<length;i++)
         {
             var val_ch=pass.charCodeAt(i);
             if(val_ch> 47 && val_ch<58)
             {
               num_ch++;
             }
             else if (val_ch > 96 && val_ch < 123)
             {
                 var_ch++;
             } 
             else
             {
               spcl_val++;
             }
             
        }
      }
      else
      {
        result= "INVALID";
      }
      
      if(num_ch >0 && var_ch>0 && spcl_val === 0)
      {
      result="VALID";
      }
      else
      {
      result= "INVALID";
      }
      return result;
}
