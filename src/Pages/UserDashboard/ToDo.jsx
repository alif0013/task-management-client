import React from 'react';

const ToDo = () => {
    return (
        <div className='grid px-5 grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='mt-10'>
                <h1 className='text-2xl md:text-4xl bg-cyan-200 rounded py-2'>To-Do</h1>
            </div>
            <div className='mt-10'>
                <h1 className='text-2xl md:text-4xl bg-orange-200 rounded py-2'>On Going</h1>
            </div>
            <div className='mt-10'>
                <h1 className='text-2xl md:text-4xl bg-green-200 rounded py-2'>Completed</h1>
            </div>
           
           
        </div>
    );
};

export default ToDo;