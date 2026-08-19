'use client';

import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { uploadImageToSupabase } from '@/lib/supabase';

interface MultiImageUploadProps {
  value: string[];
  onChange: (value: string[]) => void;
  label?: string;
}

export function MultiImageUpload({ value = [], onChange, label = 'Dokumentasi Foto Tambahan' }: MultiImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          const maxWidth = 1200;
          const maxHeight = 1200;

          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve(event.target?.result as string);
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
          resolve(dataUrl);
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (err) => reject(err);
    });
  };

  const handleFilesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const newUrls: string[] = [...value];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      try {
        try {
          const publicUrl = await uploadImageToSupabase(file, 'documentation');
          newUrls.push(publicUrl);
        } catch (storageErr) {
          console.warn('Storage upload failed, fallback to compressed Base64:', storageErr);
          const base64 = await compressImage(file);
          newUrls.push(base64);
        }
      } catch (err) {
        console.error('Failed to upload documentation image:', err);
      }
    }

    onChange(newUrls);
    setIsUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleRemove = (index: number) => {
    const updated = value.filter((_, idx) => idx !== index);
    onChange(updated);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
          {label} <span className="text-gray-400 font-normal">(Opsional - Bisa pilih banyak foto)</span>
        </label>
        <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
          {value.length} Foto Terpilih
        </span>
      </div>

      {/* Grid of uploaded photos */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {value.map((url, idx) => (
          <div key={idx} className="relative aspect-square rounded-xl border border-gray-200 bg-gray-50 overflow-hidden group shadow-sm">
            <img src={url} alt={`Dokumentasi ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <button
              type="button"
              onClick={() => handleRemove(idx)}
              className="absolute top-1.5 right-1.5 bg-red-600/90 text-white p-1.5 rounded-full shadow hover:bg-red-700 transition-all opacity-90 sm:opacity-0 group-hover:opacity-100"
              title="Hapus foto ini"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <span className="absolute bottom-1.5 left-1.5 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded font-mono">
              #{idx + 1}
            </span>
          </div>
        ))}

        {/* Upload Button Box */}
        <div
          onClick={() => !isUploading && fileInputRef.current?.click()}
          className={`aspect-square rounded-xl border-2 border-dashed border-emerald-300 bg-emerald-50/40 hover:bg-emerald-50 hover:border-emerald-500 transition-all flex flex-col items-center justify-center text-center p-2 cursor-pointer group ${
            isUploading ? 'opacity-50 cursor-wait' : ''
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleFilesChange}
            className="hidden"
          />
          {isUploading ? (
            <div className="flex flex-col items-center space-y-1 text-emerald-700">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span className="text-[10px] font-bold">Uploading...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-1 text-emerald-700 group-hover:scale-105 transition-transform">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <Upload className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold text-gray-700">+ Foto Dok.</span>
              <span className="text-[9px] text-gray-400">Pilih banyak</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
