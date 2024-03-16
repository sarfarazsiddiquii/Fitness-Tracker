import React from 'react';

const WorkoutDetails = ({ workout }) => {

  const handleDelete = async () => {
    try {
      const response = await fetch('/api/workouts/' + workout._id, {
        method: 'DELETE'
      });
      if (response.ok) {
        console.log('Workout deleted successfully');
        // Perform any additional actions after successful deletion
      } else {
        // Handle the case where the deletion was not successful
        console.error('Failed to delete workout:', response.statusText);
      }
    } catch (error) {
      // Handle errors that occurred during the deletion process
      console.error('Error deleting workout:', error);
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
      <button onClick={handleDelete}>Delete Workout</button>
    </div>
  );
}

export default WorkoutDetails;