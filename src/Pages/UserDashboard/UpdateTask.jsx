import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const UpdateTask = () => {

    const { user } = useAuth();
    const [selectedTags, setSelectedTags] = useState(''); // Initialize state for the selected level
    const axiosPublic = useAxiosPublic()
    // const [ , refetch] = usePosts()
    const { id } = useParams();
    // console.log(id);

    const handleAddPost = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const tags = selectedTags; // Use the selectedLevel from state
        const deadline = form.deadline.value;
 
        const updateTask = { title,  description, tags, deadline }
        // console.log(newPost);
        axiosPublic.put(`update-task/${id}`, updateTask)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success('Task update Successfully!')

                    //refetch post to update the data 
                    // refetch();
                }
            })
    }


    const handleSelectTags = e => {
        setSelectedTags(e.target.value); // Update selectedLevel state when the select value changes
    };

    return (
        <div>
        <Helmet>
            <title>Dashboard | Update Task</title>
        </Helmet>

        <h2 className='text-4xl font-bold text-center mt-10'>Update Task</h2><hr className='border-2 mt-4 md:w-[400px] mx-auto' />

        <div className='px-4 rounded'>
            <div className='text-center rounded p-20 bg-[#F0F0F0] mt-10'>

                <form onSubmit={handleAddPost}>
                    <div className='mt-3'>
                        <input type="text" name='title' placeholder="Title" className="input input-bordered w-full max-w-xs mr-5 mb-3" />
                        <input type="text" name='description' placeholder="Description" className="input input-bordered w-full max-w-xs" />

                    </div>
                    
                    <div className='mt-3'>
                        {/* <input type="text" name='level' placeholder="Easy, Medium, Hard" className="input input-bordered w-full max-w-xs mr-5 mb-3" /> */}
                        <select
                            className="select input select-bordered w-full max-w-xs mr-5"
                            onChange={handleSelectTags} // Handle select change
                            value={selectedTags} // Set the selected value from state
                        >
                            <option value="" disabled selected>Priority Level</option>
                            <option value="high">High</option>
                            <option value="moderate">Moderate</option>
                            <option value="low">Low</option>

                        </select>

                        <input type="text" name='deadline' placeholder="Deadline" className="input input-bordered w-full max-w-xs" />

                    </div>

                    <div className='mt-3'>


                    </div>

                    <button type='submit' className="btn md:w-[660px] text-white text-center bg-gradient-to-r from-[#4A00E0] to-blue-500 mt-6">Update Task</button>


                </form>


            </div>
        </div>
    </div>
    );
};

export default UpdateTask;