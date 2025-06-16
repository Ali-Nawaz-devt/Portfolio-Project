
const Availability = () => {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-4 text-foreground">Current Availability</h2>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-foreground font-medium">Available for freelance projects</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-foreground font-medium">Open to internship opportunities</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-foreground font-medium">Remote work preferred</span>
        </div>
      </div>
      <p className="text-muted-foreground text-sm mt-4">
        Typically respond within 24 hours
      </p>
    </div>
  );
};

export default Availability;
