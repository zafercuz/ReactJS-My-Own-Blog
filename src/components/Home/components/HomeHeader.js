import CreateButton from './CreateButton'

const HomeHeader = (props) => {
  return (
    <div className="d-flex justify-content-between">
      <h3>Home Page</h3>
      <CreateButton createpost={props.createpost} />
    </div>
  )
}

export default HomeHeader
