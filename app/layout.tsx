import "./globals.css";
import { WalletConnectButton } from "@/components/WalletConnectButton";

export const metadata = {
  title: "ETHealth – Telemedicine on Celo",
  description: "Pay doctors with cUSD via MiniPay",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-700">ETHealth</h1>
            <WalletConnectButton />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
