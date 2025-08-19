import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";
import CalBooking from "./cal-booking";

interface BookingModalProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  height?: string;
}

const BookingModal = ({ 
  children, 
  title = "Schedule Your Free Discovery Call",
  description = "Book a 30-minute consultation with our automation experts",
  height = "600px"
}: BookingModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="cta" className="group">
            <Calendar className="w-4 h-4 mr-2" />
            Book Free Call
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full h-[90vh] max-h-[800px] bg-brand-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-foreground mb-2">
            {title}
          </DialogTitle>
          <p className="text-muted-foreground text-sm">
            {description}
          </p>
        </DialogHeader>
        <div className="flex-1 mt-4">
          <CalBooking 
            calLink="pavan-reddy/simplify-business-operations-with-automation-book-your-free-call"
            height={height}
            theme="dark"
            layout="month_view"
            embedType="inline"
            className="h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal; 