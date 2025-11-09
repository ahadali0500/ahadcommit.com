"use client"; // make sure this is at the top of the file

import { useState } from "react";
import { Copy } from "lucide-react";

export default function CopyButton({ text }: { text: string }) {
    console.log(text,"bro");
    
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // reset after 2s
            });
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="share-btn"
            title="Copy link"
        >
            <Copy size={18} />
            {copied && <span className="ml-2 text-green-400">Copied!</span>}
        </button>
    );
}
