
import { MessageCircle } from 'lucide-react';

const FloatingBubble = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button className="bg-[#63316b] text-white p-4 rounded-full shadow-2xl hover:bg-[#63316b]/90 transition-all duration-300 hover:scale-110 glass backdrop-blur-sm border border-[#63316b]/20">
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      <div className="absolute bottom-16 right-0 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 w-64 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none glass border border-white/30 transform translate-y-2 group-hover:translate-y-0">
        <p className="text-sm font-semibold text-gray-900 mb-2">
          Ready to transform your smile?
        </p>
        <p className="text-xs text-gray-600">
          Chat with our dental experts today.
        </p>
      </div>
    </div>
  );
};

export default FloatingBubble;
