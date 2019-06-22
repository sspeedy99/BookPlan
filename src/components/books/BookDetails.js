import React from 'react'

const BookDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
           <div className="card z-depth-0">
               <div className="card-content">
                    <span className="card-title">Book Title - {id}</span>
                    <p>Quis excepteur sunt nisi cupidatat ipsum deserunt ad quis. Ad fugiat enim culpa culpa id pariatur ex ut. Eu cupidatat magna incididunt dolore magna do eu deserunt ex.</p>
               </div>
               <div className="card-action grey lighten-4 grey-text">
                   <div>Posted by Shashi Prakash</div>
                   <div>2nd, September, 2am</div>
               </div>
            </div> 
        </div>
    )
}

export default BookDetails;
