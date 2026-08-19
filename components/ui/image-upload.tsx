'use client';

import React, { useState, useRef } from 'react';
import { Upload, Link as LinkIcon, X, Image as ImageIcon } from 'lucide-react';
import { uploadImageToSupabase } from '@/lib/supabase';

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export function ImageUpload({ value, onChange, label = 'Foto / Gambar Header' }: ImageUploadProps) {
  const [mode, setMode] = useState<'upload' | 'url'>('upload');
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

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      // Attempt upload to Supabase Storage Bucket 'ysn-media'
      try {
        const publicUrl = await uploadImageToSupabase(file, 'media');
        onChange(publicUrl);
      } catch (storageErr) {
        console.warn('Storage bucket upload failed, fallback to compressed Base64:', storageErr);
        const base64 = await compressImage(file);
        onChange(base64);
      }
    } catch (err) {
      console.error('Failed to process image:', err);
      alert('Gagal memproses gambar. Silakan coba file lain.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleClear = () => {
    onChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
          {label} *
        </label>
        <div className="flex bg-gray-100 p-0.5 rounded-lg border border-gray-200 text-xs font-medium">
          <button
            type="button"
            onClick={() => setMode('upload')}
            className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-all ${
              mode === 'upload' ? 'bg-white text-emerald-700 font-bold shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Upload className="w-3.5 h-3.5" /> Upload File (Galeri HP)
          </button>
          <button
            type="button"
            onClick={() => setMode('url')}
            className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-all ${
              mode === 'url' ? 'bg-white text-emerald-700 font-bold shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5" /> Tempel Link URL
          </button>
        </div>
      </div>

      {/* Image Preview Box if image exists */}
      {value ? (
        <div className="relative rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden group max-h-64 flex items-center justify-center p-2">
          <img src={value} alt="Preview" className="max-h-60 w-auto object-contain rounded-xl shadow-sm" />
          <button
            type="button"
            onClick={handleClear}
            className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition-transform group-hover:scale-110 flex items-center justify-center"
            title="Hapus foto"
          >
            <X className="w-4 h-4" />
          </button>
          {isUploading && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white text-sm font-semibold">
              Mengunggah ke Supabase Storage Bucket...
            </div>
          )}
        </div>
      ) : (
        <div>
          {mode === 'upload' ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-emerald-300 bg-emerald-50/50 hover:bg-emerald-50 hover:border-emerald-500 transition-all rounded-2xl p-6 text-center cursor-pointer flex flex-col items-center justify-center space-y-2 group"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Upload className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">
                  {isUploading ? 'Mengunggah ke Supabase Storage...' : 'Klik untuk Pilih Foto dari HP / Komputer'}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">Otomatis ter-upload ke Supabase Storage Bucket (ysn-media)</p>
              </div>
            </div>
          ) : (
            <div className="relative">
              <ImageIcon className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="url"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="https://images.unsplash.com/photo-..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm font-medium"
                required
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
