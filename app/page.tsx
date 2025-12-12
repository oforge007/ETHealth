import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Heart, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-black">
      <main className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          ETHealth
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Doctor consultations for rural Ethiopia · Pay with <span className="font-bold text-green-600">cUSD</span> via MiniPay
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto my-12">
          <Card className="p-8">
            <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Book in 30 seconds</h3>
            <p className="text-muted-foreground">Choose symptom → pick doctor → pay</p>
          </Card>
          <Card className="p-8">
            <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Pay with MiniPay</h3>
            <p className="text-muted-foreground">No bank needed – just your phone</p>
          </Card>
          <Card className="p-8">
            <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Doctor gets paid instantly</h3>
            <p className="text-muted-foreground">Money released only after call ends</p>
          </Card>
        </div>

        <Button size="lg" className="text-lg px-12">
          Start Consultation →
        </Button>
      </main>
    </div>
  );
}
