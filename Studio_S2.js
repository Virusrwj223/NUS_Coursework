//1
function biggie_size (regular_combo_no){
    return regular_combo_no+4;
}

//2
function unbiggie_size (biggie_sized_no){
    return biggie_sized_no-4;
}

//3
function is_biggie_size(combo_no){
    return combo_no<=4?false:true;
}

//4
function combo_price(combo_no){
    return is_biggie_size(combo_no)?(combo_no-4)*1.17+0.5:combo_no*1.17;
}

//5
function empty_order(){
    return 0;
}

//6
function add_to_order(order,combo){
    return stringify(order)+stringify(combo);
}

//7
function last_combo(order){
    return order-math_trunc(order/10)*10;
}

//8
function other_combos(order){
    return math_trunc(order/10);
}
