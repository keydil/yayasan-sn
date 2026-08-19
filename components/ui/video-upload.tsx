'use client';

import React, { useState, useRef } from 'react';
import { Upload, Link as LinkIcon, X, Video, Film, CheckCircle2 } from 'lucide-react';
import { uploadImageToSupabase } from '@/lib/supabase';

interface VideoUploadProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

const MAX_VIDEO_SIZE_MB = 50;
const MAX_VIDEO_SIZE_BYTES = MAX_VIDEO_SIZE_MB * 1024 * 1024;

export function VideoUpload({ value, onChange, label = 'Link / File Video Dokumentasi' }: VideoUploadProps) {
  const [mode, setMode] = useState<'upload' | 'url'>('upload');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (err) => reject(err);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit: max 50MB
    if (file.size > MAX_VIDEO_SIZE_BYTES) {
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(1);
      alert(`⚠️ Ukuran video terlalu besar (${fileSizeMB} MB)!\n\nMaksimal ukuran video yang diizinkan adalah ${MAX_VIDEO_SIZE_MB} MB.\n\nTips: Silakan kompres video Anda atau gunakan link YouTube / Google Drive.`);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    try {
      setIsUploading(true);
      setUploadProgress(20);

      // Attempt upload to Supabase Storage Bucket 'ysn-media' under folder 'videos'
      try {
        const publicUrl = await uploadImageToSupabase(file, 'videos');
        setUploadProgress(100);
        onChange(publicUrl);
      } catch (storageErr) {
        console.warn('Storage bucket upload failed, using Data URL fallback:', storageErr);
        const base64 = await fileToBase64(file);
        setUploadProgress(100);
        onChange(base64);
      }
    } catch (err) {
      console.error('Failed to upload video:', err);
      alert('Gagal mengunggah video. Silakan coba file lain atau gunakan link YouTube.');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
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
          {label} <span className="text-gray-400 font-normal">(Maks. 50 MB / Link YouTube / Drive)</span>
        </label>
        <div className="flex bg-gray-100 p-0.5 rounded-lg border border-gray-200 text-xs font-medium">
          <button
            type="button"
            onClick={() => setMode('upload')}
            className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
              mode === 'upload' ? 'bg-white text-emerald-700 shadow-sm font-bold' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <Upload className="w-3.5 h-3.5" /> Upload File (Galeri)
          </button>
          <button
            type="button"
            onClick={() => setMode('url')}
            className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
              mode === 'url' ? 'bg-white text-emerald-700 shadow-sm font-bold' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5" /> Link (YouTube / Drive)
          </button>
        </div>
      </div>

      {value ? (
        <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-900 p-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Film className="w-5 h-5" />
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-white flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Video Dokumentasi Terpasang
              </p>
              <p className="text-[11px] text-gray-400 truncate">{value.substring(0, 50)}...</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClear}
            className="p-2 rounded-lg bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white transition-colors shrink-0"
            title="Hapus Video"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <>
          {mode === 'upload' ? (
            <div
              onClick={() => !isUploading && fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-5 text-center cursor-pointer transition-all ${
                isUploading
                  ? 'border-emerald-400 bg-emerald-50/50'
                  : 'border-gray-200 hover:border-emerald-500 hover:bg-emerald-50/30'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="video/mp4,video/webm,video/ogg,video/quicktime,video/*"
                onChange={handleFileChange}
                className="hidden"
                disabled={isUploading}
              />
              {isUploading ? (
                <div className="space-y-2 py-2">
                  <div className="w-8 h-8 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto" />
                  <p className="text-xs font-bold text-emerald-700">Mengunggah video ke server... (Maks 50 MB)</p>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Video className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-gray-700">Klik untuk Pilih Video dari Galeri HP / Laptop</p>
                  <p className="text-[11px] text-gray-400">Format MP4, WebM, QuickTime (Maksimal 50 MB)</p>
                </div>
              )}
            </div>
          ) : (
            <div className="relative">
              <Video className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="url"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Contoh: https://youtube.com/watch?v=... atau https://drive.google.com/file/d/..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm font-medium"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
