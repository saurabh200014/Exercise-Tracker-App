import React from 'react'
import Editexercise from './edit-exercise.component'
import { useParams } from "react-router-dom";

function Editexercisecover() {
  const { id } = useParams();
  return (
    <div>
      <Editexercise id={id}/>
    </div>
  )
}

export default Editexercisecover