// implemente aqui as funções de teste


/////////////////////KATAS 1//////////////////////

    const reverseString = (string) => {
        let result = ((string.split('')).reverse()).join('');
        // console.log(result);
        return result;
    }

    const testeReverseString1 = () => {
        let result = reverseString('Kenzie Academy');
        let expected = "ymedacA eizneK";
        console.assert(result === expected, {
            'function': 'reverseString',
            'esperado': expected, 
            'obtido': result
        })
    }
    testeReverseString1();

    const testeReverseString2 = () => {
        let result = reverseString('Samuel');
        let expected = "leumaS";
        console.assert(result === expected, {
            'function': 'ReverseString',
            'esperado': expected, 
            'obtido': result
        })
    }
    testeReverseString2();


/////////////////////KATAS 2//////////////////////

    const reverseSentence = (sentence) => {
        let result = ((sentence.split('')).reverse()).join('');
        // console.log(result);
        return result;
    }

    const testeReverseSentence1 = () => {
        let result = reverseSentence('No pain no gain');
        let expected = 'niag on niap oN';
        console.assert(result === expected, {
            'function': 'reverseSentence',
            'expected': expected,
            'obtido': result
        })
    }
    testeReverseSentence1()

    const testeReverseSentence2 = () => {
        let result = reverseSentence('your phone number is 91855-18-19');
        let expected = '91-81-55819 si rebmun enohp ruoy';
        console.assert(result === expected, {
            'function':'reverseSentence',
            'expected': expected,
            'obtido': result
        })

    }
    testeReverseSentence2()


/////////////////////KATAS 3//////////////////////

    const minimumValue = (array) =>{
        let result = [array[0]]
        array.forEach(el => {
            if(el < result){
                result = [el];
            }
            // console.log(result);
        });
        return result;
    }

    const testMinimumValue1 = () =>{
        let result = minimumValue([1,2,3,4,5,6,7,8,9,10]);
        let expected = [1];
        console.assert(JSON.stringify(result) === JSON.stringify(expected), {
            'function': 'minimumValue',
            'expected': expected,
            'obtido': result
        })
    }
    testMinimumValue1()

    const testMinimumValue2 = () => {
        let result = minimumValue([-5,-50,-10,10,50,5]);
        let expected = [-50];
        console.assert(JSON.stringify(result) === JSON.stringify(expected), {
            'function': 'minimumValue',
            'expected': expected,
            'obtido': result
        })

    }
    testMinimumValue2()


/////////////////////KATAS 4//////////////////////

    const maximumValue = (array) => {
        let result = array[0];
        array.forEach(el =>{
            if(el > result){
                result = [el];
            }
        })
        return result;
    }


    const testMaximumValue1 = () => {
        let result = maximumValue ([1,2,3,4,5,6,7,8,9,10]);
        let expected = [10];
        console.assert(JSON.stringify(result) === JSON.stringify(expected), {
            'function': 'maximumValue',
            'expected': expected,
            'obtido': result
        })
        
    }
    testMaximumValue1()

    const testMaximumValue2 = () => {
        let result = maximumValue([-5,-50,-10,10,50,5]);
        let expected = [50];
        console.assert(JSON.stringify(result) === JSON.stringify(expected), {
            'function': 'maximumValue',
            'expected': expected,
            'obtido': result
        })

    }
    testMaximumValue2()


/////////////////////KATAS 5//////////////////////


    const calculateRemainder = (dividendo, divisor) =>{
            return dividendo % divisor;
    }


    const testCalculateRemainder1 = () => {
        let result = calculateRemainder (5,3);
        let expected = 2;
        console.assert(result === expected, {
            'function': 'calculateRemainder',
            'expected': expected,
            'obtido': result
        })

    }
    testCalculateRemainder1 ()

    const testCalculateRemainder2 = () => {
        let result = calculateRemainder(50,2);
        let expected = 0;
        console.assert(result === expected, {
            'function': 'calculateRemainder',
            'expected': expected,
            'obtido': result
        })
    }
    testCalculateRemainder2 ()


/////////////////////KATAS 6////////////////////// 

    const distinctValues = (list) => {
        let result = [];
        list.forEach(el => {
            if(result.indexOf(el) === -1){
                result.push(el);
            }
        })
        return result;
    }


    const testDistinctValues1 = () => {
        let result = distinctValues([1,1,2,5,10,-10]);
        let expected = [1,2,5,10,-10];
        console.assert(JSON.stringify(result) === JSON.stringify(expected), {
            'function': 'distinctValues',
            'expected': expected,
            'obtido': result
        })
    }
    testDistinctValues1()

    const testDistinctValues2 = () => {
        let result = distinctValues([5,5,5,5,5,-5,0]);
        let expected = [5,-5,0];
        console.assert(JSON.stringify(result) === JSON.stringify(expected), {
            'function': 'distinctValues',
            'expected': expected,
            'obtido': result
        })
    }
    testDistinctValues2()

/////////////////////KATAS 7//////////////////////

const countValues = (list) => {
    let result = [];
    let newList = list.split(',');

    for (let i=0; i<newList.length; i++){
        let frequencia = 0;

        for(let j = 0; j < newList.length; j++){
            if(newList[i] === newList[j]){
                frequencia ++;
            }
                    
        }
        result.push(`${newList[i]}(${frequencia})`)
           
    }

    let newResult = [...new Set(result)];
    return newResult.join(','); 
}


const testCountValues1 = () =>{
    let result = countValues('1,1,2,5,8,8,-8,-5');
    let expected = '1(2),2(1),5(1),8(2),-8(1),-5(1)';
    console.assert(result === expected, {
            'function': 'countValues',
            'expected': expected,
            'obtido': result
    })

}
testCountValues1()


const testCountValues2 = () =>{
    let result = countValues('5,5,5,-5,0');
    let expected = '5(3),-5(1),0(1)';
    console.assert(result === expected, {
            'function': 'countValues',
            'expected': expected,
            'obtido': result
    })

}
testCountValues2()

/////////////////////KATAS 8//////////////////////Parei nesse...
const objValores = {
    a:5,
    b:2,
    c:10,
    d:-10,
    e:0
}

const evaluateExpression = (string, objeto) => {
    let result;

    const somar = (a,b) => a + b;
    const subtrair = (a,b) => a - b;  

    string.forEach(el=>{
        if(el === objValores || el){


            result = a + b
        }

    })

// preciso percorrer a string dada de parâmetro
// sempre que a string encontrar (letra OU +) SOMAR
// sempre que a string encontrar (- letra) SUBTRAIR
// retornar 



}


const testEvaluateExpression1 = () => {
    let result = evaluateExpression ('a + b', objValores)
   
    let expected = 7;
    console.assert(result === expected,{
        'function': 'evaluateExpression',
        'expected': expected,
        'obtido': result
    })
}
testEvaluateExpression1()


const testEvaluateExpression2 = () =>{

    let result = evaluateExpression ('a + b - c + e', objValores)
   
    let expected = -3;
    console.assert(result === expected,{
        'function': 'evaluateExpression',
        'expected': expected,
        'obtido': result
    })
}
testEvaluateExpression2()