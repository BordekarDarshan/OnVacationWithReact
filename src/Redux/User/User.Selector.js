import { createSelector } from "reselect";

// [Redux State Selector]
const userSelector = (state) => state.user;

export const currentUserSelector = createSelector(
  [userSelector],
  (user) => user.currentUser
);
// Second Parameter gets the return of the first parameter.
// "user" means user Property in redux state object or selector.

// createStructuredSelector
