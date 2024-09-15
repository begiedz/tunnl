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

### 2. Redirecting to Sign In page in owner-info component wasn't working by setting the currentUser to null

```tsx
<Button
  variant="outline"
  size="sm"
  onClick={async () => {
    await auth.signOut()
    setCurrentUser(null)
  }}
>
  <UserRoundX size={18} />
</Button>
```

```
Unhandled Runtime Error

TypeError: null is not an object (evaluating 'currentUser.avatar')
```

### Solution:

After adding currentUser exist check with returning null did the thing.

```tsx
if (!currentUser) {
  return null
}
```
