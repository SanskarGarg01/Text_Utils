import React from 'react';
export default function Alert(props) {

    // Since JS does not have any function to capitalize first character so we will make our own function.Here first we have lower all the characters in the string then we have capitalize the first character which is at index 0 and then we concatenate the remaining string using slice which copy the string by leaving the characters assigned to it.Here slice(1) mean it will leave first character of string and return the remaining characters which will then concatenated with toUpperCase() function. 

    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
//  && is used to check whether the alert is null or not.If null then it will not return anything and if yes then it will return the strong tag part.
<div style={{height:'50px'}}>
  { props.alert &&   <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"
   >
<strong>{capitalize(props.alert.type)} </strong>:{props.alert.msg}

  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>}  
</div>
  );
}
