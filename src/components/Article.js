import React from 'react'
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    CardSubtitle
} from 'reactstrap'


function Article(props) {
    const { article } = props
    return (
          <Card className="col article">
            <CardImg top width="100%" height="200rem" src={article.urlToImage} alt="Card image" />
            <CardBody>
                <CardTitle tag="h5">{article.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{article.author}</CardSubtitle>
                <CardText>{article.description}</CardText>
                <CardText className="mb-2 text-muted"><small>published at {article.publishedAt}</small></CardText>
                <a href={article.url} target="_blank" className="btn btn-primary" rel="noreferrer">Read More</a>
            </CardBody>
           </Card>  
    )
}

export default Article
