var matrix = [ [1,0,0,1,0], [1,0,1,0,0], [0,0,1,0,1], [1,0,1,0,1], [1,0,1,1,0] ], //Input matrix
    countH = 0,                                                                   //count value for Horizontal method
    countV = 0,                                                                   //count value for Vertical method
    chocoChipsH = [],                                                             //array result for Horizontal method
    chocoChipsV = [],                                                             //array result for Vertical method
    answer;                                                                       //answer for the challenge

        //Method 1: Checking Horizontally for chocochips
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {    
            
            //Check for elements having value 1
            if(matrix[i][j] == 1){
                countH++

            //Check for elements having value 0 
            }else if(matrix[i][j] == 0 && countH !=0){
                chocoChipsH.push(countH);
                countH = 0;
            }

            //Check for last element & add the countH value to the array 'chocoChipsH' only if countH is not equal to 0.
            if((i == (matrix.length-1) && j == (matrix.length-1) && countH !=0)){
                chocoChipsH.push(countH);
            }
        }    
    }

    //Method 2: Checking Vertically for chocochips
    for (let j = 0; j < matrix.length; j++) {
        for (let i = 0; i < matrix.length;i++) {
            //Check for elements having value 1
            if(matrix[i][j] == 1){
                countV++

            //Check for elements having value 0 
            }else if(matrix[i][j] == 0 && countV !=0){
                chocoChipsV.push(countV);
                countV = 0;
            }

            //Check for last element & add the countV value to the array 'chocoChipsV' only if countV is not equal to 0.
            if((i == (matrix.length-1) && j == (matrix.length-1) && countV !=0)){
                chocoChipsV.push(countV);
            }
        }    
    }

    /**Comparing the length arrays formed by Horizontal & Vertical methods
       Answer will contain the array with minimum length, as the length of
       the chocochip array will decrease with increase in number of consecutive 1's*/
    if(chocoChipsH.length<chocoChipsV.length){
        answer = chocoChipsH;
    }else{
        answer = chocoChipsV;
    }

    //Answer contains an array of size of consecutive chocochips(1's) 
console.log(answer);