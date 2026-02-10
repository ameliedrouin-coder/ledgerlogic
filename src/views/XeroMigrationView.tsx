'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowRight,
    Check,
    ChevronDown,
    Shield,
    Monitor,
    RefreshCw,
    Zap,
    FileCheck,
    Users,
    BarChart3,
    Headphones,
    BookOpen,
    Clock,
    CheckCircle2,
    Search,
    Database,
    Upload,
    Rocket,
    Award,
    Star,
    MessageSquare,
    Plus,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const OnboardingModal = dynamic(() => import('../components/OnboardingModal'), {
    ssr: false,
    loading: () => null,
});

/* ─── Data ─── */

const TRUST_ITEMS = [
    { icon: <Award className="w-5 h-5" />, text: 'Certified Xero Advisor' },
    { icon: <Shield className="w-5 h-5" />, text: 'CPA-Led Team' },
    { icon: <Users className="w-5 h-5" />, text: '10+ Migrations Completed' },
    { icon: <Star className="w-5 h-5" />, text: '5-Star Client Reviews' },
];

const PAIN_POINTS = [
    {
        icon: <Monitor className="w-8 h-8" />,
        title: 'Stuck on Desktop Software?',
        desc: 'Sage 50, QuickBooks Desktop, or spreadsheets keeping you tethered to one machine? We\'ll move you to the cloud — cleanly.',
    },
    {
        icon: <RefreshCw className="w-8 h-8" />,
        title: 'Messy QuickBooks File?',
        desc: 'Duplicate accounts, broken reconciliations, and mystery balances? We\'ll clean up and migrate to a fresh Xero setup.',
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: 'Starting a New Business?',
        desc: 'Get Xero set up right from day one — chart of accounts, GST/HST, bank feeds, and integrations configured for your business.',
    },
];

const SERVICES = [
    {
        icon: <Database className="w-7 h-7" />,
        title: 'Full Data Migration',
        desc: 'We migrate your opening balances, contacts, outstanding invoices/bills, and chart of accounts from Sage, QuickBooks, or any other platform to Xero.',
        items: ['Chart of accounts mapping', 'Opening balance tie-out', 'AR/AP transfer', 'Historical data archiving'],
    },
    {
        icon: <Upload className="w-7 h-7" />,
        title: 'New Xero Setup',
        desc: 'Starting fresh? We configure your Xero organisation from scratch, tailored to your industry and Canadian tax requirements.',
        items: ['GST/HST/PST tax setup', 'Bank & credit card feeds', 'Invoice templates', 'User access & permissions'],
    },
    {
        icon: <RefreshCw className="w-7 h-7" />,
        title: 'Cleanup & Optimization',
        desc: 'Already on Xero but it\'s a mess? We\'ll clean up your file, fix coding errors, and optimise your workflow.',
        items: ['Reconciliation catch-up', 'Duplicate account merge', 'Bank rules setup', 'Tracking categories config'],
    },
];

const PROCESS_STEPS = [
    {
        step: '01',
        icon: <Search className="w-6 h-6" />,
        title: 'Discovery Call',
        desc: 'We review your current setup, identify pain points, and agree on a migration plan.',
        duration: 'Day 1',
    },
    {
        step: '02',
        icon: <FileCheck className="w-6 h-6" />,
        title: 'Data Preparation',
        desc: 'We clean up your existing data, map your chart of accounts, and prepare import files.',
        duration: 'Days 2–3',
    },
    {
        step: '03',
        icon: <Database className="w-6 h-6" />,
        title: 'Migration & Setup',
        desc: 'We import everything into Xero, configure tax settings, connect bank feeds, and verify data integrity.',
        duration: 'Days 4–5',
    },
    {
        step: '04',
        icon: <Rocket className="w-6 h-6" />,
        title: 'Go-Live & Training',
        desc: 'We walk you through your new Xero setup, train your team, and ensure everything reconciles perfectly.',
        duration: 'Day 6–7',
    },
];

const INCLUDED_FEATURES = [
    'Chart of accounts mapping & cleanup',
    'Opening balance entry & tie-out',
    'GST/HST/PST tax configuration',
    'Bank feed connections',
    'Outstanding invoice & bill migration',
    'Payment gateway integration',
    'Invoice & quote templates',
    'User roles & permissions setup',
    'Receipt capture (Dext/Hubdoc) setup',
    'Bank reconciliation rules',
    'Tracking categories configuration',
    '1-on-1 training session',
];

const WHY_LEDGERLOGIC = [
    {
        icon: <Award className="w-7 h-7" />,
        title: 'Certified Xero Partner',
        desc: 'As a certified Xero Advisor, we know the platform inside-out and follow Xero best practices.',
    },
    {
        icon: <Shield className="w-7 h-7" />,
        title: 'CPA-Led, Canada-Focused',
        desc: 'Every migration is overseen by a Canadian CPA who understands GST/HST, provincial taxes, and CRA requirements.',
    },
    {
        icon: <Headphones className="w-7 h-7" />,
        title: 'Ongoing Support',
        desc: 'We don\'t disappear after go-live. Monthly bookkeeping, advisory, and Xero support are available if you need them.',
    },
    {
        icon: <Clock className="w-7 h-7" />,
        title: 'Fast Turnaround',
        desc: 'Most migrations are completed within 5–7 business days. No drawn-out projects or surprise delays.',
    },
];

const FAQS = [
    {
        q: 'How long does a Xero migration take?',
        a: 'Most migrations are completed within 5–7 business days. Complex files with inventory, multi-currency, or job costing may take slightly longer due to additional data mapping and verification.',
    },
    {
        q: 'Will I lose any data during the migration?',
        a: 'No. We keep your old software as a read-only historical archive and verify every balance against the original. Opening balances, outstanding invoices, bills, and contacts are all transferred and tied out.',
    },
    {
        q: 'Can you migrate from QuickBooks Online, not just desktop?',
        a: 'Yes. We migrate from QuickBooks Online, QuickBooks Desktop, Sage 50, FreshBooks, Wave, and most other accounting platforms. The process is the same: clean export, mapped import, full verification.',
    },
    {
        q: 'Do you handle GST/HST setup for my province?',
        a: 'Absolutely. We configure the correct tax rates for your province — HST, GST + PST, or QST — and ensure your chart of accounts and reporting align with CRA requirements.',
    },
    {
        q: 'What if I\'m starting a brand new business?',
        a: 'We offer full Xero setup for new businesses. This includes chart of accounts design, tax registration guidance, bank feed connections, invoice templates, and a training session to get you up and running from day one.',
    },
    {
        q: 'How much does a Xero migration cost?',
        a: 'Pricing depends on the complexity of your file, the source platform, and how much historical data you need migrated. Book a free discovery call and we\'ll provide a fixed-price quote — no surprises.',
    },
    {
        q: 'Do you provide ongoing bookkeeping after migration?',
        a: 'Yes. Many clients continue with monthly bookkeeping, reconciliation, and advisory services after migration. We offer flexible monthly plans tailored to Canadian businesses.',
    },
    {
        q: 'Is Xero a good fit for Canadian businesses?',
        a: 'Xero is one of the top cloud accounting platforms in Canada. It handles GST/HST natively, integrates with major Canadian banks, supports multi-currency, and has a large ecosystem of add-ons for payroll, expenses, and more.',
    },
];

/* ─── Component ─── */

export default function XeroMigrationView() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [showSticky, setShowSticky] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowSticky(window.scrollY > 600);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const openModal = () => setIsModalOpen(true);

    return (
        <>
            {/* ═══════ HERO ═══════ */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white pt-32 pb-20 md:pt-40 md:pb-28">
                {/* subtle grid bg */}
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-teal-500/30">
                                <Award className="w-4 h-4" /> Certified Xero Advisor
                            </span>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                                Xero Migration &amp; Setup Services for{' '}
                                <span className="text-teal-400">Canadian Businesses</span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                                CPA-led Xero migration from Sage, QuickBooks, or scratch. We handle the data, the tax config, and the training — you get a clean, working&nbsp;file.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={openModal}
                                    className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-400/30 flex items-center justify-center gap-2"
                                >
                                    Book Free Discovery Call <ArrowRight className="w-5 h-5" />
                                </button>
                                <a
                                    href="#process"
                                    className="border-2 border-white/20 hover:border-white/40 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-2"
                                >
                                    See How It Works
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* bottom wave removed as per request to make full block */}
            </section>

            {/* ═══════ TRUST STRIP ═══════ */}
            <section className="bg-white py-6 border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {TRUST_ITEMS.map((item) => (
                            <div key={item.text} className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                                <span className="text-teal-600">{item.icon}</span>
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ PAIN POINTS ═══════ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Sound Familiar?
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Whether you&apos;re migrating from legacy software or starting fresh, we&apos;ve got you covered.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {PAIN_POINTS.map((p, i) => (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-slate-100"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl mb-5">
                                    {p.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ SERVICES ═══════ */}
            <section className="py-20 bg-slate-50" id="services">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Our Xero Services
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Whether it&apos;s a migration, a fresh setup, or a cleanup — we tailor every engagement to your business.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {SERVICES.map((s, i) => (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100 flex flex-col"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-50 text-teal-600 rounded-xl mb-5">
                                    {s.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                                <p className="text-slate-600 mb-5 leading-relaxed">{s.desc}</p>
                                <ul className="mt-auto space-y-2">
                                    {s.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                                            <Check className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ PROCESS TIMELINE ═══════ */}
            <section className="py-20 bg-white" id="process">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            How It Works
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            A straightforward, CPA-led process from first call to go-live — typically within one week.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-6">
                            {PROCESS_STEPS.map((s, i) => (
                                <motion.div
                                    key={s.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.12, duration: 0.4 }}
                                    className="relative text-center"
                                >
                                    {/* connector line */}
                                    {i < PROCESS_STEPS.length - 1 && (
                                        <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-teal-200 z-0" />
                                    )}
                                    <div className="relative z-10">
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-600 text-white rounded-full mb-4 shadow-lg shadow-teal-600/20">
                                            <span className="text-2xl font-bold">{s.step}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-2">{s.desc}</p>
                                        <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                                            {s.duration}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={openModal}
                            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg shadow-teal-600/20 inline-flex items-center gap-2"
                        >
                            Start Your Migration <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* ═══════ WHAT'S INCLUDED ═══════ */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            What&apos;s Included in Every Migration
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            No hidden extras. Every migration includes these essentials so your Xero file is ready to go.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {INCLUDED_FEATURES.map((f, i) => (
                            <motion.div
                                key={f}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04, duration: 0.3 }}
                                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-slate-100"
                            >
                                <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                                <span className="text-slate-700 text-sm font-medium">{f}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ WHY LEDGERLOGIC ═══════ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Why LedgerLogic?
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We&apos;re not just software implementers — we&apos;re your ongoing accounting partner.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {WHY_LEDGERLOGIC.map((w, i) => (
                            <motion.div
                                key={w.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl mb-4">
                                    {w.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{w.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{w.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ SOCIAL PROOF ═══════ */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
                        {[
                            { stat: '10+', label: 'Businesses Migrated to Xero' },
                            { stat: '5–7', label: 'Days Average Turnaround' },
                            { stat: '100%', label: 'Balance Tie-Out Accuracy' },
                        ].map((s) => (
                            <div key={s.label}>
                                <p className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-2">{s.stat}</p>
                                <p className="text-slate-400 text-sm font-medium">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ XERO PROMO ═══════ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl shadow-teal-600/15">
                        <span className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                            Exclusive Offer
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Get 90% Off Xero for 6 Months
                        </h2>
                        <p className="text-teal-100 mb-6 max-w-lg mx-auto leading-relaxed">
                            As a Xero Partner, we can get you started with Xero at a fraction of the regular price. Plans start at just $2.50/mo for your first 6 months.
                        </p>
                        <a
                            href="https://referrals.xero.com/qp622xbmjhis-q1e71"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold py-4 px-8 rounded-xl text-lg hover:bg-teal-50 transition-all shadow-lg"
                        >
                            Claim Your Xero Discount <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══════ RELATED CONTENT ═══════ */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                            Helpful Xero Resources
                        </h2>
                        <p className="text-slate-600">
                            Explore our guides to learn more about Xero for Canadian businesses.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { title: 'Sage to Xero Migration Guide', href: '/blog/sage-to-xero-migration', icon: <Database className="w-5 h-5" /> },
                            { title: 'Is Xero Worth It?', href: '/blog/is-xero-worth-it', icon: <BarChart3 className="w-5 h-5" /> },
                            { title: 'How Long to Learn Xero?', href: '/blog/how-long-does-it-take-to-learn-xero', icon: <BookOpen className="w-5 h-5" /> },
                            { title: 'Xero Pricing Canada 2026', href: '/blog/xero-pricing-canada', icon: <Star className="w-5 h-5" /> },
                        ].map((r) => (
                            <Link
                                key={r.href}
                                href={r.href}
                                className="group bg-white rounded-xl p-5 border border-slate-100 hover:shadow-md hover:border-teal-200 transition-all flex items-start gap-3"
                            >
                                <span className="text-teal-500 mt-0.5">{r.icon}</span>
                                <span className="text-slate-800 font-medium text-sm group-hover:text-teal-700 transition-colors">
                                    {r.title}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ FAQ ═══════ */}
            <section className="py-24 bg-white" id="faq">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                        {/* Left column – heading & CTA */}
                        <div className="lg:col-span-2 lg:sticky lg:top-32">
                            <span className="inline-flex items-center gap-2 text-teal-600 text-xs font-bold uppercase tracking-wider mb-4">
                                <MessageSquare className="w-3.5 h-3.5" /> FAQ
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                                Questions?{' '}
                                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">We&apos;ve got answers.</span>
                            </h2>
                            <p className="text-slate-500 leading-relaxed mb-8">
                                Everything you need to know about migrating to Xero with LedgerLogic. Can&apos;t find what you&apos;re looking for?
                            </p>
                            <button
                                onClick={openModal}
                                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl transition-all text-sm shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/15 hover:-translate-y-0.5"
                            >
                                Ask Us Directly <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                        {/* Right column – accordion */}
                        <div className="lg:col-span-3">
                            <div className="space-y-6">
                                {FAQS.map((faq, i) => {
                                    const isOpen = openFaq === i;
                                    return (
                                        <div key={i} id={`faq-item-${i}`} className="border-b border-slate-200 pb-6 last:border-0 bg-transparent">
                                            <button
                                                onClick={() => setOpenFaq(isOpen ? null : i)}
                                                className="w-full flex items-start justify-between text-left group bg-transparent border-0 appearance-none p-0 focus:outline-none"
                                                aria-expanded={isOpen}
                                            >
                                                <span className={`text-lg font-bold pr-8 transition-colors ${isOpen ? 'text-teal-600' : 'text-slate-900 group-hover:text-teal-600'}`}>
                                                    {faq.q}
                                                </span>
                                                <span className={`flex-shrink-0 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                                                    <Plus className={`w-6 h-6 ${isOpen ? 'text-teal-600' : 'text-slate-400 group-hover:text-teal-600'}`} />
                                                </span>
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="pt-4 text-slate-600 leading-relaxed text-base">
                                                            {faq.a}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* ═══════ FINAL CTA ═══════ */}
            < section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white" >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Switch to Xero?
                    </h2>
                    <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
                        Book a free discovery call and we&apos;ll scope your migration, give you a fixed-price quote, and get you on Xero within a week.
                    </p>
                    <button
                        onClick={openModal}
                        className="bg-white text-teal-700 hover:bg-teal-50 font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-lg inline-flex items-center gap-2"
                    >
                        Book Your Free Consultation <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </section >

            {/* ═══════ STICKY MOBILE CTA ═══════ */}
            <AnimatePresence>
                {
                    showSticky && (
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            className="fixed bottom-0 left-0 w-full z-50 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] md:hidden"
                        >
                            <div className="flex items-center justify-between gap-4 container mx-auto px-2">
                                <span className="text-sm font-bold text-slate-700 hidden sm:block">Switch to Xero</span>
                                <button
                                    onClick={openModal}
                                    className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg text-center shadow-lg"
                                >
                                    Book Free Call
                                </button>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence >

            {/* ═══════ MODAL ═══════ */}
            < OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)
            } />
        </>
    );
}
