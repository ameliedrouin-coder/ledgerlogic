import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const ConsultationCTA = ({
    onOpenModal,
    title = "Ready to Simplify Your Finances?",
    description = "Stop stressing about your numbers. Let our team handle your accounting so you can focus on leading your business.",
    buttonText = "Book a Free Consult",
    buttonLink,
    secondaryButtonText,
    secondaryButtonLink,
    onSecondaryClick
}: {
    onOpenModal?: () => void;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    onSecondaryClick?: () => void;
}) => {
    return (
        <div className="my-16 relative overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-100">
            <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
            <div className="p-8 md:p-10 md:flex md:items-center md:gap-8">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">
                        {title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6 md:mb-0">
                        {description}
                    </p>
                </div>
                <div className="flex-shrink-0 flex flex-col gap-3 min-w-[200px]">
                    {buttonLink ? (
                        <Link
                            href={buttonLink}
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-teal-600 rounded-lg hover:bg-teal-700 hover:shadow-lg hover:-translate-y-0.5 text-center w-full"
                        >
                            {buttonText}
                        </Link>
                    ) : (
                        <button
                            onClick={onOpenModal}
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-teal-600 rounded-lg hover:bg-teal-700 hover:shadow-lg hover:-translate-y-0.5 text-center w-full"
                        >
                            {buttonText}
                        </button>
                    )}

                    {(secondaryButtonText && (secondaryButtonLink || onSecondaryClick)) && (
                        secondaryButtonLink ? (
                            <Link
                                href={secondaryButtonLink}
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all bg-white border-2 border-slate-200 rounded-lg hover:border-teal-600 hover:text-teal-700 hover:shadow-md hover:-translate-y-0.5 text-center w-full"
                            >
                                {secondaryButtonText}
                            </Link>
                        ) : (
                            <button
                                onClick={onSecondaryClick}
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all bg-white border-2 border-slate-200 rounded-lg hover:border-teal-600 hover:text-teal-700 hover:shadow-md hover:-translate-y-0.5 text-center w-full"
                            >
                                {secondaryButtonText}
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export const LeadMagnetCTA = () => {
    const [email, setEmail] = React.useState('');
    const router = useRouter();

    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/send-lead-magnet', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) throw new Error('Failed to submit');

            setStatus('success');
            setEmail('');
            // Optional: Redirect to thank you, or just show success state
            // router.push('/thank-you'); 
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="my-16 p-8 md:p-12 bg-slate-50 rounded-2xl border border-slate-200 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
                <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest rounded-full mb-5">
                    Free Resource
                </span>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 font-display">
                    Master Xero in a Weekend
                </h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Download our <strong>Ultimate Canadian Xero Setup Checklist</strong>.
                    Ensure you're CRA-compliant and audit-proof your books in just 15 minutes a week.
                </p>

                {status === 'success' ? (
                    <div className="bg-teal-50 border border-teal-100 rounded-lg p-6 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 text-teal-600 rounded-full mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <h4 className="text-xl font-bold text-teal-800 mb-2">Check Your Inbox!</h4>
                        <p className="text-teal-600">We've sent the checklist to <strong>{email}</strong>.</p>
                        <button onClick={() => setStatus('idle')} className="mt-4 text-sm text-teal-700 underline hover:text-teal-900">Send to another email</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                        <input
                            type="email"
                            required
                            placeholder="Enter your email address..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === 'loading'}
                            className="flex-1 px-5 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all shadow-sm disabled:opacity-70"
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
                        >
                            {status === 'loading' ? (
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            ) : "Send me the Checklist"}
                        </button>
                    </form>
                )}
                <p className="text-slate-400 text-xs mt-4">
                    Strictly no spam. Unsubscribe anytime.
                </p>
            </div>
        </div>
    );
};

export const QuickSummary = ({ items }: { items: string[] }) => {
    return (
        <div className="my-8 p-6 bg-slate-50 border-l-4 border-teal-500 rounded-r-lg">
            <h4 className="text-slate-900 font-bold uppercase text-sm mb-3">At a Glance</h4>
            <ul className="space-y-2">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm">
                        <span className="mt-1 text-teal-600 text-xs">●</span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
