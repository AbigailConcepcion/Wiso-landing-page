"use client";

import { useEffect } from 'react';

export default function WaPageDisabled() {
  useEffect(() => {
    // No-op: page disabled in favor of /api/wa redirect
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">WhatsApp helper (disabled)</h1>
        <p className="text-gray-600">This helper page is disabled. Use the main contact buttons which redirect via /api/wa.</p>
      </div>
    </div>
  );
}
