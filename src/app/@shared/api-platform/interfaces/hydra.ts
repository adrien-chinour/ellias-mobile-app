export interface APIPlatformPagedCollection<T extends { id: number }> {
    "hydra:totalItems"?: number;
    "hydra:member"?: T[];
    "@context"?: string;
    "@id"?: string;
    "@type"?: string;
    "hydra:view"?: {
        "@id"?: string;
        "@type"?: string;
        "hydra:first"?: string;
        "hydra:last"?: string;
        "hydra:previous"?: string;
        "hydra:next"?: string;
    };
}

export interface APIPlatformCollection<T extends { id: number }> {
    "hydra:totalItems"?: number;
    "hydra:member"?: T[];
    "@context"?: string;
    "@id"?: string;
    "@type"?: string;
}
