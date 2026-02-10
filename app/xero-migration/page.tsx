import { Metadata } from 'next';
import XeroMigrationView from '../../src/views/XeroMigrationView';

export const metadata: Metadata = {
    title: 'Xero Migration & Setup Services · LedgerLogic',
    description:
        'CPA-led Xero migration and setup for Canadian businesses. We handle data migration from Sage, QuickBooks, or scratch — GST/HST config, bank feeds, and training included.',
    alternates: {
        canonical: 'https://ledgerlogic.ca/xero-migration',
    },
    openGraph: {
        title: 'Xero Migration & Setup Services · LedgerLogic',
        description:
            'CPA-led Xero migration and setup for Canadian businesses. Data migration from Sage, QuickBooks, or scratch — GST/HST config, bank feeds, and training included.',
        url: 'https://ledgerlogic.ca/xero-migration',
        siteName: 'LedgerLogic',
        locale: 'en_CA',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Xero Migration & Setup Services · LedgerLogic',
        description:
            'CPA-led Xero migration and setup for Canadian businesses.',
    },
    keywords: [
        'xero migration canada',
        'xero setup',
        'sage to xero',
        'quickbooks to xero',
        'xero bookkeeper canada',
        'xero advisor canada',
        'xero accounting migration',
        'cloud accounting setup',
    ],
};

function ServiceSchema() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Xero Migration & Setup Services',
        description:
            'CPA-led Xero migration and setup for Canadian businesses. Full data migration from Sage, QuickBooks, or scratch with GST/HST configuration, bank feeds, and training.',
        provider: {
            '@type': 'Organization',
            name: 'LedgerLogic',
            url: 'https://ledgerlogic.ca',
            logo: 'https://ledgerlogic.ca/images/LedgerLogic/ledgerlogic_150x150.png',
            founder: {
                '@type': 'Person',
                name: 'Seb Prost',
                jobTitle: 'CPA, Founder',
            },
        },
        areaServed: {
            '@type': 'Country',
            name: 'Canada',
        },
        serviceType: 'Accounting Software Migration',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Xero Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Full Data Migration',
                        description:
                            'Migrate opening balances, contacts, outstanding invoices/bills, and chart of accounts from Sage, QuickBooks, or any other platform to Xero.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'New Xero Setup',
                        description:
                            'Configure a new Xero organisation from scratch, tailored to your industry and Canadian tax requirements.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Cleanup & Optimization',
                        description:
                            'Clean up existing Xero files, fix coding errors, and optimise workflow with bank rules and tracking categories.',
                    },
                },
            ],
        },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'How long does a Xero migration take?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Most migrations are completed within 5–7 business days. Complex files with inventory, multi-currency, or job costing may take slightly longer due to additional data mapping and verification.',
                },
            },
            {
                '@type': 'Question',
                name: 'Will I lose any data during the migration?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No. We keep your old software as a read-only historical archive and verify every balance against the original. Opening balances, outstanding invoices, bills, and contacts are all transferred and tied out.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can you migrate from QuickBooks Online, not just desktop?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. We migrate from QuickBooks Online, QuickBooks Desktop, Sage 50, FreshBooks, Wave, and most other accounting platforms.',
                },
            },
            {
                '@type': 'Question',
                name: 'Do you handle GST/HST setup for my province?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely. We configure the correct tax rates for your province — HST, GST + PST, or QST — and ensure your chart of accounts and reporting align with CRA requirements.',
                },
            },
            {
                '@type': 'Question',
                name: "What if I'm starting a brand new business?",
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We offer full Xero setup for new businesses. This includes chart of accounts design, tax registration guidance, bank feed connections, invoice templates, and a training session.',
                },
            },
            {
                '@type': 'Question',
                name: 'How much does a Xero migration cost?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Pricing depends on the complexity of your file, the source platform, and how much historical data you need migrated. Book a free discovery call and we'll provide a fixed-price quote.",
                },
            },
            {
                '@type': 'Question',
                name: 'Do you provide ongoing bookkeeping after migration?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Many clients continue with monthly bookkeeping, reconciliation, and advisory services after migration. We offer flexible monthly plans tailored to Canadian businesses.',
                },
            },
            {
                '@type': 'Question',
                name: 'Is Xero a good fit for Canadian businesses?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Xero is one of the top cloud accounting platforms in Canada. It handles GST/HST natively, integrates with major Canadian banks, supports multi-currency, and has a large ecosystem of add-ons.',
                },
            },
        ],
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://ledgerlogic.ca',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Xero Migration & Setup',
                item: 'https://ledgerlogic.ca/xero-migration',
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}

export default function XeroMigrationPage() {
    return (
        <>
            <ServiceSchema />
            <XeroMigrationView />
        </>
    );
}
