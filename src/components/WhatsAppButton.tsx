import React from 'react';

interface WhatsAppButtonProps {
  darkMode: boolean;
}

export function WhatsAppButton({ darkMode }: WhatsAppButtonProps) {
  const phoneNumber = '917558026894';
  const displayPhone = '+91 75580 26894';
  const customMessage = 'Hello CyberWise Skillversity! I am interested in your programs and would like to know more about admission details and batches.';
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage)}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 group">
      
      {/* Glow highlight animation behind the icon button */}
      <span className="absolute -inset-1 rounded-full bg-emerald-500/45 blur-md opacity-75 group-hover:opacity-100 group-hover:scale-110 duration-500 animate-pulse" />

      {/* Main WhatsApp CTA Anchored Link */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact CyberWise on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-106 active:scale-95 cursor-pointer-parent"
      >
        {/* WhatsApp High-fidelity custom SVG logo */}
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          fill="currentColor" 
          className="drop-shadow-sm"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.86.002-2.636-1.023-5.111-2.887-6.978C16.58 1.83 14.113.805 11.472.805 6.035.805 1.611 5.225 1.607 10.66c-.001 1.705.447 3.37 1.298 4.843l-.99 3.613 3.732-.979zm11.393-5.393c-.3-.149-1.778-.878-2.053-.978-.276-.1-.476-.149-.676.15-.2.299-.775.978-.95 1.177-.175.199-.35.224-.65.075-.3-.149-1.267-.467-2.413-1.49-1.012-.903-1.696-2.018-1.895-2.317-.2-.299-.022-.461.128-.611.135-.134.3-.349.45-.523.15-.174.2-.299.3-.498.1-.199.05-.374-.025-.524-.075-.15-.676-1.629-.925-2.227-.243-.584-.489-.505-.675-.515-.175-.008-.375-.011-.575-.011s-.525.075-.8.374c-.275.299-1.05 1.027-1.05 2.505 0 1.478 1.075 2.906 1.225 3.105.15.199 2.115 3.23 5.124 4.532.715.31 1.273.495 1.708.633.719.228 1.374.195 1.892.118.577-.087 1.778-.727 2.028-1.429.25-.7.25-1.3.175-1.429-.075-.125-.275-.199-.575-.349z"/>
        </svg>
      </a>

      {/* Pop-up customized tooltip on hover aligned precisely above/beside */}
      <div className={`absolute bottom-full left-0 mb-4 ml-1 flex flex-col items-start scale-0 group-hover:scale-100 transition-all duration-300 origin-bottom-left pointer-events-none w-56 ${
        darkMode ? 'text-white' : 'text-slate-900'
      }`}>
        <div className={`p-3 rounded-2xl border text-xs leading-relaxed font-sans shadow-2xl ${
          darkMode 
            ? 'bg-cyber-dark/95 border-purple-500/20 text-slate-200' 
            : 'bg-white border-purple-150 text-slate-800'
        }`}>
          <div className="flex items-center space-x-1.5 text-emerald-500 font-bold mb-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Chat Live on WhatsApp</span>
          </div>
          <p className="text-[11px] opacity-90">
            Click to start instant consultation with our Admissions Advisor at:
          </p>
          <span className="block font-mono font-bold mt-1 text-emerald-500">
            {displayPhone}
          </span>
        </div>
        
        {/* Soft custom wedge pointing to the button */}
        <div className={`w-3 h-3 rotate-45 -mt-1.5 ml-6 border-r border-b ${
          darkMode ? 'bg-cyber-dark border-purple-500/20' : 'bg-white border-purple-150'
        }`} />
      </div>

    </div>
  );
}
