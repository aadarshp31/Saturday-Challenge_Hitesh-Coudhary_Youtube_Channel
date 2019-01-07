Name of Challenge: #1 Classic Cookie Challenge

Link of the Video: https://youtu.be/a4Py6rrf2Dk

Problem Statement: A Matrix containing number of 1's and 0's is given. The matrix represents a Chocochip Cookie 
                   such that the 1's are the Chocochips whereas the 0's are the other part of the cookie.
                   We need to find out the consecutively placed 1's (i.e. the chocochips) on the matrix(i.e. cookie)
                   either horizontally or vertically adjascent but not diagonally. The output should be an 
                   array containing the chocochips sizes.

Solution Approach: Loop & Array Based Approach using Javascript

Explaination for logic behind the solution: We will use the input matrix using array and for loop to iterate 
                   through each element of the input matrix. We will iterate through each matrix elements separatly
                   first by horizontally and then by vertically. The two methods will produce two arrays chocoChipsH & 
                   chocoChipsV respectively. The chocochip array among chocoChipsH & chocoChipsV which will have the 
                   least array length will be selected as our answer. As the array with least length will contain the 
                   chocochips of more size due to more consecutive arrangement of 1's.

Solution Code: 

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




