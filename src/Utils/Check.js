function checkStatus(data, index, userName, pass){
    let arr = new Array();
  

        if(data[index].Id == userName && data[index].pass == pass){
            arr[0]='none fail'
            arr[1]='dashboard/welcome'
           
            
        }else{
            arr[0]='block fail'
            arr[1]='/'
            
        }
   
    return arr
}

function changeType(data, class1, class2){
    let arr = new Array()
    if(data == class1){
        arr[0]='text'
        arr[1]='fas fa-eye-slash'
    }else if(data == class2){
        arr[0]='password'
        arr[1]='fas fa-eye'
    }
    return arr
}

export { checkStatus as function1,
    changeType as function2 };