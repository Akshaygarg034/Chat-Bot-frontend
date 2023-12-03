import React from 'react'

function Bots() {
    return (
        <div className='w-[25%] bg-[#cac6c6] rounded-lg'>
            <ul>
                <li>
                    <div className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-200 rounded-lg">
                        <img
                            src="https://www.pngmart.com/files/23/Bot-PNG-HD.png"
                            alt="Bot 1 Avatar"
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-medium">Bot 1</span>
                    </div>
                </li>

                <li>
                    <div className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-200 rounded-lg">
                        <img
                            src="https://www.pngall.com/wp-content/uploads/15/ChatBot-PNG-Image-HD.png"
                            alt="Bot 2 Avatar"
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-medium">Bot 2</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Bots
