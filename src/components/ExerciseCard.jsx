

function ExerciseCard({item}) {
  return (
    <div className="container flex my-3" 
             key={item.id}>
             Exercise: {item.exercise} <br />
             Focus Area: {item.category} <br />
             Description: {item.exercise_description} <br />
    </div>
  )
}

export default ExerciseCard
