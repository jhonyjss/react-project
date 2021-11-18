import React from "react";
import { Component } from "react";
import { Button } from "./Button";
import Posts from "./Post";
import { TextInput } from "./TextInput";

class Arrays extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 5,
    searchValue: "",
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photoResponse = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, photos] = await Promise.all([postsResponse, photoResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = async () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { page, postsPerPage, allPosts, posts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title
            .toLowerCase()
            .includes(searchValue.toLocaleLowerCase());
        })
      : posts;

    return (
      <section className="container mx-auto">
        <div className="w-full my-2">
          {!!searchValue && <h1>Search value: {searchValue}</h1>}
          <TextInput
            searchValue={searchValue}
            handleChange={this.handleChange}
          ></TextInput>
        </div>
        <Posts posts={filteredPosts}></Posts>

        {filteredPosts.length === 0 && <p>Não existem posts =(</p>}
        {!searchValue && (
          <Button
            text="LOAD MORE"
            disabled={noMorePosts}
            onClick={this.loadMorePosts}
          ></Button>
        )}
      </section>
    );
  }
}

export default Arrays;
