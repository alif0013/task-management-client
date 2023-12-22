import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useMyTask from "../../hooks/useMyTask";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";


const ManageTask = () => {

    const [toDos,  refetch] = useMyTask()
    const axiosPublic = useAxiosPublic()

    const handleDelete = id => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {

                    axiosPublic.delete(`/task/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {

                                refetch();

                                Swal.fire(
                                    'Deleted!',
                                    'Your Post has been deleted.',
                                    'success'
                                )

                            }

                        })
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Dashboard | Manage Task</title>
            </Helmet>

            <h2 className='text-4xl font-bold text-center mt-10'>Manage Task</h2><hr className='border-2 mt-4 md:w-[400px] mx-auto' />

            <div className='mt-10 lg:w-[800px] mx-auto'>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Deadline</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                       
                        <tbody>
                            {/* row 1 */}
                            {
                                toDos.map(todo => <>
                                    <tr>

                                        
                                        <td>{todo.title}</td>
                                        <td>{todo.deadline}</td>
                                        <td> <Link to={`/update-task`} className="btn btn-sm"><CiEdit></CiEdit></Link> </td>
                                        <td> <button onClick={() => handleDelete(todo._id)} className="btn text-xl text-red-600"><MdOutlineDelete></MdOutlineDelete></button> </td>

                                    </tr>
                                </>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default ManageTask;