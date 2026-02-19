export default function LocalBusinessSchema() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AccountingService',
        name: 'LedgerLogic CPA',
        image: 'https://www.ledgerlogic.ca/images/LedgerLogic/ledgerlogic_150x150.png',
        '@id': 'https://www.ledgerlogic.ca',
        url: 'https://www.ledgerlogic.ca',
        telephone: '+1-514-555-0199', // Replace with real number if available, or remove
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Main St', // Placeholder
            addressLocality: 'Montreal',
            addressRegion: 'QC',
            postalCode: 'H3Z 2Y7',
            addressCountry: 'CA',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 45.5017,
            longitude: -73.5673,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '17:00',
            },
        ],
        sameAs: [
            'https://www.linkedin.com/company/ledgerlogic',
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Accounting Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Virtual CFO Services',
                        description: 'Strategic financial planning, budgeting, and cash flow forecasting.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Tax Planning & Filing',
                        description: 'Year-round tax optimization and corporate tax filing for Canadian corporations.',
                    },
                },
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
