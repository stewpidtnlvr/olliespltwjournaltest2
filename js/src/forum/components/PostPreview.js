import Component from '../../common/Component';
import avatar from '../../common/helpers/avatar';
import username from '../../common/helpers/username';
import highlight from '../../common/helpers/highlight';

/**
 * The `PostPreview` component shows a link to a post containing the avatar and
 * username of the author, and a short excerpt of the post's content.
 *
 * ### Attrs
 *
 * - `post`
 */
export default class PostPreview extends Component {
  view() {
    const post = this.attrs.post;
    const user = post.user();
    const excerpt = highlight(post.contentPlain(), this.attrs.highlight, 300);

    return (
      <a className="PostPreview" route={app.route.post(post)} onclick={this.attrs.onclick}>
        <span className="PostPreview-content">
          {avatar(user)}
          {username(user)} <span className="PostPreview-excerpt">{excerpt}</span>
        </span>
      </a>
    );
  }
}
