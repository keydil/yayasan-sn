'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Heart } from 'lucide-react';

export function DonasiModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after showing success message
      setTimeout(() => {
        setIsOpen(false);
        setIsSuccess(false);
        setSelectedAmount(null);
        setCustomAmount('');
      }, 3000);
    }, 1500);
  };

  const handleAmountClick = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const isFormValid = selectedAmount || customAmount;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (!open) {
        setIsSuccess(false);
      }
    }}>
      <DialogTrigger asChild>
        <Button className="bg-emerald-100 hover:bg-emerald-200 text-emerald-700 border-0 flex items-center gap-2">
          <Heart className="w-4 h-4" />
          <span>Donasi</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-emerald-700">Mulai Berdonasi</DialogTitle>
          <DialogDescription>
            Kontribusi Anda sangat berarti untuk mendukung program kelestarian lingkungan kami.
          </DialogDescription>
        </DialogHeader>
        
        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Terima Kasih!</h3>
            <p className="text-gray-600">Donasi Anda akan segera kami proses. Kami akan mengirimkan detail instruksi pembayaran ke email Anda.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Nominal Donasi (Rp)</Label>
              <div className="grid grid-cols-3 gap-2 mb-2">
                {['50000', '100000', '500000'].map(amount => (
                  <Button 
                    key={amount} 
                    type="button" 
                    variant={selectedAmount === amount ? "default" : "outline"}
                    className={selectedAmount === amount ? "bg-emerald-600 text-white hover:bg-emerald-700 text-sm" : "text-sm"}
                    onClick={() => handleAmountClick(amount)}
                  >
                    {parseInt(amount).toLocaleString('id-ID')}
                  </Button>
                ))}
              </div>
              <Input 
                id="amount" 
                placeholder="Nominal lainnya (misal: 250000)" 
                type="number" 
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                required={!selectedAmount}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input id="name" placeholder="Masukkan nama Anda" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@contoh.com" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Pesan (Opsional)</Label>
              <Textarea id="message" placeholder="Tinggalkan pesan dukungan..." className="resize-none" />
            </div>
            
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" disabled={isSubmitting || !isFormValid}>
              {isSubmitting ? 'Memproses...' : 'Lanjutkan Donasi'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
