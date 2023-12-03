import React from 'react'

function Chat(props) {
    const {botNo} = props;
    return (
        <div className='w-[73%]'>
            <div className="chat-header bg-gray-800 text-white p-4 rounded-t-lg">
                <h2 className="text-2xl font-bold">Chat with Bot {botNo}</h2>
            </div>

            <div className="container bg-gradient-to-b from-blue-200 to-blue-100 rounded-b-lg" id="chat">

                <div className='message center'>
                    Akshay Joined the chat
                </div>

                <div className='message left'>
                    Hello there!
                    <div className='time'> 10:11 AM</div>
                </div>

                <div className='message right'>
                    Hi
                    <div className='time'> 10:12 AM</div>
                </div>
            </div>

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
