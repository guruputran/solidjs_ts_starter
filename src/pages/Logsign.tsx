/** @format */
import type { Component } from "solid-js";
import { createEffect } from "solid-js";
import { For, onMount } from "solid-js";
import Store from "../store";
import styles from "../App.module.css";
import { useGlobalContext } from "../GlobalContext/store";

const Logsign: Component = () => {
  const { setPageName } = useGlobalContext();
  const [store, setStore] = Store;
  createEffect(() => {
    setPageName("Logsign");
  });
  onMount(() => {
    console.log("Users:", store.users);
  });
  return (
    <div>
      <p>this is the Login and Signup page</p>
      <For each={store.users}>
        {(user, i) => (
          <p class={styles.paddingLeft}>
            {i() + 1}: {user}
          </p>
        )}
      </For>
    </div>
  );
};

export default Logsign;
