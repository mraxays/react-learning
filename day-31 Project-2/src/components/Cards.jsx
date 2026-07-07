import React from 'react'
import Card from './Card'


function Cards() {
    return (
        <div className='w-full'>
            <div className="max-w-5xl mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <Card start={false} para={true} />
                <Card widthClass="md:col-span-2" start={true} para={false} />
            </div>
        </div>
    )
}

export default Cards