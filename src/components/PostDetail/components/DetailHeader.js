import { Button } from "react-bootstrap";
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const DetailHeader = (props) => {
  return (
    <div className="d-sm-flex justify-content-between">
      <h1>Post Detail</h1>
      <div className="mt-2 justify-content-end">
        <Button variant="success" className="mr-2"><FaEdit className="mb-1" /> Edit</Button>
        <Button variant="danger" onClick={props.deletePost}><FaTrashAlt className="mb-1" /> Delete</Button>
      </div>
    </div>
  )
}

export default DetailHeader
