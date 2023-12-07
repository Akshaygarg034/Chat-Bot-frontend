import React from 'react'

function Bots(props) {
    return (
        <div className='w-[25%] bg-gray-800 rounded-lg text-white'>
            <div className="font-bold text-2xl p-4 border-b border-gray-600">
                Bots
            </div>
            <ul className="divide-y divide-gray-600">
                <li onClick={() => props.setBotNo(1)}>
                    <div className="flex items-center space-x-4 p-4 cursor-pointer hover:bg-gray-700">
                        <img
                            src="https://www.pngmart.com/files/23/Bot-PNG-HD.png"
                            alt="Bot 1 Avatar"
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="flex flex-col">
                            <span className="text-lg font-medium">SBERT</span>
                        </div>
                    </div>
                </li>

                <li onClick={() => props.setBotNo(2)}>
                    <div className="flex items-center space-x-4 p-4 cursor-pointer hover:bg-gray-700">
                        <img
                            src="https://www.pngall.com/wp-content/uploads/15/ChatBot-PNG-Image-HD.png"
                            alt="Bot 2 Avatar"
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="flex flex-col">
                            <span className="text-lg font-medium">INTENT</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    )
}

export default Bots
