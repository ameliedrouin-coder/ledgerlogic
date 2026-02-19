
import AffiliateToolsView from '../../src/views/AffiliateToolsView';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Best Accounting Software & Tools for Canadian Small Businesses (2026)',
    description: 'CPA-curated accounting tools for Canadian businesses. Compare Xero, Ramp, Dext, A2X, and more with exclusive discounts and honest reviews from a licensed CPA.',
    keywords: 'Canadian accounting software, Xero Canada, QuickBooks Canada, Canadian business banking, Venn, business tools Canada, GST HST software, Canadian startup tools',
    openGraph: {
        title: 'Best Accounting Software & Tools for Canadian Businesses (2026)',
        description: 'CPA-curated accounting tools for Canadian businesses. Compare Xero, Ramp, Dext, A2X, and more with exclusive discounts and honest reviews from a licensed CPA.',
        images: ['/images/tools-hero.jpg'],
        type: 'website',
        locale: 'en_CA',
    },
    alternates: {
        canonical: '/tools',
    },
    robots: {
        index: true,
        follow: true,
    },
};

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Accounting Tools for Canadian Businesses (2026)",
    "description": "CPA-curated accounting software and business tools for Canadian SMEs.",
    "url": "https://www.ledgerlogic.ca/tools",
    "numberOfItems": 8,
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Xero",
            "url": "https://www.ledgerlogic.ca/tools/xero-canada"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Ownr",
            "url": "https://www.ledgerlogic.ca/tools/ownr-canada-review"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Venn",
            "url": "https://www.ledgerlogic.ca/tools/venn-canada-review"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "Ramp",
            "url": "https://www.ledgerlogic.ca/tools/ramp-canada-review"
        },
        {
            "@type": "ListItem",
            "position": 5,
            "name": "Float",
            "url": "https://www.ledgerlogic.ca/tools/float-canada-review"
        },
        {
            "@type": "ListItem",
            "position": 6,
            "name": "Dext",
            "url": "https://www.ledgerlogic.ca/tools/dext-canada"
        },
        {
            "@type": "ListItem",
            "position": 7,
            "name": "A2X",
            "url": "https://www.ledgerlogic.ca/tools/shopify-accounting-apps"
        },
        {
            "@type": "ListItem",
            "position": 8,
            "name": "Synder",
            "url": "https://www.ledgerlogic.ca/tools/synder-review"
        }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Do I need separate accounting software for my Canadian corporation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we strongly recommend using Canadian-specific accounting software like Xero or QuickBooks Online. These platforms handle GST/HST correctly, support Canadian payroll deductions, and integrate with CRA filing requirements. Generic or US-only software often creates compliance issues."
            }
        },
        {
            "@type": "Question",
            "name": "What's the difference between Xero and QuickBooks for Canadian businesses?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Xero is ideal for service businesses and startups. It has a cleaner interface and includes Hubdoc for receipt capture. QuickBooks Online is better for e-commerce businesses with inventory or complex project tracking needs. Both are fully Canadian tax-compliant."
            }
        },
        {
            "@type": "Question",
            "name": "Which business bank account has the best FX rates for Canadian startups?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Venn offers some of the lowest FX fees among Canadian business banks, especially for multi-currency operations. Traditional banks like RBC and TD have higher fees but offer in-person service. For tech companies dealing in USD, Venn or Ramp are typically the most cost-effective options."
            }
        },
        {
            "@type": "Question",
            "name": "Can I switch from QuickBooks to Xero without losing data?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Both Xero and QuickBooks allow data migration. Most accounting firms, including LedgerLogic, can help migrate your chart of accounts, invoices, and historical transactions. The process typically takes 1-2 weeks. We recommend switching at fiscal year-end to keep things clean."
            }
        },
        {
            "@type": "Question",
            "name": "What tools do I need if I run a Shopify store in Canada?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For Canadian Shopify stores, we recommend: Xero or QuickBooks for accounting, Synder or A2X to sync Shopify sales automatically, Venn for business banking, and Dext for tracking supplier invoices and receipts. This stack automates over 80% of your bookkeeping."
            }
        },
        {
            "@type": "Question",
            "name": "How much does a typical Canadian SMB tool stack cost per month?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A basic stack of accounting software, bank account, and receipt management runs $50-100 per month. A full stack including spend management and e-commerce sync tools is typically $150-300 per month. With the special offers on this page, you can save 40-60% in your first year."
            }
        }
    ]
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.ledgerlogic.ca/"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Tools & Offers",
            "item": "https://www.ledgerlogic.ca/tools"
        }
    ]
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <AffiliateToolsView />
        </>
    );
}
