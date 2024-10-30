export const LoadingDots = () => (
  <div className="flex space-x-1">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-2 h-2 bg-white rounded-full inline-block animate-bounce"
        style={{ animationDelay: `${i * 0.1}s`, animationDuration: '0.6s' }}
      ></span>
    ))}
  </div>
) 