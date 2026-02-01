Task 1: useLocalStorage — Hook anatomy mastery
Objective: “Hook আসলে function + hook” এই truth lock করা।
Deliverable mindset: reusable, side-effect aware utility।

কি করতে হবে:
একটা useLocalStorage(key, initialValue) custom hook বানাবে।
Hook এর ভিতরে useState + useEffect থাকবে।
Return করবে [value, setValue] — ঠিক useState এর মতো।

Success criteria:
Component এ use করলে direct localStorage touch করবে না।
Refresh দিলে data persist থাকবে।
Hook ছাড়া একই কাজ করতে গেলে code duplication দেখা যাবে—এই pain টা অনুভব করাই লক্ষ্য।

Why this works:
এখানে তুমি শিখবে

Hook কেন top-level function

Return contract কেন array

Side effect কোথায় belong করে
