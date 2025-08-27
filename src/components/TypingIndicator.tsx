export const TypingIndicator = () => {
  return (
    <div className="flex gap-2 sm:gap-3 lg:gap-4 animate-fade-in">
      <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
        <span className="text-primary-foreground text-xs sm:text-sm lg:text-base font-medium">IP</span>
      </div>
      
      <div className="bg-card text-card-foreground rounded-2xl px-3 sm:px-4 lg:px-5 py-2 sm:py-3 lg:py-4 shadow-soft">
        <div className="flex gap-1 lg:gap-1.5">
          <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-primary rounded-full animate-typing" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-primary rounded-full animate-typing" style={{ animationDelay: '200ms' }}></div>
          <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-primary rounded-full animate-typing" style={{ animationDelay: '400ms' }}></div>
        </div>
      </div>
    </div>
  );
};