export interface PublishDetails {
  environment: string;
  locale: string;
  time: string;
  user: string;
}

export interface File {
  uid: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  content_type: string;
  file_size: string;
  tags: string[];
  filename: string;
  url: string;
  ACL: any[];
  is_dir: boolean;
  parent_uid: string;
  _version: number;
  title: string;
  publish_details: PublishDetails;
}

export interface Link {
  title: string;
  href: string;
}

export interface Taxonomy {
  taxonomy_uid: string;
  max_terms?: number;
  mandatory: boolean;
  non_localizable: boolean;
}

export interface FileItem {
  /** Version */
  _version?: 1;
  title: string;
  file: File;
}

export interface Seo {
  /** Version */
  _version?: 1;
  meta_title?: string;
  meta_description?: string;
  keywords?: string;
  enable_search_indexing?: boolean;
}

export interface FileItemType {
  /** Version */
  _version?: 2;
  title: string;
  file?: FileItem;
}

export interface ImpactStories {
  /** Version */
  _version?: 4;
  title: string;
  url: string;
  introduction_title?: string;
  introduction_text?: string;
  image?: File | null;
}

export interface ImpactStory {
  /** Version */
  _version?: 13;
  title: string;
  url?: string;
  introduction_title?: string;
  date?: string | null;
  introduction_text?: string;
  body?: (
    | {
        image: { image?: File | null; image_text?: string };
        title: undefined;
        text: undefined;
      }
    | { title: { title?: string }; image: undefined; text: undefined }
    | { text: { text?: string }; image: undefined; title: undefined }
  )[];
  cards?: { card: { title?: string; text: string; link?: Link } }[];
  sector?: ("Huisvesting" | "Zorg" | "Public" | "Onderwijs") | null;
}

export interface Header {
  /** Version */
  _version?: 5;
  title: string;
  logo: File;
  navigation_menu?: [
    {
      label?: string;
      page_reference: (Page | ImpactStory)[];
    },
    {
      label?: string;
      page_reference: (Page | ImpactStory)[];
    },
    {
      label?: string;
      page_reference: (Page | ImpactStory)[];
    },
    {
      label?: string;
      page_reference: (Page | ImpactStory)[];
    },
    {
      label?: string;
      page_reference: (Page | ImpactStory)[];
    },
    {
      label?: string;
      page_reference: (Page | ImpactStory)[];
    },
    {
      label?: string;
      page_reference: (Page | ImpactStory)[];
    },
    {
      label?: string;
      page_reference: (Page | ImpactStory)[];
    },
    {
      label?: string;
      page_reference: (Page | ImpactStory)[];
    },
    {
      label?: string;
      page_reference: (Page | ImpactStory)[];
    }
  ];
  notification_bar?: {
    announcement_text?: any;
    show_announcement?: boolean;
  };
}

export interface BlogPost {
  /** Version */
  _version?: 8;
  title: string;
  url?: string;
  author: Author[];
  date?: string | null;
  featured_image: File;
  body?: any;
  related_post?: BlogPost[];
  is_archived?: boolean;
  category?: ("category a" | "category b" | "category c") | null;
  seo?: Seo;
}

export interface Author {
  /** Version */
  _version?: 4;
  title: string;
  picture: File;
  bio?: string;
}

export interface Footer {
  /** Version */
  _version?: 4;
  title: string;
  logo: File;
  navigation?: {
    link?: Link[];
  };
  social?: {
    social_share?: {
      link?: Link;
      icon: File;
    }[];
  };
  copyright?: any;
}

export interface Page {
  /** Version */
  _version?: 11;
  title: string;
  url?: string;
  page_components?: (
    | {
        hero_banner: {
          banner_image?: File | null;
          bg_color?: string;
          text_color?: string;
          banner_title?: string;
          banner_description?: string;
          call_to_action?: Link;
        };
        contact_details: undefined;
        section_with_buckets: undefined;
        section: undefined;
        section_with_cards: undefined;
        section_with_html_code: undefined;
        from_blog: undefined;
        our_team: undefined;
        widget: undefined;
        related_documents: undefined;
        files: undefined;
      }
    | {
        contact_details: { address?: string; phone?: string; email?: string };
        hero_banner: undefined;
        section_with_buckets: undefined;
        section: undefined;
        section_with_cards: undefined;
        section_with_html_code: undefined;
        from_blog: undefined;
        our_team: undefined;
        widget: undefined;
        related_documents: undefined;
        files: undefined;
      }
    | {
        section_with_buckets: {
          title_h2?: string;
          description?: string;
          bucket_tabular?: boolean;
          buckets?: {
            title_h3?: string;
            description?: any;
            icon: File;
            call_to_action?: Link;
          }[];
        };
        hero_banner: undefined;
        contact_details: undefined;
        section: undefined;
        section_with_cards: undefined;
        section_with_html_code: undefined;
        from_blog: undefined;
        our_team: undefined;
        widget: undefined;
        related_documents: undefined;
        files: undefined;
      }
    | {
        section: {
          title_h2?: string;
          description?: string;
          call_to_action?: Link;
          image: File;
          image_alignment?: ("Left" | "Right") | null;
        };
        hero_banner: undefined;
        contact_details: undefined;
        section_with_buckets: undefined;
        section_with_cards: undefined;
        section_with_html_code: undefined;
        from_blog: undefined;
        our_team: undefined;
        widget: undefined;
        related_documents: undefined;
        files: undefined;
      }
    | {
        section_with_cards: {
          cards?: [
            {
              title_h3?: string;
              description?: string;
              call_to_action?: Link;
            },
            {
              title_h3?: string;
              description?: string;
              call_to_action?: Link;
            },
            {
              title_h3?: string;
              description?: string;
              call_to_action?: Link;
            }
          ];
        };
        hero_banner: undefined;
        contact_details: undefined;
        section_with_buckets: undefined;
        section: undefined;
        section_with_html_code: undefined;
        from_blog: undefined;
        our_team: undefined;
        widget: undefined;
        related_documents: undefined;
        files: undefined;
      }
    | {
        section_with_html_code: {
          title?: string;
          description?: any;
          html_code?: string;
          html_code_alignment?: ("Left" | "Right") | null;
        };
        hero_banner: undefined;
        contact_details: undefined;
        section_with_buckets: undefined;
        section: undefined;
        section_with_cards: undefined;
        from_blog: undefined;
        our_team: undefined;
        widget: undefined;
        related_documents: undefined;
        files: undefined;
      }
    | {
        from_blog: {
          title_h2?: string;
          featured_blogs?: BlogPost[];
          view_articles?: Link;
        };
        hero_banner: undefined;
        contact_details: undefined;
        section_with_buckets: undefined;
        section: undefined;
        section_with_cards: undefined;
        section_with_html_code: undefined;
        our_team: undefined;
        widget: undefined;
        related_documents: undefined;
        files: undefined;
      }
    | {
        our_team: {
          title_h2?: string;
          description?: string;
          employees?: {
            name?: string;
            designation?: string;
            image: File;
          }[];
        };
        hero_banner: undefined;
        contact_details: undefined;
        section_with_buckets: undefined;
        section: undefined;
        section_with_cards: undefined;
        section_with_html_code: undefined;
        from_blog: undefined;
        widget: undefined;
        related_documents: undefined;
        files: undefined;
      }
    | {
        widget: {
          title_h2?: string;
          type?: ("Blog Archive" | "Related Posts") | null;
        };
        hero_banner: undefined;
        contact_details: undefined;
        section_with_buckets: undefined;
        section: undefined;
        section_with_cards: undefined;
        section_with_html_code: undefined;
        from_blog: undefined;
        our_team: undefined;
        related_documents: undefined;
        files: undefined;
      }
    | {
        related_documents: { modular_blocks?: { file: FileItem }[] };
        hero_banner: undefined;
        contact_details: undefined;
        section_with_buckets: undefined;
        section: undefined;
        section_with_cards: undefined;
        section_with_html_code: undefined;
        from_blog: undefined;
        our_team: undefined;
        widget: undefined;
        files: undefined;
      }
    | {
        files: FileItem;
        hero_banner: undefined;
        contact_details: undefined;
        section_with_buckets: undefined;
        section: undefined;
        section_with_cards: undefined;
        section_with_html_code: undefined;
        from_blog: undefined;
        our_team: undefined;
        widget: undefined;
        related_documents: undefined;
      }
  )[];
  seo?: Seo;
}
