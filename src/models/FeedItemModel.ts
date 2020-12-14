import UserModel from './UserModel';
import PostModel from './PostModel';

export default interface FeedItemModel {
  user: UserModel;
  post: PostModel;
}
