import { Action, Image } from "./action";

type Object = {
  title: string;
  title_h2: string;
  title_h3: string;
  description: string;
  banner_title: string;
  banner_description: string;
  designation: string;
  name: string;
  html_code: string;
  body: string;
}

type Employee = {
  image: Image;
  name: string;
  designation: string;
  $: Object;
}

type BucketList = [
  BucketArray:{
    title_h3: string;
    description: string;
    url: string;
    call_to_action: Action;
    icon: Image;
    $: Object;
  }
]

type Card = [
  cardArray: {
    title_h3: string;
    description: string;
    call_to_action: Action;
    $: Object;
    }
]

type Article = {
  href: string;
  title: string;
  $: Object;
}

type FeaturedBlog = [
  BlogArray: {
    title: string;
    featured_image: Image;
    body: string;
    url: string;
    $: Object;
  }
]

type Widget = {
  title_h2: string;
  type?: string;
  $: Object;
}

export type Component = {
  hero_banner: Banner;
  section?: SectionProps;
  section_with_buckets?: SectionWithBucket;
  from_blog?: FeaturedBlogData;
  section_with_cards?: Cards;
  section_with_html_code?: ObjectProps;
  our_team?: TeamProps;
  widget?: Widget;
  related_documents?: RelatedFile
  grouped_related_documents?: GroupedRelatedFiles
}

export type RelatedFile = {
  title: string,
  file: FileAsset,
  $: Object
}

export type GroupedRelatedFiles = {
  files?: GroupedRelatedFile[]
}

export type GroupedRelatedFile = {
  title: string,
  file_asset: FileAsset,
  $: Object
}

export type FileAsset = {
  content_type:string,
  file_size:string,
  file_name: string,
  title: string,
  url: string,
  $: Object
}

export type SectionWithBucket = {
    bucket_tabular: boolean
    title_h2: string;
    buckets: BucketList;
    description: string;
    $: Object;
  }

export type Cards = {
    cards: Card;
  }
  
export type Banner = {
    banner_title:string;
    banner_description: string;
    bg_color: string;
    call_to_action: Action;
    banner_image: Image;
    text_color: string;
    $: Object;
  }
  
export type ObjectProps = {
    html_code_alignment: string;
    title: string;
    $: Object;
    description: string;
    html_code: string;
  }
  
export type SectionProps = {
    title_h2: String;
    description: string;
    call_to_action: Action;
    image: Image;
    image_alignment: string;
    $: Object;
  } 
  
export type TeamProps = {
    title_h2: string;
    description: string;
    $: Object;
    employees: [Employee];
  }
  
export type FeaturedBlogData = {
    title_h2: string;
    view_articles: Article;
    featured_blogs: FeaturedBlog;
    $: Object;
}

export type RenderProps = {
  blogsPage?: boolean;
  contentTypeUid: string;
  entryUid: string;
  locale: string;
  pageComponents:Component[];
}