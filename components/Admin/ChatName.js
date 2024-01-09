import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { Image } from 'react-bootstrap';

const ChatName = ({ userName, id }) => {

    //need to dynamically set background color for active chat so the user knows. 
    const params = useParams()
    console.log(params)

    return (
        <Link href={`/admin/${id}`}>
            <div className={`border rounded ${params?.id === id ? 'bg-green' : 'bg-white'} my-2 p-2 d-flex justify-content-start align-items-center`}>
                <div className='px-2'>
                    {/* <Image src="profile-image.png" roundedCircle width={30} /> */}

                </div>
                <div className='d-flex flex-wrap'>
                    <span className='text-wrap text-break'>{userName}</span>
                </div>

            </div>
        </Link>
    );
};

export default ChatName;
