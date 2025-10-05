export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 via-white to-green-200 px-4">
      <div className="bg-white/90 shadow-2xl rounded-2xl p-10 max-w-2xl w-full">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-8 justify-center">
          <div className="bg-gradient-to-tr from-green-200 to-green-800 rounded-full w-12 h-12 flex items-center justify-center shadow-md">
            <span className="text-white text-3xl font-extrabold font-mono">SS</span>
          </div>
          <span className="ml-2 text-3xl font-bold text-blue-700 tracking-tight font-sans">
            SHERIF<span className="text-green-500">STORE</span>
          </span>
        </div>
        <h2 className="text-3xl font-extrabold text-blue-700 mb-4 text-center">About SHERIFSTORE</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          <span className="font-bold text-green-600">SHERIFSTORE</span> is your trusted platform for discovering, a proffesional website development and Design across Nigeria. Our mission is to connect property seekers with verified agents and the best real estate opportunities, making the process simple, transparent, and secure.
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Easy-to-use platform for client who needs a Proffesional website</li>
            <li>Verified listings Items</li>
            <li>Advanced search and filter options</li>
            <li>Direct contact with trusted agents</li>
            <li>Secure and transparent transactions</li>
          </ul>
        </div>
        <p className="text-gray-600 text-center">
          Whether you’re looking to find your dream website, brand design, or showcase your style to us,we are ready to take your business to the digital world <span className="font-bold text-blue-700">Agent9ja</span> is here to help you every step of the way.
        </p>
      </div>

    </main>
  );
}