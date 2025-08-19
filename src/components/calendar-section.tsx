import { Calendar } from "lucide-react";
import CalBooking from "./cal-booking";

const CalendarSection = () => {
  return (
    <section id="calendar" className="py-20 bg-gradient-to-b from-brand-dark to-brand-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
           Book a free 30-min call with our automation experts, get a quick workflow audit and see how much time & money you can save.
          </p>
        </div>

        {/* Centered Calendar */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="bg-brand-card rounded-2xl p-8 shadow-soft">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Schedule Your Free Discovery Call
                </h3>
              </div>

              {/* Clean UI: primary CTA opens scheduler directly, optional inline embed below */}
              <div className="flex justify-center mb-6">
                <CalBooking
                  calLink="pavan-reddy/simplify-business-operations-with-automation-book-your-free-call"
                  embedType="link"
                  className="w-full sm:w-auto"
                />
              </div>

              <div className="rounded-xl overflow-hidden">
                <CalBooking 
                  calLink="pavan-reddy/simplify-business-operations-with-automation-book-your-free-call"
                  height="600px"
                  theme="dark"
                  layout="month_view"
                  className="rounded-xl"
                />
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground">
                  Free consultation • No commitment required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;