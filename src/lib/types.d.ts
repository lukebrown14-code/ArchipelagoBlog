export interface Post {
	id: number;
	title: string;
	subTitle: string;
	tags: string[];
}

export interface PostsPageData {
	content: Record<number, Post>;
}

// You can add more types here as your project grows
export type PostStatus = 'draft' | 'published' | 'archived';
export type PostCategory = 'blog' | 'tutorial' | 'news';
