

# Axion React Components

**Axion** — Artificial eXecution Intelligence and Orchestration Nexus
A futuristic, neon-styled React component library built for **modern apps**.

---

## Features
- Fully responsive and mobile-friendly
- Neon/futuristic UI style
- Clickable, reusable components
- React 18 + 19 compatible
- Easily importable via npm or GitHub

---

## Installation

### From npm
```bash
npm install axion-react-components
```
### From github
```bash
npm install git+ssh://git@github.com/XSpiritWizardX/axion-react-components.git
```

## Usage

### Import Components Example


## AXION GRID

```js
    import { Grid} from 'axion-react-components';

```

```jsx
// //// single axion grid

<Grid
  items={6}
  columns={3}
  cardBgColor="#22263bff"
  cardBorderColor="hsl(190, 90%, 60%)"
  cardHoverBgColor="#3a3535ff"
  cardTextColor="#ffffff"
  spotHSL="200 90% 60%" //spotlight color
  children={[ // this is the contents of the grid...
    <div>Custom Content 1</div>,
    <div>Custom Content 2</div>,
    <div>Custom Content 3</div>,
    <div>Custom Content 4</div>,
    <div>Custom Content 5</div>,
    <div>Custom Content 6</div>,
  ]}
/>


// //// nested axion grid with different spotlight colors

<Grid
  items={2}
  columns={2}
  cardBgColor="#22263bff"
  cardBorderColor="hsl(200, 90%, 60%)"
  cardHoverBgColor="#3a3535ff"
  cardTextColor="#fff"
  spotHSL="200 90% 60%" // cyan spotlight
  children={[
    <div>
      Nested 1
      <Grid
        items={3}
        columns={1}
        cardBgColor="#22263bff"
        cardBorderColor="hsl(300, 80%, 60%)"
        cardHoverBgColor="#3a2f32ff"
        cardTextColor="#fff"
        spotHSL="300 80% 60%" // purple spotlight
        children={[
          <div>n nested custom card 1</div>
          <div>n nested custom card 2</div>
          <div>n nested custom card 3</div>
        ]}
      />
    </div>,
    <div>Nested 2</div>
  ]}
/>
```
| Prop               | Type          | Default         | Description                                                                                 |
| ------------------ | ------------- | --------------- | ------------------------------------------------------------------------------------------- |
| `items`            | `number`      | `9`             | Number of cards to render.                                                                  |
| `columns`          | `number`      | `3`             | Number of columns in the grid.                                                              |
| `cardBgColor`      | `string`      | `var(--panel)`  | Background color of each card. Accepts hex, rgb(a), or gradients.                           |
| `cardBorderColor`  | `string`      | `var(--accent)` | Border color of each card.                                                                  |
| `cardHoverBgColor` | `string`      | `var(--panel)`  | Background color of a card when hovered.                                                    |
| `cardTextColor`    | `string`      | `var(--text)`   | Text color of card content.                                                                 |
| `spotHSL`          | `string`      | `"190 90% 60%"` | Spotlight HSL color affecting the border glow. Supports nested grids with different colors. |
| `children`         | `ReactNode[]` | `undefined`     | Optional content for each card. If not provided, default `Card X` text is rendered.         |


![Axion Grid](https://res.cloudinary.com/dl6ls3rgu/image/upload/v1757302854/Screenshot_2025-09-07_232332_epa9yu.png "Axion Grid")


![Axion Grid 2](https://res.cloudinary.com/dl6ls3rgu/image/upload/v1757302854/Screenshot_2025-09-07_222851_lfyuv5.png "Axion Grid 2")



![Axion grid 3](https://res.cloudinary.com/dl6ls3rgu/image/upload/v1757303003/Screenshot_2025-09-07_234310_gcwcmd.png "Axion Grid 3")

## AXION BUTTON

still working on this


## Development
* Run dev server

```bash
npm run dev
```

* build library
```bash
npm run build
```

* Lint code
```bash
npm run lint
```




## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push & open a pull request

## License
MIT License © Dustin Bovee
