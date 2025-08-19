// Image showcase replacing the previous video placeholder

const VideoSection = () => {
  return (
    <section id="video" className="py-20 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            n8n Automations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A clean visual overview of powerful automations—designed to simplify complex workflows and boost productivity.
          </p>
        </div>

        <div className="relative">
          {/* Image Showcase */}
          <div className="relative aspect-video bg-brand-card rounded-2xl overflow-hidden shadow-soft ring-1 ring-white/10">
            <img
              src="/imagereplace.png"
              alt="n8n Automations showcase"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-surface/20 via-transparent to-brand-card/10 pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 bg-black/40 text-white text-xs md:text-sm px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
              n8n Automations
            </div>
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">50+</div>
              <div className="text-muted-foreground">Businesses Automated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">20hrs</div>
              <div className="text-muted-foreground">Average Time Saved Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">90%</div>
              <div className="text-muted-foreground">Reduction in Manual Tasks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;