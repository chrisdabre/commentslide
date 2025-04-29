export interface Integration {
    id: string;
    name: 'INSTAGRAM';
    createdAt: Date;
    userId: string | null;
    token: string;
    expiresAt: Date | null;
    instagramId: string | null;
}

export interface AutomationData {
    id: string;
    name: string;
    User: {
        Integrations: Integration[];
        subscription: any | null;  // Replace 'any' with proper subscription type if available
    } | null;
    listener: any | null;  // Replace 'any' with proper listener type if available
    trigger: any[];       // Replace 'any' with proper trigger type if available
    posts: any[];        // Replace 'any' with proper posts type if available
    keywords: any[];     // Replace 'any' with proper keywords type if available
}

export interface AutomationResponse {
    data: AutomationData | null;
}