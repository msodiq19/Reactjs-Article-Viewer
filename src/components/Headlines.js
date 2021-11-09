import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import Article from './Article'

function Headlines() {
    const news= useSelector(state=>state.news)
    return (
        <div className="container">
            <Header />
            <div className="bg-light text-center p-2 my-5"><h1>Headlines</h1></div>
            <div className="row row-cols-1 row-cols-md-3 g-5">
                        {
                            
                            news.status? news.articles.map((article,index)=> <Article keys={index} article={article}/> ) : <p>Couldn't fetch news</p>
                        } 
            </div>
        </div>
    )
}

export default Headlines
