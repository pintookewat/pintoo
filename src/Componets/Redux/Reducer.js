const initalstate = 1;

const changeNumber = (state = initalstate, action) => {
   


 
   if(state <= 1){
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state ;
        default: return state;


    }
   }
   
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state;


    }

}

export default changeNumber;