export const TypingIndicator = () => {
  return (
    <div className="flex gap-3 animate-fade-in">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
        <span className="text-primary-foreground text-sm font-medium">IP</span>
      </div>
      
      <div className="bg-card text-card-foreground rounded-2xl px-4 py-3 shadow-soft">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-typing" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-typing" style={{ animationDelay: '200ms' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-typing" style={{ animationDelay: '400ms' }}></div>
        </div>
      </div>
    </div>
  );
};