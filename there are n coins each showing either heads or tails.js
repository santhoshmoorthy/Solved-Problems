// there are n coins each showing either heads or tails we would like all the coins to form a sequence of alternating head or tails javascript


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    
    if(A.length > 0) {
        let count1 =0;
        let count2 =0;
        for(i=0; i<A.length; i++) {
            if(i % 2 === 0) {
                if(A[i] === 1) {
                    count1 =count1+1;
                }
                 if(A[i] === 0) {
                    count2 =count2+1;
                }
            } else {
                if(A[i] === 0) {
                    count1 =count1+1;
                }
                if(A[i] === 1) {
                     count2 =count2+1;
                }
            }
            }

        return (count1>count2) ? count2: count1
        }
    }