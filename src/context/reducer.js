export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return {...state, savedJobs: [...state.savedJobs, action.payload.job]}

    case 'REMOVE_JOB':
      let newList = [...state.savedJobs]
      newlist = newList.filter((item) => {
        return item.id != action.payload.job.id
      })
      return {...state, savedJobs:newlist}

    case 'LOAD_DATA':
      return {...state, savedJobs: action.payload.data}
      
    default:
      return state;
  }
};
