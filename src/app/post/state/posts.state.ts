import { IPost } from 'src/app/interfaces/post.interface';

export interface PostsState {
  posts: IPost[];
}

export const intialState: PostsState = {
  posts: [
    { id: 1, title: 'Post 1', description: 'Hello from post 1' },
    { id: 2, title: 'Post 2', description: 'Hello from post 2' },
    { id: 3, title: 'Post 3', description: 'Hello from post 3' },
    { id: 4, title: 'Post 4', description: 'Hello from post 4' },
    { id: 5, title: 'Post 5', description: 'Hello from post 5' },
    { id: 6, title: 'Post 6', description: 'Hello from post 6' },
  ],
};
