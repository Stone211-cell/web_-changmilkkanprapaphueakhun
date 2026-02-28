"use client";

import React, { useState } from 'react';
import { Facebook, Twitter, Link as LinkIcon, CheckCircle2 } from "lucide-react";

export const ShareButtons = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyLink = () => {
        if (typeof window !== "undefined") {
            const url = window.location.href;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(url);
            } else {
                const textArea = document.createElement("textarea");
                textArea.value = url;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                } catch (err) {
                    console.error('Fallback: Oops, unable to copy', err);
                }
                document.body.removeChild(textArea);
            }
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
    };

    const handleFacebookShare = () => {
        if (typeof window !== "undefined") {
            const url = encodeURIComponent(window.location.href);
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'noopener,noreferrer');
        }
    };

    const handleTwitterShare = () => {
        if (typeof window !== "undefined") {
            const url = encodeURIComponent(window.location.href);
            window.open(`https://twitter.com/intent/tweet?url=${url}`, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-slate-700">แชร์บทความนี้:</span>
            <div className="flex gap-2">
                <button
                    onClick={handleFacebookShare}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#1877f2] hover:text-white flex items-center justify-center text-slate-600 transition-all shadow-sm"
                    aria-label="Share on Facebook"
                >
                    <Facebook className="w-4 h-4" />
                </button>
                <button
                    onClick={handleTwitterShare}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#1da1f2] hover:text-white flex items-center justify-center text-slate-600 transition-all shadow-sm"
                    aria-label="Share on Twitter"
                >
                    <Twitter className="w-4 h-4" />
                </button>
                <button
                    onClick={handleCopyLink}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-800 hover:text-white flex items-center justify-center text-slate-600 transition-all relative shadow-sm"
                    aria-label="Copy Link"
                >
                    {isCopied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <LinkIcon className="w-4 h-4" />}
                </button>
            </div>
        </div>
    );
};

export default ShareButtons;
