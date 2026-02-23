import loginimage from"../../../assets/Login Image.png";

export default function RightPanel() {
  return (
    <div
      className="hidden md:flex md:w-1/2 flex-col items-center justify-center p-12 text-white relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${loginimage})` }}
    >
      <div className="absolute inset-0 bg-blue-900/40 backdrop-brightness-75" />

      <div className="relative z-10 max-w-md text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight">Welcome to the Future of HR Management</h1>
        <p className="mb-12 text-lg text-white/90 font-light">
          Streamline your workforce operations with powerful tools designed for modern HR professionals.
        </p>

        <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
          <div className="mb-2 flex items-center justify-center gap-2 font-semibold">
            <span role="img" aria-label="lightbulb">💡</span>
            <span>HR Tip of the Day</span>
          </div>
          <p className="text-sm opacity-90">Tip: Schedule regular one-on-ones to boost employee engagement by 40%.</p>
        </div>
      </div>
    </div>
  );
}
