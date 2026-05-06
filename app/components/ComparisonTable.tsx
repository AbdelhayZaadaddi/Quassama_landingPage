'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Check, X, Mic, Globe, ShieldCheck, User, Zap, Camera } from 'lucide-react';

export default function ComparisonTable() {
    const t = useTranslations('comparisonTable');

    const comparisonData = [
        {
            category: t('categories.edge.label'),
            items: [
                { name: t('categories.edge.items.voice.name'), quassama: t('categories.edge.items.voice.quassama'), competitor: t('categories.edge.items.voice.competitor'), icon: <Mic className="w-5 h-5" /> },
                { name: t('categories.edge.items.scanner.name'), quassama: t('categories.edge.items.scanner.quassama'), competitor: t('categories.edge.items.scanner.competitor'), icon: <Camera className="w-5 h-5" /> },
                { name: t('categories.edge.items.limit.name'), quassama: t('categories.edge.items.limit.quassama'), competitor: t('categories.edge.items.limit.competitor'), highlight: true, icon: <Zap className="w-5 h-5" /> },
                { name: t('categories.edge.items.language.name'), quassama: true, competitor: t('categories.edge.items.language.competitor'), icon: <Globe className="w-5 h-5" /> },
            ]
        },
        {
            category: t('categories.tracking.label'),
            items: [
                { name: t('categories.tracking.items.shared.name'), quassama: true, competitor: true, icon: <User className="w-5 h-5" /> },
                { name: t('categories.tracking.items.private.name'), quassama: true, competitor: false, highlight: true, icon: <ShieldCheck className="w-5 h-5" /> },
                { name: t('categories.tracking.items.debt.name'), quassama: true, competitor: t('categories.tracking.items.debt.competitor'), icon: <Zap className="w-5 h-5" /> },
            ]
        },
        {
            category: t('categories.privacy.label'),
            items: [
                { name: t('categories.privacy.items.encryption.name'), quassama: true, competitor: t('categories.privacy.items.encryption.competitor'), icon: <ShieldCheck className="w-5 h-5" /> },
                { name: t('categories.privacy.items.data.name'), quassama: t('categories.privacy.items.data.quassama'), competitor: t('categories.privacy.items.data.competitor'), icon: <ShieldCheck className="w-5 h-5" /> },
                { name: t('categories.privacy.items.biometric.name'), quassama: true, competitor: t('categories.privacy.items.biometric.competitor'), icon: <User className="w-5 h-5" /> },
            ]
        }
    ];

    return (
        <section id="compare" className="bg-white py-16 md:py-24 w-full">
            <div className="w-full max-w-350 mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-[#3A7068] text-3xl md:text-5xl font-bold mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>

                {/* --- MOBILE VIEW (Cards) --- */}
                <div className="md:hidden space-y-8">
                    {comparisonData.map((cat, i) => (
                        <div key={i} className="space-y-4">
                            <h3 className="text-[#3A7068] font-bold text-lg uppercase tracking-wider border-b border-[#3A7068]/20 pb-2">
                                {cat.category}
                            </h3>
                            {cat.items.map((item, j) => (
                                <div key={j} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                                    {/* Card Header */}
                                    <div className="p-4 bg-gray-50 flex items-center gap-3 border-b border-gray-100">
                                        <span className="text-[#3A7068]">{item.icon}</span>
                                        <span className="font-semibold text-gray-800">{item.name}</span>
                                    </div>

                                    {/* Comparison Grid */}
                                    <div className="grid grid-cols-2 divide-x divide-gray-100">
                                        {/* Quassama Side */}
                                        <div className={`p-4 flex flex-col items-center justify-center text-center ${item.highlight ? 'bg-[#3A7068]/10' : 'bg-white'}`}>
                                            <span className="text-xs font-bold text-[#3A7068] mb-1 uppercase">{t('headers.quassama')}</span>
                                            {typeof item.quassama === "boolean" ? (
                                                item.quassama ? <Check className="text-[#3A7068] w-6 h-6 stroke-[3px]" /> : <X className="text-red-400 w-6 h-6" />
                                            ) : (
                                                <span className="font-bold text-[#3A7068] text-sm">{item.quassama}</span>
                                            )}
                                        </div>

                                        {/* Competitor Side */}
                                        <div className="p-4 flex flex-col items-center justify-center text-center bg-gray-50/50">
                                            <span className="text-xs font-bold text-gray-400 mb-1 uppercase">{t('headers.others')}</span>
                                            {typeof item.competitor === "boolean" ? (
                                                item.competitor ? <Check className="text-gray-400 w-5 h-5" /> : <X className="text-red-300 w-5 h-5" />
                                            ) : (
                                                <span className="text-sm text-gray-500 italic">{item.competitor}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* --- DESKTOP VIEW (Table) --- */}
                <motion.div
                    className="hidden md:block overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-sm w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <table className="w-full text-start border-collapse table-fixed">
                        <thead>
                            <tr className="bg-[#3A7068] text-white">
                                <th className="p-6 text-xl font-semibold w-[40%]">{t('headers.features')}</th>
                                <th className="p-6 text-xl font-bold text-center bg-[#2C5851] w-[30%]">{t('headers.quassama')}</th>
                                <th className="p-6 text-xl font-semibold text-center bg-gray-50 text-gray-400 w-[30%] border-b border-gray-200">{t('headers.others')}</th>
                            </tr>
                        </thead>

                        {comparisonData.map((cat, i) => (
                            <tbody key={i}>
                                <tr className="bg-gray-50">
                                    <td colSpan={3} className="px-6 py-4 text-sm font-bold uppercase tracking-widest text-[#3A7068]">
                                        {cat.category}
                                    </td>
                                </tr>
                                {cat.items.map((feature, j) => (
                                    <tr key={j} className={`group border-b border-gray-100 last:border-0 hover:bg-[#3A7068]/5 transition-colors`}>
                                        <td className="p-6 flex items-center gap-4">
                                            <span className="p-2 rounded-lg bg-[#3A7068]/10 text-[#3A7068]">
                                                {feature.icon}
                                            </span>
                                            <span className="font-semibold text-gray-700 text-lg">{feature.name}</span>
                                        </td>

                                        <td className={`p-6 text-center border-x border-gray-100 ${feature.highlight ? 'bg-[#3A7068]/10' : 'bg-[#3A7068]/5'}`}>
                                            {typeof feature.quassama === "boolean" ? (
                                                feature.quassama ?
                                                    <div className="flex justify-center"><Check className="text-[#3A7068] w-8 h-8 stroke-[3px]" /></div> :
                                                    <div className="flex justify-center"><X className="text-gray-300 w-8 h-8" /></div>
                                            ) : (
                                                <span className="font-bold text-[#3A7068] text-lg">{feature.quassama}</span>
                                            )}
                                        </td>

                                        <td className="p-6 text-center text-gray-500">
                                            {typeof feature.competitor === "boolean" ? (
                                                feature.competitor ?
                                                    <div className="flex justify-center"><Check className="text-gray-300 w-6 h-6" /></div> :
                                                    <div className="flex justify-center"><X className="text-red-300 w-6 h-6" /></div>
                                            ) : (
                                                <span className="text-base italic">{feature.competitor}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        ))}
                    </table>
                </motion.div>

                <p className="mt-8 text-center text-gray-400 text-sm">
                    {t('footer')}
                </p>
            </div>
        </section>
    );
}