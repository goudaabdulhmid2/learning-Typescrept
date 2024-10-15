class Post {
  id: number;
  constructor(public title: string, public body: string) {
    this.id = Date.now();
  }
}

export default Post;
