/*
import {show, ribbon, blank, circle, square, beside, stack, beside_frac, stack_frac} from "rune";

function moony_1(bottom_right){
    
    return beside(stack(circle, square), stack(blank, bottom_right));
    
}

function moony_2(n){
    
    function internal_function(n, pic){
        
        return n === 0
                ? pic
                : internal_function(n-1, moony_1(pic));
        
    }
    
    return internal_function(n-1, circle);
            
}

function moony(n) {
    return n === 1
           ? circle
           : beside_frac(1/n,stack_frac(1/n,circle, square),
                    stack_frac(1/n,blank, moony(n - 1))); // moony_1(moony_2(n - 1));
}

show(moony(6));
*/

/*
iterative process. time = O(n), space O(n). size refers to the value of the 
integer. The assumptiopn is that calling each rune operation and primitive 
conumes negligable resources.
*/

//////////////////////////////////////////////////////////////////////////////////////
//EXTRA PRAC//
//////////////////////////////////////////////////////////////////////////////////////

function fast_expt(b,n){
    return n===1
        ? b
        :
        n%2===0
        ? fast_expt(b,n/2)*fast_expt(b,n/2)
        : b*fast_expt(b,n-1);
}

function recursion(b,n){
    function fast_expt(b,n){
        return n===1
            ? b
            :
            n%2===0
            ? fast_expt(b,n/2)*fast_expt(b,n/2)
            : b*fast_expt(b,n-1);
    }
    
    return n>0
        ? fast_expt(b,n)
        : n===0
        ? 1
        : 1/fast_expt(b,-n);
}

function iter(b,n){

    function fast_expt_iter(b,n,counter,current_answer){
        
        return n-counter===0
            ? current_answer
            : n-counter===1
            ? b*current_answer
            : counter%2===1
            ? fast_expt_iter(b,n,counter*2,current_answer*current_answer)
            :fast_expt_iter(b,n,counter+1,current_answer*b);
            
    }
        
    return n>0
        ? fast_expt_iter(b,n,1,b)
        : n===0
        ? 1
        : 1/fast_expt_iter(b,-n,1,b);

}

display(recursion(3,1));