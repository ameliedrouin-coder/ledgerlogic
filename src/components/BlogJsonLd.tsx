import { BlogPost } from '../data/blogData';

export default function BlogJsonLd({ post }: { post: BlogPost }) {
    const siteUrl = 'https://ledgerlogic.ca';
    // Ensure image is absolute for Schema.org
    const imageUrl = post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`;

    const articleSchema = {
        '@type': 'Article',
        headline: post.title,
        image: [imageUrl],
        datePublished: post.date,
        dateModified: post.dateModified || post.date,
        author: [{
            '@type': 'Person',
            name: post.author,
            url: `${siteUrl}/chartered-professional-accountant/`, // Updated per prompt request for specific author URL
            jobTitle: "CPA",
            description: "Licensed CPA with 10+ years of experience including time at the CRA and in public practice. Founder of LedgerLogic.",
            worksFor: {
                '@type': 'Organization',
                name: 'LedgerLogic',
                url: siteUrl
            }
        }],
        publisher: {
            '@type': 'Organization',
            name: 'LedgerLogic',
            url: siteUrl,
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/logo.png`
            }
        },
        description: post.excerpt,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteUrl}/blog/${post.slug}`
        }
    };

    const faqSchema = post.faq ? {
        '@type': 'FAQPage',
        mainEntity: post.faq.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    } : null;

    const schemaGraph = {
        '@context': 'https://schema.org',
        '@graph': [
            articleSchema,
            ...(faqSchema ? [faqSchema] : [])
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
    );
}
