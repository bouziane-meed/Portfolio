import React from "react"
import * as Style from "./styles"
import { Button } from "../UI/button"
import { Link } from "gatsby"

const ProjectCard = ({
  name,
  url,
  description,
  topic = ["react.js", "node.js", "javascript"],
}) => {
  return (
    <Style.Card>
      <div className="Card">
        <div className="CardFront">
          <div className="CardImage"></div>
          <h1>
            <span id="CardTitle">{name}</span>
          </h1>
          <div className="CardDetails"> {description}</div>
        </div>
        <div className="CardBack">
          <div className="BackButton">
            <Button url={url}>GITHUB REPOSITORY</Button>
            <Link
              to="/model"
              state={{
                modal: true,
              }}
            >
              Login
            </Link>
          </div>
          <ul>
            {topic.map(e => {
              return <li>{e}</li>
            })}
          </ul>
        </div>
      </div>
    </Style.Card>
  )
}

export default ProjectCard
