import Post from './PostModel';
import User from './UserModel';

export default interface FeedItemModel {
  user: User;
  post: Post;
}
