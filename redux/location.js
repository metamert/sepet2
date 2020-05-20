export const addlocation=(item)=>({
type:"addlocation",
payload:item

})

const INITIAL_STATE={
location:null

}



export const locationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
     
      case "addlocation":
        return {
          ...state,
        location:action.payload
        };
 
    
      default:
        return state;
    }
  };