import React, { useState, useEffect, useRef } from 'react';

function Chat(props) {
    const { botNo } = props;
    const [message, setMessage] = useState('');
    const [messagesBot1, setMessagesBot1] = useState([]);
    const [messagesBot2, setMessagesBot2] = useState([]);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messagesBot1, messagesBot2]);

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
    };

    const getApiUrl = () => {
        return (botNo === 1)
            ? 'https://a30d-2409-40d7-103a-c9b5-10d8-287-b5ad-a860.ngrok-free.app/message-sbert'
            : 'https://a30d-2409-40d7-103a-c9b5-10d8-287-b5ad-a860.ngrok-free.app/message-intent';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userMessage = { text: message, time: formatTime(new Date()) };
            if (botNo === 1) {
                setMessagesBot1((prevMessages) => [...prevMessages, { ...userMessage, position: 'left' }]);
            } else if (botNo === 2) {
                setMessagesBot2((prevMessages) => [...prevMessages, { ...userMessage, position: 'left' }]);
            }
            setMessage('');

            const apiUrl = getApiUrl();

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ msg: message }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            const responseData = await response.json();
            const botMessage = { text: responseData.Reply, time: formatTime(new Date()) };

            if (botNo === 1) {
                setMessagesBot1((prevMessages) => [...prevMessages, { ...botMessage, position: 'right' }]);
            } else if (botNo === 2) {
                setMessagesBot2((prevMessages) => [...prevMessages, { ...botMessage, position: 'right' }]);
            }
        } catch (error) {
            console.error('Error sending message:', error.message);
        }
    };

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    useEffect(() => {
        console.log('message', message);
        console.log('messagesBot1', messagesBot1);
        console.log('messagesBot2', messagesBot2);
    }, [messagesBot1, messagesBot2]);

    return (
        <div className='w-[73%]'>
            <div className="chat-header bg-gray-800 text-white p-4 rounded-t-lg">
                <h2 className="text-2xl font-bold">Chat with {botNo === 1 ? 'SBERT' : 'INTENT'}</h2>
            </div>

            <div className="container bg-gradient-to-b from-blue-200 to-blue-100 rounded-b-lg" id="chat" ref={chatContainerRef}>
                <div className='message center'>
                    You Joined the chat
                </div>

                {botNo === 1 ? (
                    // Render messages for bot 1
                    messagesBot1.map((msg, index) => (
                        <div key={index} className={`message ${msg.position}`}>
                            {msg.text}
                            <div className='time'>{msg.time}</div>
                        </div>
                    ))
                ) : (
                    // Render messages for bot 2
                    messagesBot2.map((msg, index) => (
                        <div key={index} className={`message ${msg.position}`}>
                            {msg.text}
                            <div className='time'>{msg.time}</div>
                        </div>
                    ))
                )}
            </div>

            <div className="send">
                <form action="#" id="send-container" onSubmit={handleSubmit}>
                    <input type="text" name="messageInp" autoComplete="off" id="messageInp" placeholder="Type a message" required value={message} onChange={handleChange} />
                    <button className="btn" type="submit"><i className="fas fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    );
}

export default Chat;