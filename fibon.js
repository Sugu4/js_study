

function recur_fibo(n){
    if(n <= 1){
        return n;
    }else{
        return (recur_fibo(n-1) + recur_fibo(n-2));
    }
}

number= 40;

if(number <= 0){
    throw new Error("Buuuuh");
}else{
    for(let i = 0; i <= number; i++){
        console.log(recur_fibo(i));

    }
}
