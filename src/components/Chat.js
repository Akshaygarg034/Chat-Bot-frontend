import React from 'react'

function Chat() {
    return (
        <div className='w-[73%]'>
            <div className="container rounded-t-lg" id="chat"></div>
            <div className="send">
                <form action="#" id="send-container">
                    <input type="text" name="messageInp" autocomplete="off" id="messageInp" placeholder="Type a message" required />
                    <button className="btn" type="submit"><i className="fas fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    )
}

export default Chat
