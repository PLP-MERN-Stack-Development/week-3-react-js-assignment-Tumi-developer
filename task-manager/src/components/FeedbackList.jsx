import React from 'react';

export default function FeedbackList({ feedbacks, onDelete, onToggleComplete }) {
    if (feedbacks.length === 0) {
        return <p className="text-gray-500 italic">No tasks here!</p>;
    }
    return (
        <ul className="space-y-2">
            {feedbacks.map((fb) => (
                <li
                    key={fb.id}
                    className={`flex items-center justify-between p-3 rounded-lg shadow transition
                        ${fb.completed ? 'bg-green-100 dark:bg-green-900 line-through text-gray-400' : 'bg-white dark:bg-gray-800'}
                    `}
                >
                    <div>
                        <div className="font-bold">{fb.name || 'No Name'}</div>
                        <div className="text-sm">{fb.comment || 'No Comment'}</div>
                    </div>
                    <div className="flex gap-2">
                        {onToggleComplete && (
                            <button
                                onClick={() => onToggleComplete(fb.id)}
                                className={`px-2 py-1 rounded transition
                                    ${fb.completed
                                        ? 'bg-yellow-300 hover:bg-yellow-400 text-gray-900'
                                        : 'bg-green-400 hover:bg-green-500 text-white'}
                                `}
                            >
                                {fb.completed ? 'Mark Active' : 'Complete'}
                            </button>
                        )}
                        <button onClick={() => onDelete(fb.id)} className="px-2 py-1 rounded bg-red-400 hover:bg-red-600 text-white transition">
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}