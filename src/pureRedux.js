const {createStore} =require('redux')


const initialState ={
    age:21
};

// reducer

const myReducer =(state=initialState,action)=>{
const newState={...state};


if(action.type === 'ADD'){
    newState.age +=action.val;
}


if(action.type==='SUBSTRACT'){
    newState.age -=action.val;
}

return newState;
}

// store


const store =createStore(myReducer);

store.subscribe(()=>{
    console.log('initial state' + JSON.stringify(store.getState()));

})




// dispatch

console.log('initial state' + JSON.stringify(store.getState()));


store.dispatch({type:'ADD',val:10});
console.log('after add' +  JSON.stringify(store.getState()));


store.dispatch({type:'SUBSTRACT',val:10});
console.log('after substract' + JSON.stringify(store.getState()));


console.log(store.getState());