
const Cookies = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 rounded-lg p-4 flex items-center justify-between max-w-lg w-full border border-gray-800">
        <p className="text-gray-300 text-sm">This website accepts cookies.</p>
        <div className="flex space-x-4">
          <button className="text-gray-300 hover:text-white">Accept</button>
          <button className="text-gray-300 hover:text-white">Decline</button>
        </div>
      </div>
  )
}

export default Cookies