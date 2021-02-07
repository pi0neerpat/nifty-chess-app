## Hosting

Redwood is pretty easy (and free) to host using Vercel (FE) and Heroku (databse). Check out the [hosting tutorial](https://redwoodjs.com/tutorial/deployment).

# How I built this

For this app, I used this tutorial [Using RedwoodJs to create an Ethereum app](https://patrickgallagher.dev/blog/2020/11/18/web3-redwood-intro/using-redwoodjs-to-create-an-ethereum-app) as a starting point.

```bash
yarn create redwood-app nifty-chess-app
cd nifty-chess-app

yarn workspace api add @ethersproject/providers

# Make it pretty :)
yarn rw setup tailwind

yarn rw setup auth ethereum
```

Complete auth setup by reading the [docs](https://github.com/oneclickdapp/ethereum-auth) for `@oneclickdapp/ethereum-auth`

```bash
# Optional if you will be host. Currently RedwoodJS may have some bugsversion for hosting
yarn add -D @redwoodjs/core@0.23.1-pat-prisma --registry=https://npm.patrickgallagher.dev:443 -W

yarn workspace api add @redwoodjs/core@0.23.1-pat-prisma @redwoodjs/api@0.23.1-pat-prisma @redwoodjs/auth@0.23.0-pat --registry=https://npm.patrickgallagher.dev:443
```

Now we are cooking. I'll create my `Game` entity and add some elements to it in `schema.prisma`.

```
model User {
  address    String  @id
  authDetail AuthDetail
  gamesMinted Game[] @relation(name:"gamesMinted")
}

model Game {
  id        String   @id @default(uuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  playedAt DateTime
  mintedAt DateTime
  moves String
  movesHash String
  black String
  white String
  minter User?  @relation(name:"gamesMinted", fields: [minterAddress], references: [address])
  minterAddress String
}
```

Now we will start scaffolding. Before you run scaffold command, you may need to remove the relations value. Be sure to add them back after the scaffold!

```bash
yarn rw g scaffold game
```

And make some pages / layouts

```bash
yarn rw generate layout default
yarn rw generate page home /
yarn rw g page Login
```

Now let's add some `<Private>` routes to ensure we have the user's address before they do things like mint a new NFT

```js
<Private unauthenticated="login">
  <Route path="/flows/{to}/new" page={NewFlowPage} name="newFlow" />
</Private>
```

We can also cleanup some pages we won't need like `newUser`.

Now let's set up our `DefaultLayout`. Since we are wrapping `Routes`, we need to pass down props for auth from the `AuthProvider`.

```js
// web/index.js
import DefaultLayout from 'src/layouts/DefaultLayout'

ReactDOM.render(
  ...
  <RedwoodApolloProvider>
    <DefaultLayout>
      <Routes />
    </DefaultLayout>
  </RedwoodApolloProvider>
  ...,
  document.getElementById('redwood-app')
)


// Then in web/layouts/DefaultLayout.js use some React hackz, eg.
{React.cloneElement(children, { useAuth })}
```

In our `LoginPage`