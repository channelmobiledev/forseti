# Forseti

OnlyFans, but for pictures of desk setups

> Forseti, God of Mediation

# Roadmap

## Desk Setups

```typescript
interface DeskSetups {
  gallery: string[];
  components: component[];
}
```

## Component

```typescript
interface Component {
  picture: string;
  name: string;
  type: ComponentType;
  link: string;
  addToWishlist: () => {serivce.addToWishlist(componentId)};
}
```

### ComponentType

// This one needs to be provided by the system

```typescript
interface ComponentType {
  name: string;
  icon: string;
}
```

## Profile

```typescript
interface User {
  picture: string;
  name: string;
  email: string;
}
```

```typescript
interface ComponentType {
  user: User;
  following: User[];
  followers: User[];
  favourites: DeskSetups[];
  wishlist: Component[];
}
```
