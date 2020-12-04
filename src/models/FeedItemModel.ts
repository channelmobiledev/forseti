export default interface FeedItemModel {
  user: User;
  post: Post;
}

interface User {
  name: string;
  avatar: string;
}

interface Post {
  id: number;
  title: string;
  photo: string;
}
