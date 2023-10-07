// 3. No need to write a program. Just pseudocode is enough.Define a class for a instagram post. 
//Define the properties and functions.Define which one will be private and which one public.

class InstagramPost {
    // Private properties
    #postId;
    #authorId;
    #caption;
    #imageURL;
    #likes;
    #comments;
    #timestamp;
  
    constructor(authorId, caption, imageURL) {
      // Public constructor to create a new post
      this.#postId = generateUniqueId(); // Private method to generate a unique post ID
      this.#authorId = authorId;
      this.#caption = caption;
      this.#imageURL = imageURL;
      this.#likes = 0;
      this.#comments = [];
      this.#timestamp = getCurrentTimestamp(); // Private method to get the current timestamp
    }
  
    // Public method to like the post
    like() {
      this.#likes++;
    }
  
    // Public method to add a comment to the post
    addComment(comment) {
      this.#comments.push(comment);
    }
  
    // Public method to get post details
    getPostDetails() {
      return {
        postId: this.#postId,
        authorId: this.#authorId,
        caption: this.#caption,
        imageURL: this.#imageURL,
        likes: this.#likes,
        comments: this.#comments,
        timestamp: this.#timestamp,
      };
    }
  
    // Private method to generate a unique post ID
    #generateUniqueId() {
      // Implementation for generating a unique ID
    }
  
    // Private method to get the current timestamp
    #getCurrentTimestamp() {
      // Implementation for getting the current timestamp
    }
  }
  