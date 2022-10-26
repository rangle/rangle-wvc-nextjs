This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
<br>

### Run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

<br>

### Run storybook:

```bash
yarn storybook
```
Open http://localhost:6006/?path=/story/example-introduction--page with your browser to see the result.

<br>
<br>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<br>

## Conventions

### Code Formatting

- Format code using [prettier](https://prettier.io/) - [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscodes)
### Branch Naming 

type/company/branch-name
- type: feature, bug, chore, etc    
- example: feature/rangle/tabs

### PR Template

*Include Links to*

- [WVC Component Spreadsheet](https://docs.google.com/spreadsheets/d/1V8gw9LwVEOOfs8nMq7MnW3cpyaPU72ImtHHwCAOcrYI/edit#gid=0)
- [Figma Designs](https://www.figma.com/file/07lYCuZ0FsKrMSFTvWKcPj/WV-Components?node-id=6%3A495) - link to design for appropiate component
- jira ticket if applicable 

**Include**

- Screenshots if applicable
- Testing details
- Components should include a storybook story, showing light mode and dark mode 



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Packages of Note

- [NextJS](https://nextjs.org/) -[docs](https://nextjs.org/docs/getting-started)
- [react-aria](https://react-spectrum.adobe.com/react-aria/) - A library of React Hooks that provides accessible UI primitives for your design system.
- [react-stately](https://react-spectrum.adobe.com/react-stately/index.html) - A library of React Hooks that provides cross-platform state management for your design system. 



### react-aria

react-aria is a package that has a number of hooks to make writing accessible components easier, and helps manage common tasks such as

- [useFocus](https://react-spectrum.adobe.com/react-aria/useFocus.html) - Handles focus events for the immediate target. Focus events on child elements will be ignored
- [useTabList](https://react-spectrum.adobe.com/react-aria/useTabList.html) - Provides the behavior and accessibility implementation for a tab list. Tabs organize content into multiple sections and allow users to navigate between them.


### react-stately 

some components still require some state to manage selected items, position in a carasoule, etc, [react-stately](https://react-spectrum.adobe.com/react-stately/getting-started.html) provides hooks for common tasks, see [docs](https://react-spectrum.adobe.com/react-stately/getting-started.html) for full details.

- [useTabListState](https://react-spectrum.adobe.com/react-stately/useTabListState.html) - Provides state management for a Tabs component. Tabs include a TabList which tracks which tab is currently selected and displays the content associated with that Tab in a TabPanel.



