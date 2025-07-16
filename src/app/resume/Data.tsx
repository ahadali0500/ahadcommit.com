'use client'
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Main from '../component/Main';
import Head from 'next/head';

export default function Data() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const pdfUrl = "/assets/ahad-ali-resume-full-stack-web-developer.pdf";

    useEffect(() => {
        // Check if PDF exists
        const checkPdfExists = async () => {
            try {
                const response = await fetch(pdfUrl, { method: 'HEAD' });
                if (response.ok) {
                    setLoading(false);
                } else {
                    setError('PDF file not found. Please make sure the file exists at the specified path.');
                    setLoading(false);
                }
            } catch (err) {
                setError('Failed to load PDF file.');
                setLoading(false);
            }
        };

        checkPdfExists();
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'ahad-ali-resume-full-stack-web-developer.pdf';
        link.click();
    }



    return (
        <>
            <div className="services-section">
                <div className="container">
                    <div className="section-header mt-5">
                        <h1 className="section-title">My Professional Resume</h1>
                        <center>
                            <button
                                onClick={handleDownload}
                                className="hire-btn mt-4"
                            >
                                <i className="fas fa-download me-1"></i>Download
                            </button>
                        </center>
                    </div>

                    {loading && (
                        <div className="d-flex align-items-center justify-content-center h-100" style={{ padding: '100px' }}>
                            <div className="text-center">
                                <div className="spinner-border text-primary mb-3" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="text-muted">Loading PDF...</p>
                            </div>
                        </div>
                    )}

                    {!loading && !error && (
                        <div style={{ backgroundColor: 'var(--tj-black-2)' }} className="flex-grow-1 p-3 d-flex justify-content-center align-items-center mt-6">
                            <div className="w-100">
                                <iframe
                                    ref={iframeRef}
                                    src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&zoom=100`}
                                    className="w-100  border rounded shadow"
                                    style={{
                                        transformOrigin: 'center top',
                                        transition: 'transform 0.3s ease',
                                        minHeight: '300vh'
                                    }}
                                    title="PDF Resume Viewer"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
