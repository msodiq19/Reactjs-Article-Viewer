import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './Header'
import Article from './Article'

function Home() {
    const news= useSelector(state=>state.news)
    
    return (
        <>
            <Header />

            <section id="headlines">
                <Container>
                    <div className="d-flex justify-content-between my-4">
                        <h2>Headlines</h2>
                        <Link to="/headlines">see all</Link>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            
                            news.status? news.articles.map((article,index)=> index<3?<Article keys={index} article={article}/>:null ) : <p>Couldn't fetch news</p>
                        } 
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Home
