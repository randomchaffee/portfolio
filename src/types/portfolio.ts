export interface DocumentItem {
    id: string;
    title: string;
    timestamp: string;
    url?: string;
}

export interface ActivityItem {
    id: string;
    type: 'like' | 'publish' | 'update';
    user?: string;
    actionText: string;
    targetTitle: string;
    timestamp?: string;
    url?: string;
}