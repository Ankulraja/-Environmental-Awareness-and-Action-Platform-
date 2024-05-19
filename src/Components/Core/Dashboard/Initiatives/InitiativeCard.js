const InitiativeCard = ({ title, description, location, date, onJoin }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-6 w-full md:w-1/2 lg:w-1/3 mx-auto">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700 mb-2">{description}</p>
    <p className="text-gray-600 mb-2">Location: {location}</p>
    <p className="text-gray-600 mb-4">Date: {date}</p>
    <button onClick={onJoin} className="bg-green-500 text-white px-4 py-2 rounded">
      Join Initiative
    </button>
  </div>
  )
}
export default InitiativeCard