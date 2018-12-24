var courses = []
const courseReducer=(state=courses,action)=>
{
  switch(action.type)
  {
      case 'REFRESH_COURSE':
      return(state=action.courses)
      case 'ADD_COURSE' :
      return (
          state.concat(action.newcourse)
      )

      case 'EDIT_COURSE':
      return (
          state.map(el=>el._id===action.editcourse._id? el=action.editcourse:el)
      )
      case 'REMOVE_COURSE':
      return (
          state.filter(el=>el._id!==action._id)
      )
      default :
      return state
  }
}
export default courseReducer