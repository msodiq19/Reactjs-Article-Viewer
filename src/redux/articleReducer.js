const initialState= {
    status: "",
    articles : [],
    categories: ["general","technology","health","entertainment","science","sport"]
}

const viewArticle = (state=initialState, action)=>{
    switch(action.type){
        case 'read':
            return {...state, status: action.payload.status , articles: action.payload.articles }
        default:
            return state
    }
}

export default viewArticle