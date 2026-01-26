🧩 Practice Task 2: Counter with STEP Control (Foundation Solidifier)

Business goal:
User নিজের ইচ্ছামতো step সেট করবে, তারপর counter সেই step অনুযায়ী বাড়বে/কমবে।

Requirements (non-negotiable):

state হবে object

{ count: 0, step: 1 }

Action types:

"INCREMENT"

"DECREMENT"

"SET_STEP"

Input field থেকে user step সেট করবে

- ক্লিক → count বাড়বে step অনুযায়ী

* ক্লিক → count কমবে step অনুযায়ী

Rules:

সব logic reducer-এর ভিতরে

component-এর ভিতরে কোনো calculation না

reducer-এ switch বাধ্যতামূলক

Why this matters:
এটা তোমাকে শেখাবে reducer কীভাবে multiple state + payload handle করে।

#

##

###

####

#####

🧠 Practice Task 3: Mini Task Status Manager (Real App Thinking)

Business goal:
একটা simple task-এর status toggle করা (Smart Dashboard mindset)।

Initial state:

{
taskName: "Learn useReducer",
status: "pending" // pending | completed
}

Action types:

"MARK_COMPLETED"

"MARK_PENDING"

UI Requirements:

Task name দেখাবে

Status দেখাবে

Button:

যদি status pending → “Mark as Completed”

যদি status completed → “Mark as Pending”

Reducer rules:

status সরাসরি mutate করা যাবে না

নতুন state return করতে হবে

Why this matters:
এটা exactly সেই pattern যেটা তুমি Smart Task Dashboard-এ ব্যবহার করবে।
