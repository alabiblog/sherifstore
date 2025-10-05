export default function Popup({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full flex flex-col items-center border border-green-200">
        <div className="bg-gradient-to-tr from-green-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent Successfully!</h3>
        <p className="text-gray-700 mb-6 text-center">One Of Our Agent Will Get Back To You Immediatly <span className="font-bold text-green-500">SHERIFSTORE.</span></p>
        <button
          onClick={onClose}
          className="bg-gradient-to-tr from-green-500 to-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:scale-105 transition"
        >
          Ok
        </button>
      </div>
    </div>
  );
}
