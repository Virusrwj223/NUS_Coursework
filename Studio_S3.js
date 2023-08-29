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

/*
iterative process. time = O(n), space O(n). size refers to the value of the 
integer. The assumptiopn is that calling each rune operation and primitive 
conumes negligable resources.
*/