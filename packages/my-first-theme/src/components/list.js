// File: /packages/my-first-theme/src/components/list.js

import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import CoCartAPI from "@cocart/cocart-rest-api";
import UserComponent from "./UserComponent"

const List = ({ state, actions }) => {

  // so I think what you need to do is write an async await function and return some data from it to the front it.
    // a simple example not specific to your products just yet.
  // then you need to alter it to see if you can print out some info on products
  // then continue to get all the data you need out of it to present a list of posts.
  const data = state.source.get(state.router.link)

  // const CoCart = new CoCartAPI({
  //   url: "https://betterdeveloperdocs.com",
  // });
  
  // CoCart.get("products")
  //   .then((response) => {
  //     console.log("Response Status:", response.status);
  //     // console.log("Response Headers:", response.headers);
  //     console.log("Response Data:", response.data);
  //   })
  //   .catch((error) => {
  //     console.log("Response Status:", error.response.status);
  //     // console.log("Response Headers:", error.response.headers);
  //     console.log("Response Data:", error.response.data);
  //   })
  //   .finally(() => {
  //     // Always executed.
  // });

  return (
    <UserComponent>
    </UserComponent>
    // <Items>
      // {data.items.map((item) => {
      //   const post = state.source[item.type][item.id]
      //   return (
      //     <Link key={item.id} link={post.link}>
      //       {post.title.rendered}
      //       <br />
      //     </Link>
      //   )
      // })}
      //  <PrevNextNav>
      //   {data.previous && (
      //     <button
      //       onClick={() => {
      //         actions.router.set(data.previous)
      //       }}
      //     >
      //       &#171; Prev
      //     </button>
      //   )}
      //   {data.next && (
      //     <button
      //       onClick={() => {
      //         actions.router.set(data.next)
      //       }}
      //     >
      //       Next &#187;
      //     </button>
      //   )}
      // </PrevNextNav>

    // </Items>
  )
}

export default connect(List)

const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
  }
`
const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`