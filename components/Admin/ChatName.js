import React from 'react';
import { Image } from 'react-bootstrap';

const ChatName = ({ userName, recentMessage }) => {
    return (
        <div className='border rounded bg-green my-2 p-2 d-flex justify-content-start align-items-center'>
            <div className='px-2'>
                <Image src="profile-image.png" roundedCircle width={30} />

            </div>
            <div className='d-flex flex-wrap'>
                <span>{userName}</span>
                <span className='text-muted px-2 text-truncate'>{recentMessage}</span>
            </div>

        </div>
    );
};

export default ChatName;
