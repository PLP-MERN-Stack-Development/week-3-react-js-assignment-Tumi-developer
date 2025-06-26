import { useState } from 'react';
import FeedbackForm from '@/components/FeedbackForm';
import FeedbackList from '@/components/FeedbackList';

export default function App() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [isDark, setIsDark] = useState(false);

    // Add completed property to new feedbacks
    const addFeedback = (feedback) => {
        setFeedbacks(prev => [
            { ...feedback, completed: false, id: Date.now() + Math.random() },
            ...prev
        ]);
    };

    const deleteFeedback = (id) => {
        setFeedbacks(prev => prev.filter(fb => fb.id !== id));
    };

    const toggleComplete = (id) => {
        setFeedbacks(prev =>
            prev.map(fb =>
                fb.id === id ? { ...fb, completed: !fb.completed } : fb
            )
        );
    };

    const handleToggleDark = () => {
        document.documentElement.classList.toggle('dark');
        setIsDark(!isDark);
    };

    // Separate active and completed tasks
    const activeTasks = feedbacks.filter(fb => !fb.completed);
    const completedTasks = feedbacks.filter(fb => fb.completed);

    return (
        <div
            className="max-w-2xl mx-auto p-6 space-y-6 rounded-xl shadow-2xl
                bg-gradient-to-br from-blue-100 via-white to-purple-100
                dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                animate-fade-in"
            style={{ minHeight: "100vh" }}
        >
            <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg transition-all duration-700">
                Task Manager
            </h1>
            <FeedbackForm onAdd={addFeedback} />

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-700 dark:text-purple-300">Active Tasks</h2>
                <FeedbackList
                    feedbacks={activeTasks}
                    onDelete={deleteFeedback}
                    onToggleComplete={toggleComplete}
                />
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">Completed Tasks</h2>
                <FeedbackList
                    feedbacks={completedTasks}
                    onDelete={deleteFeedback}
                    onToggleComplete={toggleComplete}
                />
            </div>

            <div className="flex justify-center">
                <button
                    onClick={handleToggleDark}
                    className={`px-6 py-2 rounded-full shadow-lg font-semibold transition-all duration-500
                        bg-gradient-to-r from-blue-400 to-purple-400 text-white
                        dark:from-gray-700 dark:to-gray-900 dark:text-gray-100
                        hover:scale-105 hover:from-pink-400 hover:to-yellow-400
                        focus:outline-none focus:ring-4 focus:ring-purple-300
                        ${isDark ? 'ring-4 ring-purple-500' : ''}
                    `}
                >
                    {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </div>
        </div>
    );
}

