import { Col } from 'react-bootstrap'
import "./projects.css"

const ProjectCard = ({title,description,imgUrl}) => {
  return (
    <Col className='col-img' size={12} sm={6} md={3}>
        <div className="proj-imgbx">
            <img className='proj-img' src={imgUrl}/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard
