import React from 'react';
import useMyTask from '../../hooks/useMyTask';

const ToDo = () => {
    const [toDos] = useMyTask()




    return (
        <div className='grid px-5 grid-cols-1md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='mt-10 '>
                <h1 className='text-2xl text-center md:text-4xl bg-cyan-200 rounded py-2 mb-8'>To-Do</h1>


             
                    {
                        toDos.map(todo => <>
                            <div className='border-2 mb-2 border-green-300 px-5 py-5 rounded'>

                                <div className="flex gap-5">
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={todo.userImg} />
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="pb-1 font-bold">{todo.name}</h2>

                                        <div className='flex gap-3'>
                                            <h3>{todo.date}</h3>
                                            <h3>{todo.currentTime}</h3>

                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h1 className="font-bold">{todo.title}</h1>
                                    <h2 className="font-semibold bg-orange-200 w-20 px-2 py-1 rounded pt-1">{todo.tags}</h2>
                                    <h2>DeadLine: {todo.deadline}</h2>
                                </div>

                                <div className='mt-5 mb-5'>
                                    {todo.description}
                                   

                                </div>
                            </div>
                        </>)
                    }
                



            </div>






            <div className='mt-10'>
                <h1 className='text-2xl text-center md:text-4xl bg-orange-200 rounded py-2 mb-8'>On Going</h1>
            </div>
            <div className='mt-10'>
                <h1 className='text-2xl text-center md:text-4xl bg-green-200 rounded py-2 mb-8'>Completed</h1>
            </div>


        </div>
    );
};

export default ToDo;