import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img 
              src="/Frame 13.png" 
              alt="AgentPlus" 
              className="h-10 w-auto"
            />
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Streamlining business workflows through intelligent automation solutions.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
            <span>ceo@agentplus.ltd</span>
            <span>•</span>
            <span>1-800-AGENTPLUS</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/30 text-sm text-muted-foreground">
            <div className="flex flex-col items-center gap-4">
              {/* Legal Links */}
              <div className="flex items-center gap-4">
                {/* Privacy Policy */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="hover:text-foreground transition-colors">Privacy Policy</button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-brand-card border-border">
                    <DialogHeader>
                      <DialogTitle className="text-foreground">Privacy Policy</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-left text-sm leading-6 text-muted-foreground">
                      <p>
                        We respect your privacy and are committed to protecting your personal data. This policy describes
                        what we collect, how we use it, and your rights.
                      </p>
                      <p className="text-foreground font-medium">Information We Collect</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Basic contact details you share with us (name, email, phone).</li>
                        <li>Analytics and usage information to improve our website experience.</li>
                        <li>Booking information when you schedule a call via our scheduling provider.</li>
                      </ul>
                      <p className="text-foreground font-medium">How We Use Information</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>To respond to inquiries and provide our services.</li>
                        <li>To schedule and manage calls through our provider (Cal.com).</li>
                        <li>To improve site performance and communications.</li>
                      </ul>
                      <p>
                        We do not sell your data. You can request access or deletion of your data by contacting us at
                        <span className="text-foreground"> ceo@agentplus.ltd</span>.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>

                <span>•</span>

                {/* Terms of Service */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="hover:text-foreground transition-colors">Terms of Service</button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-brand-card border-border">
                    <DialogHeader>
                      <DialogTitle className="text-foreground">Terms of Service</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-left text-sm leading-6 text-muted-foreground">
                      <p>
                        By using our website and services, you agree to these terms. If you do not agree, please do not
                        use the site.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Services are provided on an as‑is basis without warranties of any kind.</li>
                        <li>You are responsible for the content you submit and for complying with applicable laws.</li>
                        <li>We may update these terms from time to time; continued use means you accept the changes.</li>
                      </ul>
                      <p>
                        For inquiries, contact <span className="text-foreground">ceo@agentplus.ltd</span>.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div>© 2025 AgentPlus. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;