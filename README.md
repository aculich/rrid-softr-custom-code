# rrid-softr-custom-code

[Open in ⚡️ StackBlitz on current branch: feature/debounce-claimandedit](https://stackblitz.com/github.com/aculich/rrid-softr-custom-code/tree/feature/debounce-claimandedit)

## How to Merge the Code

If the changes in the `feature/debounce-claimandedit` branch work as expected, you can merge the branch into the main branch. Follow these steps:

1. Ensure you are on the main branch:
    ```bash
    git checkout main
    ```

2. Pull the latest changes from the remote main branch:
    ```bash
    git pull origin main
    ```

3. Merge the `feature/debounce-claimandedit` branch into the main branch:
    ```bash
    git merge feature/debounce-claimandedit
    ```

4. Push the merged changes to the remote repository:
    ```bash
    git push origin main
    ```

By following these steps, you will integrate the changes from the `feature/debounce-claimandedit` branch into the main branch.

# Description of Changes

`feat: Implement debounce pattern and improve error handling for Airtable updates`

### Summary
- Implemented the debounce pattern to limit the rate of function execution for table filtering.
- Added checks to ensure DOM elements exist before manipulating them.
- Improved error handling for Airtable updates to log specific errors.

### Changes
1. **Debounce Pattern**:
   - Introduced a `debounce` function to limit the rate of `updateTableFilter` execution.
   - This helps prevent performance issues caused by rapid successive calls to the filter function.

2. **Element Existence Check**:
   - Added checks to ensure `buttonElement` exists before manipulating its properties in the `claimAndEditRow` function.
   - This prevents errors related to attempting to manipulate DOM elements that may no longer exist.

3. **Error Handling**:
   - Enhanced error handling in the `updateAirtable` function to log specific errors.
   - This provides better visibility into issues that may arise during Airtable updates.

### Architectural Issues Addressed
1. **Race Conditions for DOM Manipulation**:
   - The debounce pattern helps mitigate race conditions by ensuring that DOM manipulation functions are not called too frequently.
   - This reduces the likelihood of conflicts arising from multiple rapid updates to the DOM.

2. **Race Conditions in Distributed Systems**:
   - The `claimAndEditRow` function addresses race conditions that can occur when multiple users attempt to acquire a lock on the same record in Airtable.
   - By fetching the latest data and checking the "Taken" status before allowing edits, we ensure that only one user can claim a record at a time.
   - Improved error handling ensures that any issues during the update process are logged, providing better insights into potential race conditions.

### Underlying Architectural Issues
- **DOM Manipulation**:
  - Rapid successive calls to DOM manipulation functions can lead to race conditions where elements are modified or removed before the previous operations are completed.
  - The debounce pattern helps mitigate this by ensuring that functions are not called too frequently, reducing the likelihood of conflicts.

- **Distributed Systems**:
  - In a distributed system where multiple users interact with a remote service (e.g., Airtable), race conditions can occur when two users simultaneously try to acquire a lock on the same resource.
  - This can lead to inconsistencies and conflicts, as both users may believe they have successfully acquired the lock.
  - By implementing checks and error handling, we can ensure that only one user can claim a record at a time, reducing the likelihood of race conditions.

### Conclusion
These changes improve the robustness and reliability of the application by addressing performance issues and potential race conditions. The debounce pattern ensures that functions are not called too frequently, while improved error handling and checks help prevent conflicts in both DOM manipulation and interactions with Airtable.