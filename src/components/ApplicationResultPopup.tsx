import { useState, useEffect } from 'react';

interface Keyword {
    0: string;
    1: number;
}

interface RankingData {
    match_score: number;
    keywords: Keyword[];
    cv_text_length: number;
}

interface PopupProps {
    message: string;
    ranking: RankingData;
    onClose: () => void;
}

export default function ApplicationResultPopup({ message, ranking, onClose }: PopupProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-green-600">Application Submitted!</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <p className="text-gray-600 mb-4">{message}</p>
                
                <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Match Score</h4>
                        <div className="text-2xl font-bold text-blue-600">
                            {ranking.match_score.toFixed(1)}%
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Matching Keywords</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {ranking.keywords.map(([keyword, score]) => (
                                <div 
                                    key={keyword}
                                    className="bg-gray-50 p-2 rounded flex justify-between items-center"
                                >
                                    <span className="text-gray-700">{keyword}</span>
                                    <span className="text-gray-500 text-sm">
                                        {(score * 100).toFixed(1)}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 