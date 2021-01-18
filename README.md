# Recoil tutorial

Following https://recoiljs.org/docs/introduction/getting-started

### Thoughts

- Pretty typical setup, with a contex-y component that influences everything else

- Atoms are like a useState hook that can be used in multiple places, and has other bells and whistles, I guess?

- They have selectors, which are your typical derived state, smartly executed, I guess.

- It seems they really want you to use these atoms and selectors as global singletons. Not injected through context or anything. I am not sure I like that.
