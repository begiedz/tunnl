# Technical Conspect

### 1. I fought 2 days fixing this UserContext Webpack thing in main page.tsx

```tsx
Error: (0 , \_context_UserContext**WEBPACK_IMPORTED_MODULE_3**.useUser) is not a function

Source
app/(main)/page.tsx (8:45) @ useUser
6 |
7 | export default function Home() {

8 | const { isLoading, currentUser } = useUser()
9 |
10 | console.log(currentUser)
11 | if (!currentUser) {
```

### Solution:

Wraped the if in useEffect and change redirect to useRouter for client side.

It wasn't intuitive, because of what Next was saying about an error and also that wasn't problem o useUser at all. IDE or TS didn't threw out any error at all.
