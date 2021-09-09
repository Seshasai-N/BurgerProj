import * as actiontypes from '../Actions/actionTypes'



const intialState ={
    token:null,
    userId:null,
    loading:false,
    error:null
}

const reducer=(state=intialState,action)=>{

    switch(action.type){
        case actiontypes.AUTH_START:
            return{
                ...state,
                loading:true,
                error:null

            }
            case actiontypes.AUTH_SUCCESS:
                return{
                    ...state,
                    
                    token:action.idToken,
                    userId:action.userId,loading:false,
                    error:null
    
                }
    
                case actiontypes.AUTH_FAIL:
                    return{
                        ...state,
                        loading:false,
                        error:action.error
                             
                    }
        
                    case actiontypes.AUTH_LOGOUT:
                        return{
                            ...state,
                           token:null,
                           userId:null,
                           error:null,
                           loading:false
                                 
                        }
            
default :
return state
    }
}

export default reducer