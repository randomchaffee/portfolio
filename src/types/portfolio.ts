export type DocumentItem = {
    id: string | number;
    title: string;
    timestamp: string;
    url?: string;
}

export type ActivityItem = {
    id: string;
    type: 'like' | 'publish' | 'update';
    user?: string;
    actionText: string;
    targetTitle: string;
    timestamp?: string;
    url?: string;
}

export type PostItem = {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    publishedAt: string;
    tags: string[];
}
