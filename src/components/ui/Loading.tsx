import { memo } from 'react';

const Loading = memo(() => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-slate-950">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-40 h-40 rounded-full animate-spin border-8 border-dashed border-blue-400 border-t-transparent opacity-50"></div>
        <div 
          role="img"
          aria-label="Avión cargando"
          className="w-[128px] h-[128px] animate-plane relative"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-full h-full text-blue-400"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </div>
      </div>
    </div>
  );
});

Loading.displayName = 'Loading';

export default Loading;
