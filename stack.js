function addOne(num){num + 1}

function getNum(){
    return addOne(10)
}

function c(){
    return getNum() + getNum()
}

c()