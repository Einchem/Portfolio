import { Col } from 'react-bootstrap'
import "./projects.css"

const ProjectCard = ({title,description,imgUrl,href}) => {
  return (
    
    <Col  className='col-img' size={12} sm={6} md={3}>
      <a href={href}>
        <div className="proj-imgbx">
            <img  className='proj-img' src={imgUrl}/>
       <img className='proj-img' src={imgUrl} />

            <div href={href} className="proj-txtx">
                <h4>{title}</h4>
                <span href={href}> {description}</span>
            </div>
            
        </div>
        </a>
    </Col>
    
  )
}

export default ProjectCard
