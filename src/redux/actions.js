export const getNews = (articles) => {
    return (dispatch)=>{
        dispatch({
            type: 'read',
            payload: articles
        })
    }
}