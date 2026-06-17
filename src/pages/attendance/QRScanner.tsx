import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QrCode, CheckCircle2, AlertCircle, Camera, RefreshCw, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useAuth } from "@/hooks/use-auth";

const QRScanner = () => {
  const [scanning, setScanning] = useState(false);
  const [lastScan, setLastScan] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSimulateScan = () => {
    setScanning(true);
    // Simulate scan time
    setTimeout(() => {
      setScanning(false);
      const time = new Date().toLocaleTimeString();
      setLastScan(time);
      toast.success(`Check-in successful at ${time}`, {
        description: `Welcome, ${user?.name}! Your attendance has been recorded.`
      });
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 py-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">QR Attendance</h1>
        <p className="text-muted-foreground">Scan your company QR code to check in or out.</p>
      </div>

      <Card className="overflow-hidden border-2 border-primary/20">
        <CardHeader className="bg-primary/5 text-center">
          <CardTitle>Attendance Scanner</CardTitle>
          <CardDescription>Position the QR code within the frame</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="aspect-square bg-slate-900 relative flex flex-center justify-center items-center group overflow-hidden">
            {/* Scanner Frame UI */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-primary/50 rounded-2xl relative">
                {/* Corner Accents */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
                
                {/* Scanning Line */}
                {scanning && (
                  <div className="absolute inset-x-0 h-1 bg-primary shadow-[0_0_15px_rgba(37,99,235,0.8)] animate-scan-move"></div>
                )}
              </div>
            </div>

            {/* Simulated Camera View */}
            <div className="w-full h-full opacity-40 bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col items-center justify-center">
              <Camera className="w-16 h-16 text-slate-700" />
              <p className="text-slate-600 mt-2 text-sm font-medium">Camera Feed Active</p>
            </div>

            {!scanning && !lastScan && (
               <div className="absolute inset-0 flex items-center justify-center z-20">
                 <Button size="lg" onClick={handleSimulateScan} className="shadow-xl">
                   Start Scanning
                 </Button>
               </div>
            )}

            {scanning && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20">
                <div className="flex flex-col items-center gap-3">
                  <RefreshCw className="w-10 h-10 text-white animate-spin" />
                  <span className="text-white font-medium">Scanning for QR Code...</span>
                </div>
              </div>
            )}

            {lastScan && !scanning && (
              <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center z-20 animate-in fade-in zoom-in duration-300">
                <div className="bg-background p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-4 border border-primary/30">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">Success!</h3>
                    <p className="text-muted-foreground">Checked in at {lastScan}</p>
                  </div>
                  <Button onClick={() => setLastScan(null)} variant="outline">Scan Again</Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Today's Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Check-in:</span>
              <span className="font-bold">{lastScan || "Not yet"}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-muted-foreground">Location:</span>
              <span className="font-bold">Main Office (Zone A)</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Please ensure you are within the designated office perimeter when scanning.
          </CardContent>
        </Card>
      </div>

      <style>{`
        @keyframes scan-move {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan-move {
          animation: scan-move 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default QRScanner;
