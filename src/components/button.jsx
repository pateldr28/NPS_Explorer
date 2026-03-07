export default function Button({ children, onClick }) {
    return (
        <button 
        onClick={onClick}
        className="px-4 py-2 rounded font-semibold text-white hover:bg-gray-800">
            {children}
        </button>
    )
}
